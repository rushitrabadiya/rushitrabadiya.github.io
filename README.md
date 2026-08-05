# Rushit Rabadiya — Portfolio

Personal portfolio site for **Rushit Rabadiya**, Backend Developer. A single-page, animated, data-driven portfolio built with vanilla HTML/CSS/JS — every section (hero, about, skills, experience, projects, certifications, contact) is rendered at runtime from one data file.

🔗 **Live / Repository:** https://rushitrabadiya.github.io/

## Features

- **Data-driven** — the entire site is generated from [`data/portfolio-data.js`](data/portfolio-data.js). Update your info once and every section (hero, stats, skills, experience timeline, projects grid, certifications, contact) updates automatically.
- **Animated UI** — GSAP + ScrollTrigger scroll reveals, a typing effect (Typed.js) for the hero role, magnetic buttons, custom cursor, and a tilt effect (VanillaTilt) on the avatar card.
- **Filterable projects** — category tabs for Full Stack, AI/ML, Web App, Desktop App, etc.
- **Tabbed skills grid** — grouped by Backend, Database, DevOps, Frontend, and AI/ML with proficiency levels.
- **Responsive** — mobile hamburger menu, adaptive layouts, and a mobile-optimized testimonials carousel.
- **Accessible** — semantic landmarks, `aria-*` attributes, and reduced-motion-friendly structure.

## Tech Stack

| Layer      | Tech |
|------------|------|
| Markup     | HTML5 |
| Styling    | CSS3 (custom, no framework) |
| Behavior   | Vanilla JavaScript (ES6+) |
| Animation  | [GSAP](https://gsap.com/) + ScrollTrigger + ScrollToPlugin |
| Typing FX  | [Typed.js](https://github.com/mattboldt/typed.js/) |
| Tilt FX    | [VanillaTilt.js](https://micku7zu.github.io/vanilla-tilt.js/) |
| Fonts      | Google Fonts — Space Grotesk, Inter, JetBrains Mono |

No build step, no bundler, no dependencies to install — it's static HTML/CSS/JS served as-is.

## Project Structure

```
my_bio_web/
├── index.html              # Page shell — sections are populated by js/app.js
├── css/
│   └── main.css            # All styling
├── data/
│   └── portfolio-data.js   # ⭐ Single source of truth for all content
└── js/
    └── app.js              # Reads portfolioData and renders the site
```

## Getting Started

Clone the repo and open `index.html` in a browser, or serve it locally:

```bash
git clone https://github.com/rushitrabadiya/portfolio.git
cd portfolio

# Option 1: just open it
open index.html          # macOS
# or double-click index.html

# Option 2: serve with a local static server
npx serve .
# or
python3 -m http.server 8080
```

## Customization

All content lives in [`data/portfolio-data.js`](data/portfolio-data.js) — edit this one file to update the entire site:

- `meta` — site title, SEO description, resume URL
- `profile` — name, title, bio, avatar, contact details
- `hero` — greeting, typed role list, tagline, CTA buttons
- `socialLinks` — GitHub, LinkedIn, Twitter, email
- `stats` — the animated counters in the About section
- `skills` — name, category, and proficiency level per skill
- `experience` — work history timeline
- `projects` — title, description, tech stack, links, category, featured flag
- `certifications` — name, issuer, date, credential URL
- `testimonials` — optional; the section auto-hides when this array is empty

No other file needs to change for a content update — `index.html` and `js/app.js` just render whatever is in this file.

## Contact

- **Email:** rushitrabadiya.work@gmail.com
- **LinkedIn:** [linkedin.com/in/rushit-rabadiya](https://www.linkedin.com/in/rushit-rabadiya)
- **GitHub:** [github.com/rushitrabadiya](https://github.com/rushitrabadiya)

## License

This project is personal portfolio source code. Feel free to reference the structure, but please don't republish the content (name, bio, work history) as your own.
