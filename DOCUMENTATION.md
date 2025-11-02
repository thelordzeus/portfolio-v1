# Portfolio Website Documentation

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Components Documentation](#components-documentation)
- [Data Management](#data-management)
- [Styling](#styling)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

This is a personal portfolio website designed to showcase academic and professional background, including education, internships, coursework, projects, skills, and technologies. The website serves as a comprehensive platform for potential employers or clients to learn about qualifications and experience.

## Tech Stack

### Core Technologies
- **React** (v18.2.0) - JavaScript library for building user interfaces
- **React DOM** (v18.2.0) - React package for working with the DOM
- **React Scripts** (v5.0.1) - Configuration and scripts for Create React App

### UI & Styling
- **Tailwind CSS** (v3.1.8) - Utility-first CSS framework
- **PostCSS** (v8.4.17) - Tool for transforming CSS
- **Autoprefixer** (v10.4.12) - PostCSS plugin to parse CSS and add vendor prefixes

### Icons & Visual Components
- **React Icons** (v4.4.0) - Popular icon library
- **React Icon Cloud** (v4.1.4) - Component for creating icon clouds
- **Simple Icons** (v7.14.0) - SVG icons for popular brands
- **TagCloud** (v2.2.0) - 3D tag cloud component

### Testing
- **Jest** - Testing framework (via React Scripts)
- **React Testing Library** (v13.4.0) - Testing utilities for React components
- **@testing-library/user-event** (v13.5.0) - User interaction simulation

## Project Structure

```
portfolio-v1/
├── public/                    # Static files
├── src/
│   ├── components/           # React components
│   │   ├── About/           # About section components
│   │   │   └── Hero.jsx
│   │   ├── Card/            # Card components
│   │   │   ├── Experience.jsx
│   │   │   └── Projects.jsx
│   │   ├── Navbar/          # Navigation components
│   │   │   └── Navbar.js
│   │   ├── Footer.jsx       # Footer component
│   │   └── Skills.jsx       # Skills showcase component
│   ├── Data/                # JSON data files
│   │   └── About.json
│   ├── Styles/              # CSS and styling files
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   ├── index.js             # Application entry point
│   └── index.css            # Global styles
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # Project overview
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-v1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode.
- Opens [http://localhost:3000](http://localhost:3000)
- Page reloads when you make changes
- Shows lint errors in the console

### `npm test`
Launches the test runner in interactive watch mode.
- Runs all test files
- Re-runs tests when files change

### `npm run build`
Builds the app for production to the `build` folder.
- Correctly bundles React in production mode
- Optimizes the build for best performance
- Bundles are minified and filenames include hashes

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**
- Removes the single build dependency from your project
- Copies all configuration files and dependencies into your project

### `npm run build:css`
Builds Tailwind CSS from source:
```bash
postcss src/Styles/tailwind.css -o src/Styles/index.css
```

### `npm run build:watch`
Watches Tailwind CSS for changes and rebuilds automatically:
```bash
postcss src/Styles/tailwind.css -o src/Styles/index.css --watch
```

## Components Documentation

### Hero Component (`src/components/About/Hero.jsx`)
Displays the hero section with introduction and main call-to-action.

**Purpose**: First impression section showcasing name, title, and brief introduction.

### Navbar Component (`src/components/Navbar/Navbar.js`)
Navigation bar for the portfolio website.

**Features**:
- Site navigation
- Responsive design
- Smooth scrolling to sections

### Skills Component (`src/components/Skills.jsx`)
Showcases technical skills and proficiencies.

**Features**:
- Interactive skill visualization
- Icon cloud integration
- Technology badges

### Experience Component (`src/components/Card/Experience.jsx`)
Displays professional experience and internships.

**Structure**:
- Card-based layout
- Timeline format
- Company, role, and duration details

### Projects Component (`src/components/Card/Projects.jsx`)
Showcases portfolio projects.

**Features**:
- Project cards with descriptions
- Technology stack for each project
- Links to live demos and repositories

### Footer Component (`src/components/Footer.jsx`)
Website footer with contact information and social links.

**Contains**:
- Social media links
- Contact information
- Copyright notice

## Data Management

### About.json (`src/Data/About.json`)
Central data file containing personal information, skills, and content.

**Structure**:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "description": "Brief description",
  "skills": [...],
  "experience": [...],
  "projects": [...]
}
```

**Usage**:
- Import in components that need personal data
- Centralized data management
- Easy updates without touching component code

## Styling

### Tailwind CSS
This project uses Tailwind CSS for styling:

1. **Configuration**: `tailwind.config.js`
   - Custom theme settings
   - Color palette
   - Spacing and breakpoints

2. **Source Files**: Located in `src/Styles/`
   - `tailwind.css`: Main Tailwind directives
   - `index.css`: Compiled output

3. **Build Process**: Use PostCSS to compile Tailwind
   ```bash
   npm run build:css        # One-time build
   npm run build:watch      # Watch mode
   ```

### Custom CSS
- `App.css`: Application-specific styles
- `index.css`: Global styles and Tailwind output

### Best Practices
- Use Tailwind utility classes for consistency
- Keep custom CSS minimal
- Follow mobile-first responsive design
- Use CSS modules for component-specific styles

## Deployment

### Building for Production

1. Create production build:
```bash
npm run build
```

2. The `build` folder contains optimized production files

### Deployment Platforms

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm install netlify-cli -g

# Deploy
netlify deploy --prod
```

#### GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://<username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Contributing

### Development Workflow

1. **Create a branch**:
```bash
git checkout -b feature/your-feature-name
```

2. **Make changes**: Edit components, styles, or data

3. **Test changes**:
```bash
npm test
npm start  # Verify in browser
```

4. **Build production version**:
```bash
npm run build
```

5. **Commit changes**:
```bash
git add .
git commit -m "Description of changes"
```

6. **Push to repository**:
```bash
git push origin feature/your-feature-name
```

### Code Style Guidelines

- Use functional components with hooks
- Follow React best practices
- Use descriptive component and variable names
- Add comments for complex logic
- Keep components small and focused
- Use PropTypes or TypeScript for type checking

### Component Creation Template

```jsx
import React from 'react';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here

  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### Adding New Features

1. **New Component**:
   - Create file in appropriate `src/components/` subdirectory
   - Import and use in `App.js` or parent component
   - Add corresponding styles

2. **New Data**:
   - Add to `src/Data/About.json`
   - Import in component that uses it
   - Update component to display new data

3. **New Styles**:
   - Prefer Tailwind utility classes
   - Add custom CSS only when necessary
   - Update `tailwind.config.js` for theme changes

## Browser Support

### Production
- \>0.2% market share
- Not dead browsers
- Not Opera Mini

### Development
- Last version of Chrome
- Last version of Firefox
- Last version of Safari

## Troubleshooting

### Common Issues

**Issue**: Styles not updating
```bash
# Solution: Rebuild Tailwind CSS
npm run build:css
```

**Issue**: Port 3000 already in use
```bash
# Solution: Use different port
PORT=3001 npm start
```

**Issue**: Module not found errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Create React App Documentation](https://create-react-app.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

This project is private and not licensed for public use.

## Contact

For questions or feedback about this portfolio website, please refer to the contact information provided in the website footer.

---

**Last Updated**: November 2025
**Version**: 0.1.0
