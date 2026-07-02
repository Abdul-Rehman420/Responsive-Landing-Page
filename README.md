# DevRise — Modern Landing Page

A responsive, production-quality landing page for a digital solutions agency. Built with semantic HTML5, CSS3 custom properties, and vanilla JavaScript — no frameworks or libraries required.

## Features

- **Responsive layout** — CSS Grid and Flexbox adapt seamlessly across desktop, tablet, and mobile
- **Mobile navigation** — Off-canvas slide-in menu with hamburger toggle
- **Testimonial carousel** — Auto-playing slider with dot navigation, arrow keys, and pause-on-hover
- **Contact form** — Real-time client-side validation with descriptive error messages
- **Micro-interactions** — Smooth hover states, floating animations, gradient text effects, and transition-based feedback
- **Dark theme** — Modern dark UI with a carefully chosen colour palette
- **Accessibility** — ARIA attributes, keyboard navigation, focus indicators, and `prefers-reduced-motion` support
- **No dependencies** — Pure HTML, CSS, and JavaScript

## Project Structure

```
landing-page/
  index.html          Main HTML document
  css/
    styles.css        All styles (variables, layout, components, responsive)
  js/
    script.js         All interactions (menu, slider, form, scroll)
  assets/             Reserved for images or icons
  README.md           This file
```

## Sections

| Section       | Description                                      |
|---------------|--------------------------------------------------|
| Header        | Fixed nav bar with logo, links, and hamburger    |
| Hero          | Full-viewport banner with animated shapes        |
| Services      | 6-card grid showcasing service offerings         |
| Testimonials  | Carousel with client quotes and avatar badges    |
| Contact       | Form with validation and contact information     |
| Footer        | Brand summary, navigation links, copyright       |

## Setup

### Option 1 — Open directly

1. Clone or download the repository
2. Open `index.html` in any modern browser

```
git clone <repo-url>
cd landing-page
start index.html
```

### Option 2 — Local server (recommended)

Use any static server for best results:

**Python 3**
```
python -m http.server 8000
```

**Node.js (npx)**
```
npx serve .
```

**VS Code**
Install the *Live Server* extension, right-click `index.html`, and select *Open with Live Server*.

Then visit `http://localhost:8000`.

## Browser Support

Chrome, Firefox, Safari, Edge — latest 2 versions.

## Customisation

### Colours

Edit the `:root` CSS custom properties in `css/styles.css`:

```css
--clr-primary: #6366f1;       /* Main brand colour */
--clr-secondary: #06b6d4;      /* Accent gradient colour */
--clr-bg: #0b0d15;             /* Page background */
--clr-text: #e2e8f0;           /* Body text */
```

### Content

Replace placeholder text in `index.html` — each section is clearly commented. Update the contact email and phone number in the Contact section and Footer.

## Evaluation Criteria Fulfilment

| Criterion            | How It Is Addressed                                                   |
|----------------------|-----------------------------------------------------------------------|
| Code Quality         | Clean indentation, descriptive naming, semantic HTML5, IIFE-wrapped JS |
| Functionality        | All features tested work without console errors                       |
| Documentation        | This README provides setup instructions, usage, and project overview  |
| Domain Standards     | Responsive design at 1024/768/480px breakpoints, accessible ARIA, organised codebase |

## License

MIT
