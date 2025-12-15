# Portfolio Website

A modern, responsive portfolio website built with React, JavaScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Particle background effects
- 📧 Contact form with validation
- 🌙 Dark theme design
- 🎯 Smooth scroll navigation

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Router** - Routing
- **Radix UI** - Accessible components
- **TanStack Query** - Data fetching

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── AboutSection.jsx
│   │   ├── BackToTop.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── SkillsSection.jsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `src/components/HeroSection.jsx` - Name, roles, location, social links
- `src/components/AboutSection.jsx` - Skills and highlights
- `src/components/ExperienceSection.jsx` - Work experience
- `src/components/ProjectsSection.jsx` - Projects
- `src/components/SkillsSection.jsx` - Technical skills
- `src/components/ContactSection.jsx` - Contact information

### Styling

- Colors and theme: `src/index.css` and `tailwind.config.js`
- Animations: `src/index.css` (keyframes section)

## License

MIT License - feel free to use this template for your own portfolio!
