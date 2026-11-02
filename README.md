# Immaculate Day Care — WEDE5020 Part 3 Final Website

**Project:** Immaculate Day Care (fictional early-childhood/community NPO scenario)  
**Module:** Web Development (Introduction), WEDE5020, 2026 PoE  
**Production URL supplied by student:** https://immaculatedaycare.netlify.app/  
**Submission phase:** Part 3 — JavaScript, dynamic content, SEO and validated forms  
**Final source revision:** 30 October 2026  




## Overview, goals and users

The website continues the Part 2 blue/green visual design. It explains childcare, early learning and meal-support programmes to Johannesburg-based parents/guardians and invites volunteer/sponsor enquiries. The organisation is **a student-project fiction**, not a verified operating centre. All community map areas and photographs are illustrative; no false street address, fees, staff contacts, programme places or enrolment promises are made.

Objectives: make the content readable on mobile/tablet/desktop; help visitors locate services quickly; demonstrate accessible JavaScript interactions; validate both required forms; supply structured navigation and SEO metadata; and use proper Netlify form submissions for deployment.

## Pages and website sitemap

| Source file | Canonical deployed URL | Purpose |
|---|---|---|
| `index.html` | `/` | Introduction, care/learning/meals overview and enquiry link |
| `about.html` | `/about` | Project mission, vision and overview |
| `programmes.html` | `/programmes` | Dynamic programme cards, category filters, search and sorting |
| `gallery.html` | `/gallery` | 9-photo accessible modal lightbox |
| `enquiry.html` | `/enquiry` | Volunteer, sponsor and childcare enquiry, FAQ accordion, Netlify AJAX submission |
| `contact.html` | `/contact` | General contact form and interactive Leaflet location map |
| `privacy.html` | `/privacy` | Disclosure of fictional status, data handling and external services |

`SITEMAP.md` includes the website hierarchy and map coordinates. `sitemap.xml` lists all seven published **clean Netlify URLs**; `robots.txt` points to it. Original `.html` internal links work during local preview and are handled by Netlify's pretty URLs in production.

## JavaScript features and dynamic content

- `js/main.js`: accessible `<dialog>` lightbox (image open, previous/next arrows, Escape, backdrop close, focus restoration); FAQ accordion behaviour; programme filters and sorting; Leaflet map selection; entry animations with reduced-motion support.
- **Real asynchronous content loading:** on `programmes.html`, JavaScript fetches `data/programmes.json`, validates the data structure, builds programme cards with safe DOM APIs (`createElement`, `textContent`, `replaceChildren`), and lets visitors search, filter by category or sort A–Z/Z–A without a page reload. The original HTML cards are preserved as **no-JS/offline fallback** if JSON cannot load.
- CSS transitions are used for hover and interaction feedback. Animation respects the visitor's reduced-motion preference.
- `contact.html` loads **Leaflet 1.9.4** from its stable official CDN distribution, with a subresource integrity hash. The map uses OpenStreetMap tiles, visible contributor attribution, zoom controls and switching between two real map areas: Braamfontein (-26.192, 28.029) and Soweto (-26.248, 27.856). A direct OpenStreetMap link is provided as a fallback. **These are not Immaculate Day Care's actual premises**. An internet connection is needed for the map.

## HTML forms, validation and security approach

Both forms use HTML `action="/"`, `method="post"`, `data-netlify="true"`, a hidden `form-name` field and `netlify-honeypot="bot-field"` for Netlify Forms detection. `js/forms.js` uses HTML5 validity constraints plus JavaScript checks, displaying field-level error messages with `aria-describedby` and `aria-invalid`. Validation covers required fields, email format, South African phone numbers, character limits, future date on optional preferred start and acknowledgement.

**Enquiry form** (`enquiry.html`): name, email, phone, volunteer/sponsor/childcare type, preferred date, enquiry and acknowledgement. A successful validation displays context-sensitive guidance about enquiry cost, non-guaranteed availability and sponsorship arrangements. An online Netlify deployment submits this via AJAX `fetch()` as `application/x-www-form-urlencoded`.

