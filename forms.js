/* WEDE5020 Part 3: external JavaScript validation + Netlify AJAX submission.
  */
'use strict';
(() => {
  const phoneRegex = /^(?:\+27|0)[ -]?[1-9](?:[ -]?\d){8}$/;
  const isNetlify = (form) => location.hostname.endsWith('.netlify.app') || form.dataset.backend === 'netlify';

  function setStatus(element, text, kind = 'info') {
    if (!element) return;
    element.replaceChildren(document.createTextNode(text));
    element.className = `form-status ${kind}`;
  }

  function validationMessage(field) {
    const value = field.type === 'checkbox' ? (field.checked ? 'yes' : '') : field.value.trim();
    if (field.required && !value) return field.type === 'checkbox'
      ? 'Please acknowledge the privacy notice before submitting.' : 'This field is required.';
    if (!value) return '';
    if (field.type === 'email' && field.validity.typeMismatch) return 'Enter a valid email address such as name@example.com.';
    if (field.type === 'tel' && !phoneRegex.test(value)) return 'Enter a South African number such as 082 123 4567 or +27 82 123 4567.';
    if (field.type === 'date') {
      const chosen = new Date(`${value}T12:00:00`);
      const now = new Date(); now.setHours(0, 0, 0, 0);
      if (Number.isNaN(chosen.valueOf()) || chosen < now) return 'Select today or a future date.';
    }
    if (field.minLength > 0 && value.length < field.minLength) return `Enter at least ${field.minLength} characters.`;
    if (field.maxLength > 0 && value.length > field.maxLength) return `Use at most ${field.maxLength} characters.`;
    if (field.validity.badInput || field.validity.patternMismatch || field.validity.typeMismatch) return 'Check this field and try again.';
    return '';
  }

  function setupValidation(form) {
    const fields = [...form.querySelectorAll('input:not([type="hidden"]):not([name="bot-field"]), textarea, select')];
    const check = field => {
      const message = validationMessage(field);
      const error = document.getElementById(`${field.id}-error`);
      if (error) error.textContent = message;
      if (message) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
      return message === '';
    };
    fields.forEach(field => {
      field.addEventListener('blur', () => check(field));
      field.addEventListener(field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input', () => {
        if (field.hasAttribute('aria-invalid')) check(field);
      });
    });
    return () => {
      let firstInvalid = null;
      fields.forEach(field => { if (!check(field) && !firstInvalid) firstInvalid = field; });
      if (firstInvalid) firstInvalid.focus();
      return firstInvalid === null;
    };
  }

  async function sendToNetlify(form, status) {
    const submitButton = form.querySelector('[type="submit"]');
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    setStatus(status, 'Submitting your message…');
    try {
      // Netlify Forms requires URL-encoded body, a form-name and honeypot field.
      const payload = new URLSearchParams(new FormData(form));
      const reply = await fetch(form.getAttribute('action') || '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
        credentials: 'same-origin'
      });
      if (!reply.ok) throw new Error(`HTTP ${reply.status}`);
      setStatus(status, 'The website form endpoint accepted your message. This is not a confirmation of any childcare place or volunteer opportunity.', 'success');
      form.reset();
      return true;
    } catch (error) {
      setStatus(status, 'The message could not be submitted. Check your connection and the Netlify Forms settings, then try again.', 'error');
      return false;
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
    }
  }

  const contact = document.querySelector('#contact-form');
  if (contact) {
    const validate = setupValidation(contact);
    const status = document.querySelector('#contact-status');
    contact.addEventListener('submit', async event => {
      event.preventDefault();
      if (!validate()) {
        setStatus(status, 'Correct the highlighted fields before submitting.', 'error');
        return;
      }
      const data = new FormData(contact);
      const compiled = [
        'General message for Immaculate Day Care (WEDE5020 student demo)', '',
        `From: ${String(data.get('name')).trim()}`,
        `Reply-to email: ${String(data.get('email')).trim()}`,
        `Telephone: ${String(data.get('phone') || '').trim() || 'Not provided'}`,
        `Message type: ${String(data.get('type')).trim()}`,
        `Subject: ${String(data.get('subject')).trim()}`, '',
        'Message:', String(data.get('message')).trim()
      ].join('\n');
      // Included in Netlify submission so the owner can use the compiled body
      // in a dashboard email notification. Delivery address is private account config.
      contact.elements['email_body'].value = compiled;
      if (!isNetlify(contact)) {
        setStatus(status, 'Your message passed validation. This local preview does not send data; test form delivery after deployment to Netlify.', 'info');
        return;
      }
      await sendToNetlify(contact, status);
    });
  }

  const enquiry = document.querySelector('#enquiry-form');
  if (enquiry) {
    const validate = setupValidation(enquiry);
    const status = document.querySelector('#enquiry-status');
    const response = document.querySelector('#enquiry-response');
    const types = {
      volunteer: { title: 'Volunteer enquiry', text: 'There is no fee to enquire. A real organisation would need to confirm volunteering availability, training and safeguarding requirements.' },
      sponsor: { title: 'Sponsorship or donation enquiry', text: 'There is no fee to enquire. A real organisation would need to confirm the donation process, support needed and any financial arrangements.' },
      childcare: { title: 'Childcare and programme enquiry', text: 'There is no fee to enquire. This fictional day care has no verified places, fees or start dates.' }
    };
    enquiry.addEventListener('submit', async event => {
      event.preventDefault();
      response.hidden = true;
      if (!validate()) {
        setStatus(status, 'Correct the highlighted fields before submitting.', 'error');
        return;
      }
      const data = new FormData(enquiry);
      const choice = types[String(data.get('type'))];
      if (!choice) {
        setStatus(status, 'Select a valid enquiry type.', 'error');
        return;
      }
      const heading = document.createElement('h3'); heading.textContent = choice.title;
      const info = document.createElement('p'); info.textContent = choice.text;
      const thanks = document.createElement('p');
      thanks.textContent = `Thank you, ${String(data.get('name')).trim()}. This guidance is illustrative and does not confirm an available place or arrangement.`;
      response.replaceChildren(heading, info, thanks);
      response.hidden = false;
      if (!isNetlify(enquiry)) {
        setStatus(status, 'Your details passed validation. This local preview has not sent your enquiry; deploy to Netlify to submit it.', 'info');
        return;
      }
      await sendToNetlify(enquiry, status);
    });
  }
})();
