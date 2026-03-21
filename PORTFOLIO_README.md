# Zakaria's Developer Portfolio

A premium, modern developer portfolio built with **React.js**, **Vite**, **TailwindCSS**, **Framer Motion**, and **Three.js**. Featuring a dark tech aesthetic with glassmorphism design, smooth animations, and full responsiveness.

## 🎨 Features

✨ **Premium Design**

- Dark developer theme inspired by top Silicon Valley portfolios
- Glassmorphism UI with neon blue accents
- Smooth animations powered by Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- Modern typography and gradient effects

🚀 **Performance Optimized**

- Built with Vite for lightning-fast development and production builds
- Minimal bundle size with optimized dependencies
- Lazy-loaded components with Framer Motion
- Smooth scrolling and scroll-triggered animations

🎭 **Interactive Elements**

- Page loading animation
- Particle background animation
- Smooth scroll navigation
- Animated skill bars
- Hover effects on projects and cards
- Parallax-inspired animations
- Floating particles effect

📱 **Responsive Components**

- Mobile-first design approach
- Adaptive navigation with mobile menu
- Touch-friendly UI elements
- Optimized for all screen sizes

## 🛠 Tech Stack

- **Frontend Framework**: React.js 19
- **Build Tool**: Vite 8
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion 12
- **3D Graphics**: Three.js (optional, can be extended)
- **Icons**: React Icons
- **Scroll Detection**: React Intersection Observer
- **Language**: TypeScript

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf                 # CV file for download
│   └── favicon.svg            # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation component
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ParticlesBackground.tsx  # Particle animation
│   │   ├── Loading.tsx        # Loading screen
│   │   └── sections/
│   │       ├── HeroSection.tsx      # Hero section
│   │       ├── AboutSection.tsx     # About me
│   │       ├── SkillsSection.tsx    # Skills showcase
│   │       ├── ProjectsSection.tsx  # Projects
│   │       ├── ExperienceSection.tsx # Experience & Education
│   │       └── ContactSection.tsx   # Contact form
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   ├── App.css                # App styles
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── tailwind.config.js         # TailwindCSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**

```bash
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173` (or the next available port if 5173 is busy)

## 📖 Usage

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Locally preview the production build.

### Linting

```bash
npm run lint
```

Run ESLint to check code quality.

## 🎨 Customization

### Update Personal Information

**Hero Section** - Edit `src/components/sections/HeroSection.tsx`:

- Update name and title
- Modify tagline text
- Customize button text and links

**About Section** - Edit `src/components/sections/AboutSection.tsx`:

- Update bio and description
- Modify education and experience details

**Skills Section** - Edit `src/components/sections/SkillsSection.tsx`:

- Add/remove skill categories
- Update proficiency levels

**Projects Section** - Edit `src/components/sections/ProjectsSection.tsx`:

- Add your projects
- Update descriptions and tech stacks
- Add project images (replace placeholder URLs)

**Experience Section** - Edit `src/components/sections/ExperienceSection.tsx`:

- Update work experience
- Add education details

**Contact Section** - Edit `src/components/sections/ContactSection.tsx`:

- Update email address
- Add social media links

### Colors and Theme

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  'dark-bg': '#0a0e27',        // Background
  'dark-card': '#111632',      // Card background
  'neon-blue': '#00d9ff',      // Primary highlight
  'neon-blue-dark': '#0099cc', // Secondary highlight
  'text-light': '#e0e7ff',     // Main text
  'text-muted': '#a0aec0',     // Secondary text
}
```

### Add Your CV

Replace the placeholder CV in `public/cv.pdf` with your actual CV file. The download button will work automatically.

### Update Project Images

Replace placeholder images in `ProjectsSection.tsx`. Update the image URLs to point to your actual project screenshots.

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

#### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm run build
# Deploy dist/ folder to Netlify
```

#### GitHub Pages

```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

#### Other Platforms

Deploy the `dist/` folder (generated after `npm run build`) to:

- Firebase Hosting
- AWS S3 + CloudFront
- Heroku
- Railway
- Any static hosting service

## 🎓 Sections Overview

### 1. Hero Section

- Full-screen introduction with name and title
- Call-to-action buttons (Projects, Contact, Download CV)
- Particle animation background
- Scroll indicator

### 2. About Section

- Professional bio
- Key stats (projects completed, years of experience)
- Education and experience quick facts

### 3. Skills Section

- Categorized skill cards (Frontend, Backend, Databases, Tools)
- Proficiency bars with animations
- Technology badges
- Additional competencies grid

### 4. Projects Section

- Featured project cards
- Project descriptions and tech stacks
- GitHub and demo links
- Hover animations and image effects

### 5. Experience Section

- Work experience timeline
- Education details
- Key achievements and highlights

### 6. Contact Section

- Contact information (email, phone, location)
- Contact form with mailto integration
- Social media links
- Call-to-action CTA

### 7. Footer

- Quick navigation links
- Social media links
- Copyright information

## 🎨 Design System

### Color Palette

- **Background**: #0a0e27 (Near black)
- **Cards**: #111632 (Dark grey)
- **Primary Accent**: #00d9ff (Neon blue)
- **Secondary Accent**: #0099cc (Dark blue)
- **Text**: #e0e7ff (Off-white)
- **Muted**: #a0aec0 (Grey)

### Typography

- Font: Inter, Segoe UI, Roboto (system font stack)
- Headings: Bold, gradient text effects
- Body: Regular weight with optimized line height
- Monospace: For code snippets (optional)

### Effects

- **Glassmorphism**: Frosted glass with backdrop blur
- **Gradients**: Neon blue to dark blue
- **Shadows**: Glow effects for interactive elements
- **Animations**: Framer Motion smooth transitions

## 🔧 Advanced Customization

### Adding Three.js Elements

The project supports Three.js for 3D elements. To add 3D to hero or other sections:

```tsx
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// Add to your component
<Canvas>
  <YourModel />
</Canvas>;
```

### Custom Animations

Add new animations in `tailwind.config.js`:

```js
keyframes: {
  your-animation: {
    '0%': { /* start state */ },
    '50%': { /* middle state */ },
    '100%': { /* end state */ },
  }
}
```

## 🐛 Troubleshooting

### Port Already in Use

Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Styles Not Applying

- Clear browser cache
- Restart dev server: `npm run dev`
- Rebuild Tailwind CSS: `npm run build`

### Build Errors

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 💡 Tips for Success

1. **Add Real Images**: Replace all placeholder images with your actual project screenshots
2. **Optimize Performance**: Compress images for faster load times
3. **SEO Optimization**: Add proper meta tags and schema markup
4. **Analytics**: Add Google Analytics
5. **Testing**: Add unit tests with Jest
6. **Accessibility**: Ensure proper ARIA labels and keyboard navigation

## 🎉 Quick Customization Checklist

- [ ] Update all personal information
- [ ] Replace CV file in `public/cv.pdf`
- [ ] Add project images
- [ ] Update social media links
- [ ] Customize colors if desired
- [ ] Test on mobile devices
- [ ] Build and deploy
- [ ] Add analytics
- [ ] Set up custom domain (optional)

---

**Built with ❤️ using React, Vite, TailwindCSS, and Framer Motion**
