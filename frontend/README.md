# VisionFlow Eye Clinic — Frontend

A production-grade React website for an ophthalmology clinic — built with Vite, React Router, Framer Motion, and Tailwind CSS.

---

## 🗂️ Folder Structure

```
frontend/
├── public/
│   └── eye-icon.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.jsx          # Landing hero section
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── StatsSection.jsx  # Dark stats + testimonials
│   │   │   └── BookVisit.jsx     # Mini booking form
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useInView.js          # Scroll-trigger animation hook
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Appointment.jsx       # 4-step booking form
│   │   └── Contact.jsx
│   ├── utils/
│   │   └── constants.js          # All data, images, copy
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                 # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Setup Instructions (VS Code)

### Step 1 — Open folder in VS Code

1. Copy the `frontend/` folder to wherever you keep your projects (e.g. `~/Projects/visionflow`)
2. Open VS Code
3. Go to **File → Open Folder** → select the `frontend` folder
4. VS Code will open the project

### Step 2 — Install dependencies

Open the integrated terminal in VS Code:

- Press `` Ctrl + ` `` (backtick) or go to **Terminal → New Terminal**

Run:

```bash
npm install
```

This installs all packages (React, Framer Motion, Tailwind, etc.).
It will create a `node_modules/` folder — this is normal.

### Step 3 — Start the dev server

```bash
npm run dev
```

You'll see output like:

```
  VITE v5.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

Open `http://localhost:5173` in your browser — the site is live with hot reload!

### Step 4 — Build for production

```bash
npm run build
```

This creates a `dist/` folder with optimised, minified files ready to deploy.

### Step 5 — Preview the production build

```bash
npm run preview
```

---

## 📦 Key Dependencies

| Package                       | Purpose                                  |
| ----------------------------- | ---------------------------------------- |
| `react` + `react-dom`         | Core UI framework                        |
| `react-router-dom`            | Multi-page routing                       |
| `framer-motion`               | Page transitions + scroll animations     |
| `react-intersection-observer` | Trigger animations on scroll             |
| `react-countup`               | Animated stat counters                   |
| `react-icons`                 | Icon library (HiIcons, MdIcons, FaIcons) |
| `tailwindcss`                 | Utility-first CSS framework              |

---

## 🌐 Pages

| Route          | Page                                                  |
| -------------- | ----------------------------------------------------- |
| `/`            | Home — Hero, Services, Stats/Testimonials, Book Visit |
| `/services`    | Services — Grid of treatments + FAQ accordion         |
| `/about`       | About — Doctor profile, timeline, specializations     |
| `/appointment` | Appointment — 4-step booking form                     |
| `/contact`     | Contact — Message form, map, hours, info              |

---

## 🎨 Design Tokens (Tailwind)

- **Primary blue:** `#2563EB` (Tailwind `primary-600`)
- **Dark navy:** `#0F172A` (Tailwind `navy`)
- **Display font:** Playfair Display (Google Fonts)
- **Body font:** Plus Jakarta Sans (Google Fonts)

---

## ✅ Features

- ✅ Smooth page transitions (Framer Motion AnimatePresence)
- ✅ Scroll-triggered animations (every section)
- ✅ Sticky navigation with scroll-aware transparency
- ✅ Mobile-responsive hamburger menu
- ✅ Animated floating UI cards on hero
- ✅ 4-step appointment booking form
- ✅ FAQ accordion with smooth open/close animation
- ✅ Animated stat counters with CountUp
- ✅ Dark testimonials section
- ✅ SEO meta tags in `index.html`
- ✅ Custom scrollbar
- ✅ Glassmorphism effects
- ✅ High-quality Unsplash images

---

## 🛠 Recommended VS Code Extensions

Install these for the best experience:

- **ES7+ React/Redux/React-Native snippets** — `dsznajder.es7-react-js-snippets`
- **Tailwind CSS IntelliSense** — `bradlc.vscode-tailwindcss`
- **Prettier** — `esbenp.prettier-vscode`
- **Auto Import** — `steoates.autoimport`
