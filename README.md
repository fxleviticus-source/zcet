# Zambezi College of Education and Technology (ZCET) — Website

A multi-page, mobile-first website for ZCET, built from the college's own
published information (zambezistc.wixsite.com/zcet) plus the official
crest logo.

## What's included

- `index.html` — Home
- `about.html` — About ZCET (background, mission, vision, motto, leadership)
- `programmes.html` — Diploma / Certificate / Skills Training, in tabs
- `programme-detail.html` — Dynamic programme page (reads `?slug=` from the URL)
- `admissions.html` — How to Apply, Entry Requirements, Fees & Payment, Scholarships, Internships
- `student-resources.html` — Computer & IT, Health & Wellness, Academic Research
- `faq.html` — Categorized accordion FAQ
- `contact.html` — Email, phone/WhatsApp, postal address, contact form, map
- `css/style.css` — Full design system (mobile-first)
- `js/main.js` — Preloader, nav (mega menu + mobile accordion), tabs, FAQ accordion, scroll reveal, programme rendering
- `js/programmes-data.js` — **All programme content lives here.** Edit this one file to add, remove, or update any programme — every page pulls from it automatically.
- `assets/zcet-logo.png` — the official ZCET crest

## How to view it

Open `index.html` in any browser — no build step needed. If fonts/images
look off opened directly as a file, serve the folder locally instead:
`python3 -m http.server` then visit `http://localhost:8000`.

## Editing programmes (important)

To add, remove, or edit a programme, open `js/programmes-data.js` — it's a
single array. Each entry has:

```js
{
  slug: "unique-url-slug",
  category: "diploma" | "certificate" | "skills",
  name: "...", qualification: "...", duration: "...", awardingBody: "...",
  image: "...", shortDesc: "...", overview: "...",
  whatYouLearn: ["...", "..."],
  entryRequirementsNote: "...",
  related: ["other-slug-1", "other-slug-2"]
}
```

Add a new object to the array and it will automatically appear on the
Programmes page and get its own detail page at
`programme-detail.html?slug=your-new-slug` — no HTML editing required.

## Content accuracy — what's verified vs. what needs confirming

Everything on this site (mission, vision, motto, the 6 accredited ZCC
programmes, the 4 community skills programmes, admissions process, fees,
bank details, leadership names/titles, FAQ answers) was taken directly
from ZCET's own published website. Nothing was invented.

A few things are flagged **on the site itself** as needing confirmation
before publishing, because the source material referenced dates that have
since passed:

- The **application deadline** mentioned on ZCET's old site (June 2024) is
  outdated — the site now tells visitors to contact ZCET directly for the
  current intake window, rather than showing a stale date as current.
- The **TEVET programme announcement** (targeting a January 2025 intake)
  is presented as a past announcement, not a current offering.
- **Accreditation/affiliation status** (Zambia Counselling Council, Higher
  Education Authority, Gideon Robert University) is presented as "in
  process," matching ZCET's own wording, with a note that status can
  change — update this section once ZCET confirms current standing.

## Things to plug in before going live

- Real ZCET campus/classroom photography (every image is currently a
  stock placeholder from Pexels, chosen to match each section's subject)
- Confirmed current intake dates and deadlines
- Confirmed current accreditation/affiliation status
- A working backend for the contact form if you want submissions to land
  somewhere other than the visitor's own email app (it currently opens a
  pre-filled email to zambezistc@gmail.com — no backend required, but no
  submission tracking either)
- A custom domain and hosting

---
Built for Zambezi College of Education and Technology.
