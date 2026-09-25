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
<img width="1220" height="895" alt="Screenshot 2026-09-25 152925" src="https://github.com/user-attachments/assets/b2999e5c-c286-4cc5-8839-9b82b49f3524" />
<img width="1217" height="915" alt="Screenshot 2026-09-25 152859" src="https://github.com/user-attachments/assets/654d37df-828b-4ff5-acc8-96106860f305" />
<img width="1212" height="852" alt="Screenshot 2026-09-25 152833" src="https://github.com/user-attachments/assets/3361d6ab-240b-46b0-b901-e47b741df459" />
<img width="1208" height="960" alt="Screenshot 2026-09-25 152748" src="https://github.com/user-attachments/assets/c2e1ecc1-8794-48c8-9279-c9054cabb796" />

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

## References

Client Factory, 2026. *What a website actually costs in South Africa*. [Online] Available at: https://clientfactory.co.za/journal/what-a-website-costs-in-south-africa/ [Accessed 16 August 2026].

Creative Commons, n.d. *Creative Commons licences*. [Online] Available at: https://creativecommons.org/share-your-work/use-remix/cc-licenses/ [Accessed 16 August 2026].

Creative Commons, n.d. *Reusing CC-licensed content*. [Online] Available at: https://creativecommons.org/reusing-cc-licensed-content/ [Accessed 16 August 2026].

Google, n.d. *Google Fonts*. [Online] Available at: https://developers.google.com/fonts [Accessed 16 August 2026].

Intellium Inc., 2026. *How much does a 5-page website cost in SA?* [Online] Available at: https://intelliuminc.co.za/blogs/how-much-does-a-5-page-website-cost-in-sa/ [Accessed 16 August 2026].

Intellium Inc., 2026. *Website design cost in South Africa: 2026 pricing guide*. [Online] Available at: https://intelliuminc.co.za/blogs/website-design-cost-in-south-africa-the-2026-pricing-guide/ [Accessed 16 August 2026].

MDN Web Docs, 2025. *HTML: Creating the content*. [Online] Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content [Accessed 16 August 2026].

MDN Web Docs, 2025. *Structuring documents*. [Online] Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents [Accessed 16 August 2026].

MDN Web Docs, 2025. *What will your website look like?* [Online] Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like [Accessed 16 August 2026].

Netdevil, 2026. *How much does a website cost in South Africa? (2026 pricing).* [Online] Available at: https://netdevil.co.za/blog/how-much-does-website-cost-south-africa [Accessed 16 August 2026].

Nostalgic Studio, 2026. *How long does it take to build a website? (2026 timeline).* [Online] Available at: https://www.nostalgic-studio.co.za/blog/how-long-to-build-website-2026 [Accessed 16 August 2026].

Nostalgic Studio, 2026. *How much does a website cost in South Africa? (2026 guide).* [Online] Available at: https://www.nostalgic-studio.co.za/blog/website-cost-south-africa-2026 [Accessed 16 August 2026].

Openverse, n.d. *About Openverse*. [Online] Available at: https://openverse.org/about [Accessed 16 August 2026].
