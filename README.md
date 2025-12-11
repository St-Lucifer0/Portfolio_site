# Portfolio Website - Anaman Jeremiah Akin

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Current Features

- ✅ Responsive design with dark/light mode
- ✅ Personal information and contact details
- ✅ Project showcase with descriptions
- ✅ Professional experience timeline
- ✅ Contact form and social links

## Next Steps

### 1. Replace Project Images
- Add actual screenshots of your projects
- Replace the current Pexels placeholder images in `src/components/Projects.tsx`

### 2. Add Resume
- Add your resume PDF to the `public` folder as `resume.pdf`
- The download link is already configured in the hero section

### 3. Contact Form Integration
- Set up email service (EmailJS, Formspree, or backend API)
- Configure form submission in `src/components/Contact.tsx`

### 4. Project Links
- Update GitHub repository links for each project
- Add live demo URLs if available

### 5. Deployment Options
- **Bolt Hosting**: Use the deploy button in the interface
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import project from GitHub

### 6. Optional Enhancements
- Add blog section for technical articles
- Include testimonials or recommendations
- Add project case studies with detailed breakdowns
- Integrate analytics (Google Analytics)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)