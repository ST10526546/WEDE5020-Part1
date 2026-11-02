# Changelog – Immaculate Day Care Website

This changelog preserves the Part 2 record and documents all new Part 3 changes for the WEDE5020 assignment.

## Part 3 – 30 October 2026

### Functionality, interactivity, JavaScript
- Added external `js/main.js` and linked it using deferred `<script src="js/main.js" defer></script>` on all six HTML pages.
- Added external `js/forms.js` with reusable HTML5 + JavaScript field validation and accessible inline error messages on both forms.
- Implemented accessible gallery image lightbox (click to open, close button, backdrop click, Escape and left/right arrow navigation, focus restoration).
- Implemented live programme search and A–Z / Z–A sorting with dynamic DOM reordering and a results count.
- Implemented expandable FAQs as an accordion on the enquiry page and modest scroll-entry animations with reduced-motion support.
- Added an interactive selection between the real Braamfontein and Soweto *areas* displayed using OpenStreetMap embed; explicitly not fictional centre branch addresses.

### Pages and forms
- Preserved and updated `index.html`, `about.html`, `programmes.html`, `gallery.html`, and `contact.html`.
- Added the missing sixth page, `enquiry.html`, with volunteer, sponsor, and childcare enquiry categories plus a tailored, non-committal response on valid submission.
- Replaced the former decorative contact form with distinct **general contact** fields: name, email, optional South African telephone, message type, subject, full message.
- Added validation for required controls, name/message lengths, email format, South African phone formats, optional preferred date (no past date), and enquiry acknowledgement.
- The contact form composes a `mailto:` draft. **A website cannot confirm an email was sent by the visitor's mail app.** Recipient uses the reserved placeholder `contact@example.org` until genuine contact details exist.
- Added an AJAX enquiry submission path via `fetch()` + URL-encoded body for deployment using **Netlify Forms**. If not on a configured Netlify host, the form gives local demonstration feedback and truthfully reports that it has **not submitted**.
- Enabled anti-bot honeypot field on Netlify's enquiry form; additional server-side anti-spam/security checks are the hosting provider's responsibility.

### SEO, assets and location
- Added unique page titles, meta descriptions, keywords in relevant page text, meaningful heading hierarchy, descriptive image names and alt attributes, and lazy loading where helpful.
- Renamed every original photo to match its visible content; updated references in HTML and optimised JPEG file sizes to reduce page weight.
- Added `robots.txt`, a six-page `sitemap.xml`, and `SITEMAP.md` with website hierarchy and two actual Johannesburg area references.
- `sitemap.xml` and `robots.txt` contain `example.org` placeholder URLs which **must be replaced after deployment**.
- Removed fictitious street address and fake contact telephone from site-wide footers; disclosed sample content and unverified site photos and map points.
- Kept the existing Part 2 colour palette, responsive layout, and page structure.

### Documentation and verification
- Added a current `README.md` and preserved the original Part 2 readme in `docs/README-Part2-Archive.md`.
- Included free deployment setup notes, a successful source-level verification report, an image rename mapping, manual browser test guidance, SEO launch checklist, and updated references.
- Full public deployment and an actual receiving email are **not** included; accounts and accurate contact details would be required.


## Part 2 – 22 September 2026

### Website Structure and Navigation
- Updated all five website pages: `index.html`, `about.html`, `programmes.html`, `gallery.html`, and `contact.html`.
- Added a shared external stylesheet reference to each page.
- Removed duplicated page-specific inline CSS.
- Added `aria-current="page"` to the navigation link for the current page.
- Checked the internal navigation links between all five pages.

### External CSS Styling
- Created `css/style.css` as the shared external stylesheet.
- Added reusable CSS custom properties for colours, spacing, borders, shadows, and other design values.
- Added default/reset styling for consistent presentation.
- Added typography styling for headings, paragraphs, navigation, buttons, forms, and content.
- Added consistent styling for the header, navigation, hero sections, content sections, cards, gallery, contact page, and footer.
- Applied the planned light blue, soft green, white, and warm yellow colour scheme.
- Added flexible sizing and `clamp()` typography where appropriate.

### Interactive Styling and Pseudo-classes
- Added navigation hover and focus-visible states.
- Added button hover and focus-visible states.
- Added service-card hover effects.
- Added gallery image hover effects.
- Added form-field focus states.
- Added footer link hover and focus-visible states.
- Added structural pseudo-classes where appropriate.

### Responsive Design
- Added a breakpoint at approximately `900px` for tablet and smaller screens.
- Added a breakpoint at approximately `600px` for mobile screens.
- Adjusted hero, service, programme, contact, gallery, and footer layouts for smaller screens.
- Adjusted typography and spacing for smaller devices.
- Added responsive image sizing using `max-width: 100%`, aspect-ratio controls, and `object-fit`.
- Ensured the website adapts from desktop to tablet and mobile screen sizes.

