# IIT KGP Induction page

## Features

### Core Functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Smooth Navigation**: Seamless scrolling between sections
- **Interactive Elements**: Engaging hover effects and animations

### Content Sections
- **Hero Section**: Welcome message with animated background
- **About Program**: Detailed information about the induction program
- **Announcements**: Latest updates and important notices
- **Resources**: Quick access to handbooks, schedules, and maps
- **Contact Information**: Support contacts and office details
- **Video Links**: Campus tour and promotional content

### User Experience
- **Fast Loading**: Optimized performance for quick page loads
- **Accessibility**: Screen reader friendly with proper ARIA labels
- **Cross-Browser Support**: Compatible with all modern browsers
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technologies Used

### Frontend Framework
- **React 18.2.0**: Modern JavaScript library for building user interfaces
- **React DOM**: Rendering React components in the browser
- **React Scripts**: Build tools and development server

### Styling & Design
- **Vanilla CSS**: Custom CSS with CSS Variables for theming
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Animations**: Smooth transitions and interactive effects
- **CSS Custom Properties**: Dynamic theming system

### State Management
- **React Context API**: Global state management for theme switching
- **React Hooks**: useState, useEffect, useContext for component logic
- **Local Storage**: Persistent theme preference storage

### Development Tools
- **Create React App**: Project setup and build configuration
- **ES6+ JavaScript**: Modern JavaScript features and syntax
- **JSX**: JavaScript XML for component templates

### Browser APIs
- **Intersection Observer**: Scroll-based animations (future enhancement)
- **Local Storage API**: Theme preference persistence
- **Smooth Scroll API**: Native smooth scrolling behavior

### Sources of Icons Used
- **IIT KGP logo**: `https://brandeps.com/logo/I/IIT-Kharagpur-01`
- **FB logo**: `https://www.svgrepo.com/svg/506656/facebook`
- **Rest Logo**: `https://emojikeyboard.io/`

## Project Structure9 

```
src/
├── index.js                 # Application entry point
├── App.js                   # Main application component
├── App.css                  # Application-specific styles
├── index.css                # Global styles and theme variables
├── contexts/
│   └── ThemeContext.js      # Theme management context
└── components/
    ├── Navigation.js        # Header navigation component
    ├── HeroSection.js       # Landing section with animations
    ├── AboutSection.js      # Program information section
    ├── AnnouncementsSection.js # News and updates section
    ├── ResourcesSection.js  # Resources and quick links
    ├── ContactSection.js    # Contact information section
    └── Footer.js            # Footer component

public/
├── index.html              # HTML template
├── favicon.ico             # Website favicon
└── manifest.json           # PWA manifest file
```

## Design System

### Color Palette
- **Primary**: Orange (#f97316) - Represents energy and enthusiasm
- **Secondary**: Blue (#2563eb) - Conveys trust and professionalism  
- **Success**: Green (#16a34a) - Indicates positive actions
- **Danger**: Red (#dc2626) - Highlights urgent information

### Typography
- **Font Family**: System fonts for optimal performance
- **Responsive Scaling**: Fluid typography across device sizes
- **Hierarchy**: Clear heading structure for accessibility

### Layout Principles
- **Mobile-First**: Designed for mobile devices, enhanced for desktop
- **Grid System**: CSS Grid for complex layouts
- **Flexbox**: Flexible component arrangements
- **Consistent Spacing**: Uniform padding and margins throughout

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mr-rohit-7903/KGP-Introduction
cd KGP-Introduction
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Configuration

### Theme Customization
The website uses CSS custom properties for theming. You can modify colors in `src/index.css`:

```css
:root {
  --primary-color: #f97316;
  --secondary-color: #2563eb;
  /* Add your custom colors here */
}
```

### Content Updates
- **Announcements**: Update the announcements array in `AnnouncementsSection.js`
- **Resources**: Modify resource links in `ResourcesSection.js`
- **Contact Info**: Update contact details in `ContactSection.js`

