# WEDE5020-Part1
Part 1

# Immaculate Day Care Website


## Student Information


- Student Name: Lesedi Mulaudzi
- Student Number: ST10526546
- Institution: Rosebank College
- Course/Module: Web Development [WEDE5020]
- Year: 2026


## Project Overview


The Immaculate Day Care website is a five-page website designed to provide
information about the organisation, its programmes and services, and how
members of the community can get involved.


The website aims to create a clear, simple and user-friendly online presence
for Immaculate Day Care. It provides visitors with information about the
organisation, its mission and vision, the services it provides to children,
photographs of activities, and contact information.


The website consists of five interconnected pages:
- Home
- About Us
- Programmes
- Gallery
- Contact


## Website Goals and Objectives


The main goals of the website are to:


- Provide clear information about Immaculate Day Care.
- Explain the organisation's mission and vision.
- Showcase the programmes and services offered.
- Provide a gallery showing activities at the centre.
- Make it easy for visitors to contact the organisation.
- Encourage community members to support and get involved.
- Create a simple and accessible website for visitors.


## Key Features and Functionality


### Navigation
All five pages are connected through a navigation menu, allowing users
to easily move between different sections of the website.


### Home Page
- Welcome section
- Introduction to Immaculate Day Care
- Main image
- Child Care, Education and Meals sections
- Support Our Mission section


### About Us
- Organisation introduction
- Image
- Mission statement
- Vision statement


### Programmes
- Child Care
- Educational Activities
- Feeding Programme
- Images representing each programme


### Gallery
- Nine image placeholders
- Responsive gallery layout
- Hover effect on gallery images


### Contact
- Contact information
- Operating hours
- Contact form
- Map placeholder
- Links to other website pages


### Responsive Design
The website includes responsive CSS so that the layout can adapt to
smaller screens such as tablets and mobile devices.





Changelog
Version 1.0 - Part 1
Created the initial website structure.
Added five interconnected HTML pages.
Added navigation between all pages.
Added the Home page and welcome section.
Added About Us information.
Added Programmes and Services.
Added Gallery with image placeholders.
Added Contact page with a contact form.
Added responsive CSS for smaller screens.
Added comments to the HTML and CSS code to improve readability.
Added temporary image placeholders that can be replaced with actual
organisation photographs.
Future Changes
Replace placeholder images with appropriate photographs.
Add the organisation's actual contact details.
Improve the visual design and branding.
Add further functionality where required.
Make improvements based on feedback and testing.




REFERENCES

Client Factory (2026). What a website actually costs in South Africa. Available at: https://clientfactory.co.za/journal/what-a-website-costs-in-south-africa/ (Accessed: 16 August 2026).

Creative Commons (n.d.). Creative Commons licences. Available at: https://creativecommons.org/share-your-work/use-remix/cc-licenses/ (Accessed: 16 August 2026).

Creative Commons (n.d.). Reusing CC-licensed content. Available at: https://creativecommons.org/reusing-cc-licensed-content/ (Accessed: 16 August 2026).

Google (n.d.). Google Fonts. Available at: https://developers.google.com/fonts (Accessed: 16 August 2026).

Intellium Inc. (2026). How much does a 5-page website cost in SA? Available at: https://intelliuminc.co.za/blogs/how-much-does-a-5-page-website-cost-in-sa/ (Accessed: 16 August 2026).

Intellium Inc. (2026). Website design cost in South Africa: 2026 pricing guide. Available at: https://intelliuminc.co.za/blogs/website-design-cost-in-south-africa-the-2026-pricing-guide/ (Accessed: 16 August 2026).

MDN Web Docs (2025). HTML: Creating the content. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content (Accessed: 16 August 2026).

MDN Web Docs (2025). Structuring documents. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents (Accessed: 16 August 2026).

MDN Web Docs (2025). What will your website look like? Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like (Accessed: 16 August 2026).

Netdevil (2026). How much does a website cost in South Africa? (2026 pricing). Available at: https://netdevil.co.za/blog/how-much-does-website-cost-south-africa (Accessed: 16 August 2026).