### Documentation
- Added `README.md` documenting the project, website pages, CSS implementation, responsive design, testing guidance, file structure, changelog, and references.
- Added this `CHANGELOG.md` to document the Part 2 development changes.

### Testing
- Tested the website after extracting the project files from the ZIP archive.
- Confirmed that the website pages and images display correctly when the project is extracted.
- Tested the responsive layout at desktop, tablet, and mobile screen sizes.
- Checked navigation, layouts, typography, images, forms, and footer behaviour at different screen sizes.

## Part 1 Feedback and Improvements

No specific lecturer feedback was provided for Part 1. The following improvements were therefore made to strengthen the website for Part 2 and to meet the Part 2 requirements:

Improved the website styling by creating and implementing a shared external CSS stylesheet.
Improved consistency across all five website pages through common colours, typography, spacing, layouts, and navigation styling.
Added interactive hover and focus effects using CSS pseudo-classes.
Improved the navigation by adding active-page states.
Improved the website layout for desktop, tablet, and mobile screen sizes.
Added responsive media queries for tablet and mobile devices.
Improved image responsiveness so images resize appropriately on different screen sizes.
Improved typography and spacing for smaller screens.
Improved the contact page and form styling.
Improved accessibility by adding visible keyboard focus states and current-page navigation indicators.
Added project documentation through a README and changelog.
Tested the website at desktop, tablet, and mobile screen sizes.

## Files Added or Updated

### Updated
- `index.html`
- `about.html`
- `programmes.html`
- `gallery.html`
- `contact.html`

### Added
- `css/style.css`
- `README.md`
- `CHANGELOG.md`

### Existing Project Assets
- `images/` – existing website image assets retained as part of the project.

## 30 October 2026 — Part 3 finalisation for supplied Netlify site

### Netlify domain and technical SEO
- Replaced sample-domain XML sitemap and robots URLs with the student's existing deployment at `https://immaculatedaycare.netlify.app/`.
- Added canonical URLs, per-page meta keywords (to align with the assessed rubric) and Open Graph sharing tags on all seven pages.
- Added the seventh `privacy.html` page, project disclosure, and updated visual sitemap and XML sitemap.
- Added conservative Netlify response headers and a publish-directory configuration in `netlify.toml`.

### Interactive JavaScript and dynamic content
- Upgraded the contact map from an iframe swapper to a zoomable Leaflet 1.9.4/OpenStreetMap map with a genuine marker selector for Braamfontein and Soweto; continued clearly stating neither is an operating centre address.
- Added `data/programmes.json` and actual asynchronous fetch/validation/DOM generation of programme cards; retained static fallback cards for users without network/JavaScript.
- Added an additional programme category filter, preserving live search and A–Z / Z–A sorting.
- Preserved the nine-photo modal lightbox, keyboard access, FAQs and animations with reduced-motion support.

### Forms and privacy
- Converted the general contact form from a non-deliverable demo mailto recipient to a Netlify-detectable AJAX submission with a compiled `email_body` field and inline errors.
- Preserved and strengthened the volunteer/sponsor/childcare enquiry form, including AJAX POST and contextual cost/availability guidance.
- Added form privacy acknowledgements and a policy page advising visitors to avoid real child/sensitive data.
- Documented that notification email addresses must be configured by the Netlify owner and that no real inbox or external deployment has been modified here.

### Documentation and testing
- Rewrote the Part 3 README to list the actual site URL, deployment steps, security limitations, keyword strategy, SEO configuration, citations, and honest outstanding actions.
- Updated `SITEMAP.md` and added `docs/AI_DISCLOSURE_TEMPLATE.md`.
- Used static source/code integrity checks; attempted interactive Chromium testing but the execution environment blocked browser local navigation. Live Netlify submission and visual-device testing remain manual checks.
- The source photographs and original visual theme were kept, with their descriptive photo filenames unchanged from the preceding Part 3 package.
- Added honest `docs/TEST_REPORT.md`, `docs/STATIC_VALIDATION.json`, and `DEPLOYMENT_CHECKLIST.md` with the final Netlify steps, plus a share-project section on the Home page.

## 30 October 2026 — Local-file map preview correction

- Diagnosed OSM `403 Access blocked` tiles when `contact.html` is double-clicked as `file://` without a normal website referrer.
- Added official hosted OpenStreetMap iframe fallback for local-file previews while preserving Leaflet on HTTP/HTTPS, including the existing live Netlify site.
- Preserved both area selection buttons and direct OSM links in local and hosted previews.
- Documented VS Code Live Server / `python -m http.server` for correct local testing; Netlify Forms require live deployment.
