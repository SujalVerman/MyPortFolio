# Portfolio Website - Sujal Verman

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Glassmorphic navbar with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between themes with persistent storage
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ✨ **Smooth Animations**: Framer Motion powered transitions and effects
- 🎯 **Section-Based Navigation**: Easy navigation between Home, About, Skills, Projects, Experience, Education, Certificates, and Contact
- 🏆 **Certificates Section**: Showcase professional certifications with modal view and download options
- 💼 **Project Showcase**: Interactive project cards with hover effects
- 📊 **Experience Timeline**: Animated vertical timeline for work experience
- 📧 **Contact Form**: Functional contact form with social media links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main portfolio page
├── components/
│   ├── Navbar.tsx        # Navigation bar with tabs
│   ├── ThemeProvider.tsx # Dark/light mode provider
│   ├── Footer.tsx        # Footer component
│   └── sections/
│       ├── Home.tsx      # Hero section
│       ├── About.tsx     # About section
│       ├── Skills.tsx    # Skills showcase
│       ├── Projects.tsx   # Projects grid
│       ├── Experience.tsx # Work experience timeline
│       ├── Education.tsx # Education section
│       ├── Certificates.tsx # Certificates showcase
│       └── Contact.tsx   # Contact form and social links
└── public/               # Static assets
    ├── NewResume.pdf     # Resume PDF file
    └── certificates/     # Certificate images (create this folder)
        ├── python-essentials-2.jpg
        ├── python-essentials-1.jpg
        ├── google-cloud-architect.jpg
        ├── javascript-bootcamp.jpg
        ├── postman-api.jpg
        ├── ai-builders-lab.jpg
        └── full-stack-react.jpg
```

## Customization

### Update Personal Information

- Edit the content in each section component (`components/sections/*.tsx`)
- Update project details in `components/sections/Projects.tsx`
- Modify experience entries in `components/sections/Experience.tsx`
- Update social links in `components/sections/Contact.tsx`

### Add Resume PDF

Place your resume PDF file in the `public/` directory and name it `NewResume.pdf`. The download button in the Home section will automatically link to it.

### Add Certificate Images

1. Create a `certificates` folder in the `public/` directory
2. Add your certificate images with the following names:
   - `python-essentials-2.jpg`
   - `python-essentials-1.jpg`
   - `google-cloud-architect.jpg`
   - `javascript-bootcamp.jpg`
   - `postman-api.jpg`
   - `ai-builders-lab.jpg`
   - `full-stack-react.jpg`

The component will display a placeholder if images are not found, but you should add your actual certificate images for the best experience.

### Customize Colors

Edit the gradient colors in `tailwind.config.ts` and update the color classes throughout the components to match your brand.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

This project is open source and available under the MIT License.