Nostalgic Studio (2026). How long does it take to build a website? (2026 timeline). Available at: https://www.nostalgic-studio.co.za/blog/how-long-to-build-website-2026 (Accessed: 16 August 2026).

Nostalgic Studio (2026). How much does a website cost in South Africa? (2026 guide). Available at: https://www.nostalgic-studio.co.za/blog/website-cost-south-africa-2026 (Accessed: 16 August 2026).

Openverse (n.d.). About Openverse. Available at: https://openverse.org/about (Accessed: 16 August 2026).

Part 2 Of POE : 
# Immaculate Day Care Website – Part 2

## Project Overview
Immaculate Day Care is a fictional community-based non-profit organisation created for the WEDE5020 website project. The website provides information about childcare, education, meals, programmes, the organisation's mission and ways to make contact.

Part 2 focuses on CSS styling and responsive design. The existing Part 1 HTML pages have been retained and an external stylesheet has been introduced for the complete website.

## Pages
- `index.html` – Home
- `about.html` – About Us
- `programmes.html` – Programmes & Services
- `gallery.html` – Gallery
- `contact.html` – Contact Us

## Part 2 CSS Implementation
The website now uses one shared external stylesheet:

`css/style.css`

The stylesheet provides:

- A consistent colour palette based on the Part 1 proposal: light blue, soft green, white and a small amount of warm yellow.
- Consistent typography using Arial with a clear heading hierarchy.
- A CSS reset using the universal selector and `box-sizing`.
- Reusable CSS custom properties for colours, spacing-related values, borders, shadows and layout width.
- Flexbox for the header and navigation.
- CSS Grid for the hero section, services, programmes, gallery, contact area and footer.
- Consistent borders, rounded corners, spacing and shadows.
- `:hover` and `:focus-visible` pseudo-classes for interactive elements.
- Responsive breakpoints at 900px and 600px.
- Relative sizing using `rem`, percentages, `min()`, `clamp()` and viewport-related values.
- Responsive images using `max-width: 100%`, `aspect-ratio` and `object-fit`.
- Responsive navigation that wraps and adjusts for smaller screens.
- Mobile layouts that change multi-column sections into single-column layouts.



## Changelog

### Part 2 – CSS and Responsive Design
- Removed duplicated inline `<style>` sections from all five HTML pages.
- Created a single shared external stylesheet at `css/style.css`.
- Linked all five HTML pages to the external stylesheet.
- Added a consistent light-blue, soft-green, white and warm-yellow visual system based on the Part 1 design proposal.
- Added consistent typography, spacing, borders, shadows and rounded components.
- Added responsive Flexbox and CSS Grid layouts.
- Added tablet and mobile media queries.
- Added responsive navigation wrapping for smaller screens.
- Added responsive image sizing and cropping using `aspect-ratio` and `object-fit`.
- Added `:hover` and `:focus-visible` states for navigation links and buttons.
- Added `aria-current="page"` to the navigation link representing the current page.
- Checked internal HTML navigation links; all five pages link to existing local page files.

## Responsive Testing Evidence
The website should be tested using browser developer tools at desktop, tablet and mobile viewport sizes. The required evidence should be captured as screenshots and added to this README after testing on the student's development machine.

Recommended viewport evidence:

- Desktop: approximately 1440px wide
- Tablet: approximately 900px wide
- Mobile: approximately 390px wide

The screenshots should demonstrate changes to layout, typography, navigation and images at the different viewport sizes.

## File Structure

```text
Website/
├── index.html
├── about.html
├── programmes.html
├── gallery.html
├── contact.html
├── README.md
├── css/
│   └── style.css
└── images/
    ├── child-care.jpg
    ├── daycare-main.jpg
    ├── education.jpg
    ├── gallery1.jpg
    ├── gallery2.jpg
    ├── gallery3.jpg
    ├── gallery4.jpg
    ├── gallery5.jpg
    ├── gallery6.jpg
    ├── gallery7.jpg
    ├── gallery8.jpg
    ├── gallery9.jpg
    └── meals.jpg
```




