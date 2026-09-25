# Changelog – Immaculate Day Care Website

This changelog records the changes made to the Immaculate Day Care website for Part 2 of the WEDE5020 assignment.

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