**Contact form** (`contact.html`): name, email, optional phone, category, subject, full message and acknowledgement. JavaScript compiles the visitor's message into a hidden `email_body` value and sends all fields to **Netlify Forms** via AJAX. This avoids the non-working `contact@example.org` mailto link from the earlier ZIP. The Netlify project owner can enable **form submission email notifications** in the dashboard to receive an email; a genuine notification recipient has *not* been supplied, so no email address is fabricated or hard-coded. A browser cannot prove an email was delivered. The HTTP success message says only that the endpoint accepted the form request.

**Privacy/safety:** `privacy.html` explains that Netlify stores submitted form information on behalf of the project owner. Visitors are advised to use fictional test data and avoid personal details about children. The honeypot helps against spam but is not a complete security control. Client-side validation is **not** a server-side sanitiser. Netlify's hosting and form infrastructure still require administrator oversight, spam review and appropriate notification and privacy settings.

**Double-clicking extracted HTML files (`file://`) and the map:** OpenStreetMap's public tile service requires a normal referring website. Opening `contact.html` directly from your extracted ZIP can result in 403 `Access blocked` tiles, even though your Netlify map works. For this reason, the website now uses OpenStreetMap's official hosted map *embed* when opened from `file://`. When deployed on Netlify, or previewed via a real local HTTP server, the full Leaflet map is used instead. The hosted embed still needs internet access. **Best local preview:** in VS Code, right-click `index.html` and choose **Open with Live Server**, or open a terminal in the extracted folder and run `python -m http.server 8000`, then visit `http://localhost:8000/`. Do not use the bare `file://` URL to assess AJAX forms or JSON fetch, as browsers restrict these cross-origin operations.

**Local preview:** both forms validate but deliberately do **not** send data when opened locally. Actual submission needs a deployed Netlify project with Form Detection **enabled**, the updated files deployed, and a dashboard check that new submissions arrive. Never submit real children's details when testing.

## SEO and optimisation checklist

- **Content keywords:** Johannesburg childcare project, early childhood care, learning activities, feeding programme, volunteer enquiry, sponsorship. Relevant phrases are used in page headings and content, plus `meta name="keywords"` to align with the WEDE5020 marking rubric. No unsupported search-volume numbers or ranking promises are given.
- **Title/description:** individual `<title>` and `<meta name="description">` on all seven pages; canonical URL and `og:*` social sharing metadata on each page.
- **Page structure:** ordered heading hierarchy, internal links, meaningful image `alt` text, readable names, descriptive `<a>` links and responsive CSS.
- **Image optimisation:** 13 descriptive, compressed JPEG files retained from the prior Part 3 update; non-critical images lazy-loaded. See `docs/IMAGE_RENAME_LOG.md`.
- **XML sitemap / robots:** real student-supplied Netlify domain in `sitemap.xml`, `robots.txt`, and canonical tags. The two geographical markers belong in the planning sitemap (`SITEMAP.md`), not XML URL entries.
- **Performance:** compact external CSS and JavaScript, optimised JPEGs, asynchronous JSON fetch, image loading hints, no JavaScript framework build step. Actual Lighthouse scores require testing on the final live deployment.
- **Baseline hosting hardening:** `netlify.toml` supplies `X-Content-Type-Options`, frame restriction, Referrer-Policy and Permissions-Policy. HTTPS is provided by Netlify for its `netlify.app` domains. These settings do not guarantee security or replace Netlify spam/abuse and account-access controls.
- **Local SEO:** Johannesburg is the general geographical context; the map areas are correctly labelled examples. **Do not register a fictitious address on Google Business Profile**.
- **Off-page SEO:** no genuine backlinks, verified social accounts or promotions have been created for this fictional organisation. Sharing an actual student project, with a clear disclaimer and permission, is an optional future activity; off-page results cannot be manufactured by editing HTML.

## Folder structure

