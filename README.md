# Prop Pilot - Real Estate & Luxury Stay Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0.12-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Prop Pilot** is a modern, responsive web application designed for booking luxury hotels, serviced residences, and premier real estate accommodations worldwide. Built with React 18, Vite, and Tailwind CSS, Prop Pilot delivers an intuitive, high-performance booking experience paired with 24/7 dedicated customer support.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Brand Identity](#brand-identity)
- [Official Contact & Alternative Details](#official-contact--alternative-details)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Pages & Routing](#pages--routing)
- [Configuration & Environment](#configuration--environment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Prop Pilot connects travelers, business professionals, and homeowners to vetted, high-end accommodations. Whether booking a weekend escape in London, leasing a luxury corporate apartment, or exploring premier destinations, Prop Pilot serves as your reliable hospitality co-pilot.

---

## Key Features

- **Hero & Stay Search Engine**: Fast filter bar to search by destination, check-in/out dates, and guest capacity.
- **Curated Property Showcase**: Featured cards displaying popular hotels (e.g., *Danubius Hotel Regents Park*, *The Resident Soho*, *London Bridge Grand Hotel*) with pricing, ratings, and location details.
- **Facility Highlights**: Interactive grid of amenities including private workspaces, parking, breakfast, high-speed WiFi, 24/7 power backup, pool, fitness centers, and concierge services.
- **Interactive Map & Destination Discovery**: Integrated Google Maps viewer highlighting properties with direct newsletter subscription for destination guides.
- **Comprehensive Contact & Support Hub**:
  - Direct display of primary and alternative phone lines and email addresses.
  - Full address listings for global headquarters and regional offices.
  - Interactive contact form with fields for alternative phone/email details, topic categories, and instant feedback.
- **Guest Testimonial Carousel**: Parallax-enabled Swiper slider showcasing verified guest reviews and experiences.
- **Authentication Pages**: User-friendly Login and Registration interfaces supporting email authentication and Google sign-in workflows.
- **Responsive Navigation & Mobile Drawer**: Sticky navbar with mobile-responsive menu, smooth page navigation, and quick links.

---

## Brand Identity

- **Brand Name**: Prop Pilot
- **Tagline**: Find your perfect place to stay
- **Primary Color**: `#F6FCF9` (Soft mint background)
- **Secondary / Accent Color**: `#24AB70` (Prop Pilot Green)
- **Typography**: Open Sans

---

## Official Contact & Alternative Details

Prop Pilot provides multiple redundant communication channels to ensure 24/7 support:

| Channel | Primary Detail | Alternative Detail | Availability |
| :--- | :--- | :--- | :--- |
| **Phone** | `+1 (800) 456-PROP (7767)` | `+1 (555) 234-7890` | 24/7 Toll-Free Support |
| **Email** | `contact@proppilot.com` | `support@proppilot.com` | Response within 2 hours |
| **Headquarters** | 100 Innovation Way, Suite 400<br>San Francisco, CA 94105, USA | 25 Canary Wharf, Suite 12<br>London E14 5AB, United Kingdom | Mon-Sat 8:00 AM – 10:00 PM EST |
| **Concierge Desk** | Direct In-App Chat | Dedicated VIP Callback | 24/7 Non-Stop Assistance |

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool / Bundler**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Carousels & Sliders**: [Swiper 11](https://swiperjs.com/)
- **Icons**: [React Icons (Fa, Md, Bi)](https://react-icons.github.io/react-icons/)
- **Click Detection**: `react-detect-click-outside`

---

## Project Architecture

```text
Prop-Pilot/
├── index.html                   # HTML template with Prop Pilot metadata & fonts
├── package.json                 # Project dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration for Tailwind CSS
├── tailwind.config.js           # Tailwind theme and custom colors (#24AB70)
├── vite.config.js               # Vite build configuration
├── public/                      # Static assets, hotel photos, icons
│   ├── About.png
│   ├── hero.png
│   ├── hotel-1.png
│   ├── hotel-2.png
│   ├── hotel3.png
│   ├── testimonial.png
│   └── ...
└── src/
    ├── App.jsx                  # Main application routing
    ├── main.jsx                 # React root DOM entry
    ├── index.css                # Global styles, fonts, and Tailwind directives
    ├── Components/
    │   ├── AppLayout.jsx        # Shared page layout (Header + Outlet + Footer)
    │   ├── Rating.jsx           # Reusable 5-star rating visual component
    │   ├── About/
    │   │   └── AboutUs.jsx      # Brand story & company history
    │   ├── Facilities/
    │   │   └── Facilities.jsx   # Grid of amenities and services
    │   ├── Footer/
    │   │   └── Footer.jsx       # Brand info, quick links, contact & alternative details
    │   ├── Hero/
    │   │   └── Hero.jsx         # Hero banner with stay search engine
    │   ├── Map/
    │   │   └── Map.jsx          # Google Map embed and newsletter subscription
    │   ├── Navbar/
    │   │   └── Navbar.jsx       # Navigation header with Prop Pilot branding & mobile menu
    │   ├── Popular/
    │   │   └── Popular.jsx      # Top-rated hotel cards with pricing
    │   └── Testimonial/
    │       └── Testimonial.jsx  # Swiper parallax guest testimonial slider
    └── Pages/
        ├── Home.jsx             # Landing page compiling all home sections
        ├── Contact.jsx          # Contact page with primary/alt details & inquiry form
        ├── Login.jsx            # User login page
        └── Register.jsx         # User registration page
```

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16.x or newer) and [npm](https://www.npmjs.com/) installed on your machine.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Prop-Pilot.git
   cd Prop-Pilot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at:
```text
http://localhost:5173
```

### Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Pages & Routing

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Landing page featuring Hero search, popular stays, facilities, history, testimonials, and map. |
| `/contact` | `Contact.jsx` | 24/7 Support page with full contact details, alternative channels, and inquiry form. |
| `/login` | `Login.jsx` | User authentication screen with password recovery and links to sign up. |
| `/register` | `Register.jsx` | New user onboarding screen with Google login integration. |

---

## Configuration & Environment

- **Tailwind Config** (`tailwind.config.js`):
  Customizes brand themes:
  ```js
  colors: {
    primary: "#F6FCF9",
    secondary: "#24AB70"
  }
  ```
- **Email/Contact Integration**:
  The contact form uses `react-hook-form` and is ready for integration with backend APIs or services such as [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/) (both present in `package.json`).

---

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

&copy; 2026 **Prop Pilot**. All rights reserved.
