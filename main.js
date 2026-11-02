/* WEDE5020 Part 3: progressive enhancements (data-driven programmes, modal,
   Leaflet map, accordion, reduced-motion-aware reveals). External JavaScript only. */
'use strict';
(() => {
  // Create DOM nodes using textContent rather than inserting untrusted HTML.
  const programmeList = document.querySelector('#programme-list');
  const search = document.querySelector('#programme-search');
  const sort = document.querySelector('#programme-sort');
  const category = document.querySelector('#programme-category');
  const resultText = document.querySelector('#programme-results');

  let revealObserver = null;
  function observeReveal(elements) {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.06 });
    }
    elements.forEach(item => {
      item.classList.add('will-reveal');
      revealObserver.observe(item);
    });
  }

  function createProgramme(item) {
    const card = document.createElement('article');
    card.className = 'programme';
    card.dataset.name = item.title.toLocaleLowerCase();
    card.dataset.category = item.category;
    card.dataset.keywords = item.keywords.join(' ').toLocaleLowerCase();
    const visual = document.createElement('div');
    visual.className = 'programme-image';
    const photo = document.createElement('img');
    photo.src = item.image;
    photo.alt = item.alt;
    photo.loading = 'lazy';
    photo.decoding = 'async';
    photo.width = 760;
    photo.height = 510;
    visual.append(photo);
    const content = document.createElement('div');
    content.className = 'programme-content';
    const heading = document.createElement('h2');
    heading.textContent = item.title;
    const description = document.createElement('p');
    description.textContent = item.description;
    content.append(heading, description);
    card.append(visual, content);
    return card;
  }

  if (programmeList && search && sort && category && resultText) {
    let cards = [...programmeList.querySelectorAll('.programme')];
    function updateProgrammes() {
      const term = search.value.trim().toLocaleLowerCase();
      const selectedCategory = category.value;
      const ordered = [...cards];
      if (sort.value === 'az') ordered.sort((a,b) => a.dataset.name.localeCompare(b.dataset.name));
      if (sort.value === 'za') ordered.sort((a,b) => b.dataset.name.localeCompare(a.dataset.name));
      ordered.forEach(card => programmeList.append(card));
      let matches = 0;
      ordered.forEach(card => {
        const searchable = `${card.dataset.name} ${card.dataset.keywords || ''} ${card.textContent}`.toLocaleLowerCase();
        const visible = searchable.includes(term) && (selectedCategory === 'all' || card.dataset.category === selectedCategory);
        card.hidden = !visible;
        if (visible) matches++;
      });
      resultText.textContent = matches
        ? `Showing ${matches} of ${cards.length} programmes.`
        : 'No programmes match. Try different search words or choose All categories.';
    }
    search.addEventListener('input', updateProgrammes);
    sort.addEventListener('change', updateProgrammes);
    category.addEventListener('change', updateProgrammes);
    updateProgrammes(); // HTML remains usable even if loading the JSON fails.

    // Async JSON fetch demonstrates loading actual site content on demand.
    fetch('data/programmes.json', { credentials: 'same-origin' })
      .then(response => {
        if (!response.ok) throw new Error(`Programme data HTTP ${response.status}`);
        return response.json();
      })
      .then(items => {
        if (!Array.isArray(items) || !items.every(item =>
          item && typeof item.title === 'string' && typeof item.description === 'string' &&
          typeof item.image === 'string' && typeof item.alt === 'string' &&
          typeof item.category === 'string' && Array.isArray(item.keywords))) {
          throw new Error('Invalid programme data');
        }
        const newCards = items.map(createProgramme);
        programmeList.replaceChildren(...newCards);
        cards = newCards;
        updateProgrammes();
        observeReveal(newCards);
      })
      .catch(() => {
        // Static SEO-friendly HTML cards are a fully usable offline fallback.
        updateProgrammes();
      });
  }

  const dialog = document.querySelector('#gallery-lightbox');
  if (dialog && typeof dialog.showModal === 'function') {
    const buttons = [...document.querySelectorAll('.gallery-open')];
    const largeImage = dialog.querySelector('#lightbox-image');
    const caption = dialog.querySelector('#lightbox-caption');
    const count = dialog.querySelector('#lightbox-count');
    let index = 0;
    let sourceButton = null;
    const showImage = (next) => {
      index = (next + buttons.length) % buttons.length;
      const small = buttons[index].querySelector('img');
      largeImage.src = small.src;
      largeImage.alt = small.alt;
      caption.textContent = small.alt;
      count.textContent = `Photo ${index + 1} of ${buttons.length}`;
    };
    buttons.forEach((button, position) => button.addEventListener('click', () => {
      sourceButton = button;
      showImage(position);
      dialog.showModal();
      dialog.querySelector('.lightbox-close').focus();
    }));
    dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
    dialog.querySelector('.lightbox-prev').addEventListener('click', () => showImage(index - 1));
    dialog.querySelector('.lightbox-next').addEventListener('click', () => showImage(index + 1));
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(index - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); showImage(index + 1); }
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { if (sourceButton) sourceButton.focus(); });
  }

  // Live Leaflet map with two genuinely existing Johannesburg reference areas.
  // Neither marker is represented as an Immaculate Day Care business address.
  const mapDiv = document.querySelector('#location-map');
  if (mapDiv) {
    const areas = {
      braamfontein: { label: 'Braamfontein, Johannesburg — illustrative area', coords: [-26.192, 28.029], zoom: 14,
        url: 'https://www.openstreetmap.org/?mlat=-26.192&mlon=28.029#map=14/-26.192/28.029',
        embed: 'https://www.openstreetmap.org/export/embed.html?bbox=28.006%2C-26.208%2C28.052%2C-26.176&layer=mapnik&marker=-26.192%2C28.029' },
      soweto: { label: 'Soweto, Johannesburg — illustrative area', coords: [-26.248, 27.856], zoom: 13,
        url: 'https://www.openstreetmap.org/?mlat=-26.248&mlon=27.856#map=13/-26.248/27.856',
        embed: 'https://www.openstreetmap.org/export/embed.html?bbox=27.78%2C-26.3%2C27.94%2C-26.2&layer=mapnik&marker=-26.248%2C27.856' }
    };
    const label = document.querySelector('#map-label');
    const externalLink = document.querySelector('#map-external');
    const fallback = document.querySelector('#map-fallback');
    let leafletMap = null;
    let marker = null;
    let embeddedMap = null;
    // file:// previews have no normal page Referer. OSM's public tile servers
    // can reject requests without one (403 blocked-tile images). Use OSM's
    // official hosted embed only for a double-click/local-file preview.
    // On Netlify or a local HTTP server, keep the fully interactive Leaflet map.
    if (window.location.protocol === 'file:') {
      embeddedMap = document.createElement('iframe');
      embeddedMap.className = 'local-preview-map';
      embeddedMap.title = 'OpenStreetMap preview: Braamfontein community area';
      embeddedMap.loading = 'lazy';
      embeddedMap.referrerPolicy = 'strict-origin-when-cross-origin';
      embeddedMap.src = areas.braamfontein.embed;
      mapDiv.replaceChildren(embeddedMap);
      if (fallback) {
        fallback.textContent = 'Local file preview: this uses OpenStreetMap’s hosted map instead of Leaflet tiles. For the full Leaflet experience, open the website using VS Code Live Server or view the published Netlify site.';
        fallback.hidden = false;
      }
    } else if (window.L) {
      leafletMap = L.map(mapDiv, { scrollWheelZoom: false }).setView(areas.braamfontein.coords, areas.braamfontein.zoom);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(leafletMap);
      marker = L.marker(areas.braamfontein.coords).addTo(leafletMap)
        .bindPopup('Braamfontein community area (example only; not a day care address).');
      if (fallback) fallback.hidden = true;
      setTimeout(() => leafletMap.invalidateSize(), 0);
    } else if (fallback) {
      fallback.textContent = 'The interactive map needs an internet connection. Use the OpenStreetMap link below to view the selected real area.';
    }
    document.querySelectorAll('.map-choice').forEach(button => button.addEventListener('click', () => {
      const chosen = areas[button.dataset.map];
      if (!chosen) return;
      label.textContent = chosen.label;
      externalLink.href = chosen.url;
      if (embeddedMap) {
        embeddedMap.src = chosen.embed;
        embeddedMap.title = `OpenStreetMap preview: ${button.textContent.trim()}`;
      }
      if (leafletMap) {
        leafletMap.setView(chosen.coords, chosen.zoom);
        marker.setLatLng(chosen.coords).bindPopup(`${button.textContent.trim()} — sample map area, not a day care address.`);
        leafletMap.invalidateSize();
      }
      document.querySelectorAll('.map-choice').forEach(other => {
        const active = other === button;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', String(active));
      });
    }));
  }

  // Native semantic <details> remains keyboard accessible without JavaScript.
  const faq = [...document.querySelectorAll('.enquiry-questions details')];
  faq.forEach(item => item.addEventListener('toggle', () => {
    if (item.open) faq.filter(other => other !== item).forEach(other => { other.open = false; });
  }));
  observeReveal([...document.querySelectorAll('.service, .gallery-item')]);
})();