```text
index.html, about.html, programmes.html, gallery.html, enquiry.html, contact.html, privacy.html
css/style.css
js/main.js, js/forms.js
data/programmes.json
images/*.jpg (13 descriptive photo files)
robots.txt, sitemap.xml, netlify.toml
SITEMAP.md, CHANGELOG.md, README.md
docs/IMAGE_RENAME_LOG.md, docs/README-Part2-Archive.md,
docs/TEST_REPORT.md, docs/AI_DISCLOSURE_TEMPLATE.md
```

## Deploy to the existing Netlify site

1. Open the [Netlify dashboard](https://app.netlify.com/) and select the **existing** project serving `immaculatedaycare.netlify.app` (do **not** create a new site, otherwise the domain will change).
2. If the site is manually deployed, drag the **unzipped contents of this directory** (including `index.html`, `netlify.toml`, `data/`, `css/`, `js/`, `images/`) into the site's **Deploys** upload area. The final Netlify-deploy ZIP supplied alongside this package has `index.html` at the ZIP root.
3. If the site uses Git, commit and push these contents to the connected repository at the configured publish directory. Confirm the Netlify build setting points at the folder containing `index.html`.
4. Enable **Forms → Form detection** in the project's Netlify settings if disabled; **redeploy after enabling**. You should see two form definitions in the Forms dashboard: `enquiry` and `contact`.
5. In the Netlify Forms dashboard, set an email notification recipient **only if you have a real, authorised email address**, and test with fictional details. Without this setting, submissions may be stored in the Forms inbox but not sent as email notifications.
6. Open `https://immaculatedaycare.netlify.app/sitemap.xml` and `/robots.txt` after redeploy; check all seven clean page URLs and view both forms, both map locations, and the gallery. Verify `/privacy` is accessible.
7. In developer tools, check failed requests, console errors and phone/tablet layout. Review Netlify Forms submissions and spam tab. Collect authentic browser screenshots as assessment evidence.
8. Push meaningful Git commits to the **course-provided private GitHub repository** and submit your existing site URL and the repository link via the LMS. The ZIP alone is not a GitHub submission.



## Testing record and remaining checks

`docs/TEST_REPORT.md` details syntax, content and link/image validation. A headless browser smoke test was attempted but local navigation was blocked by the browser execution environment (`ERR_BLOCKED_BY_ADMINISTRATOR`), so **browser UI testing and live Netlify form delivery are not claimed**. Static checks do not substitute for actual interactive-device tests. Before assessment, capture screenshots of your own deployed final site at desktop/tablet/mobile widths and test form error handling and successful test submissions.

## Source references (Harvard style)

- Google Search Central, n.d. *Build and submit a sitemap*. [Online] Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap [Accessed 30 October 2026].
- Leaflet, 2023. *Download Leaflet: version 1.9.4*. [Online] Available at: https://leafletjs.com/download.html [Accessed 30 October 2026].
- Leaflet, n.d. *Quick Start Guide*. [Online] Available at: https://leafletjs.com/examples/quick-start/ [Accessed 30 October 2026].
- MDN Web Docs, n.d. *Client-side form validation*. [Online] Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 30 October 2026].
- Netlify, n.d. *Forms setup*. [Online] Available at: https://docs.netlify.com/manage/forms/setup/ [Accessed 30 October 2026].
- OpenStreetMap Foundation, n.d. *Tile Usage Policy*. [Online] Available at: https://operations.osmfoundation.org/policies/tiles/ [Accessed 30 October 2026].
- OpenStreetMap contributors, n.d. *OpenStreetMap*. [Online] Available at: https://www.openstreetmap.org/ [Accessed 30 October 2026].

# Pictures of desktop, tablet and mobile layouts, plus the gallery lightbox, interactive map, programme search and successful form submissions.
![mobile picture](image.png)
![Tablet](image-1.png)
![Desktop](image-2.png)
![gallery lightbox](image-3.png)
![Map](image-4.png)
![Successful form submissions](image-5.png)
![successful form submissions](image-6.png)
![programme search](image-7.png)
![sucessful form submissions](image-8.png)