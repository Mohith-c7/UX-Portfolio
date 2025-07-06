# Mohith Kumar - UI/UX Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, interactive elements, and a clean design that showcases UI/UX design work.

## 🚀 Features

### Design & UX
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, parallax scrolling, and dynamic backgrounds
- **Accessibility**: WCAG compliant with skip links, focus management, and screen reader support
- **Performance**: Optimized images, lazy loading, and efficient animations

### Sections
- **Hero Section**: Interactive profile with social links and call-to-action
- **My Story**: Personal journey and background information
- **Projects**: Showcase of featured design work with modal interactions
- **Experience**: Timeline-based work experience display
- **Design Process**: Step-by-step design methodology
- **Contact**: Footer with contact information and social links

### Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom components
- **Framer Motion**: Advanced animations and interactions
- **PWA Ready**: Progressive Web App capabilities
- **SEO Optimized**: Meta tags, sitemap, and structured data

## 🔒 Security Features

### HTTP Security Headers
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **Referrer-Policy**: Controls referrer information
- **X-XSS-Protection**: Additional XSS protection
- **Permissions-Policy**: Restricts browser features
- **Strict-Transport-Security**: Enforces HTTPS

### Content Security
- **Input Validation**: All user inputs are properly validated
- **XSS Prevention**: Sanitized content rendering
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Secure External Links**: All external links use `rel="noopener noreferrer"`

### Performance & Accessibility
- **Reduced Motion**: Respects user's motion preferences
- **High Contrast**: Supports high contrast mode
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and skip links

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type-safe JavaScript
- **Tailwind CSS 3**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library


### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and utilities
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main portfolio page
│   └── projects/          # Projects page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Footer.tsx        # Footer component
│   ├── GlassNav.tsx      # Navigation component
│   └── LogoM.tsx         # Logo component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # SEO robots file
│   ├── sitemap.xml       # SEO sitemap
│   └── browserconfig.xml # Windows tile config
└── styles/               # Additional styles
```


### Styling
- **Global Styles**: Modify `app/globals.css` for custom CSS
- **Tailwind Config**: Update `tailwind.config.ts` for theme customization
- **Components**: Edit individual components in `components/` directory

## 📱 PWA Features

The website is configured as a Progressive Web App with:
- **Manifest**: App installation capabilities
- **Service Worker**: Offline functionality (can be added)
- **Responsive Design**: Works on all screen sizes
- **Fast Loading**: Optimized for performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Techniques
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Minification**: CSS and JavaScript
- **Caching**: Static asset caching

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For hosting and deployment
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Radix UI**: For accessible components

## 📞 Contact

- **Portfolio**: [https://mohithkumar.vercel.app](https://mohithkumar.vercel.app)
- **LinkedIn**: [Mohith Kumar](https://www.linkedin.com/in/mohith-kumar-chadalawada-37a90b2a1/)
- **GitHub**: [@Mohith-c7](https://github.com/Mohith-c7)
- **Behance**: [mohith07](https://www.behance.net/mohith07)
- **Email**: iammohithkumar@gmail.com

---

**Built with ❤️ by Mohith** 
