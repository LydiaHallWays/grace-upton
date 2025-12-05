# CLAUDE.md - Development Documentation

## Project Overview

This is a static landing page for Grace Upton, built to funnel visitors to her FanVue profile. The project was developed with a focus on elegance, simplicity, and conversion optimization.

## Development Process

### Initial Setup
- Renamed 9 images in the `images/` folder to numbered format (1.png through 9.png)
- Created a simple three-file structure: HTML, CSS, and JavaScript

### Design Decisions

**Color Scheme:**
- Dark gradient background (navy to deep blue tones)
- Pink/rose gradient accents for highlights and calls-to-action
- High contrast white text for readability

**Layout:**
- Centered, single-column design for focus
- Large, prominent title at the top
- Image carousel as the main focal point
- Teasing descriptive text to build interest
- Clear call-to-action button

**Interactivity:**
- Everything is clickable and links to the FanVue profile
- Image carousel with manual navigation (prev/next buttons)
- Dot indicators for slide position
- Auto-advance carousel (4-second intervals)
- Smooth transitions and hover effects

### Technical Implementation

**HTML Structure:**
- Semantic HTML5
- All major elements wrapped in links to FanVue
- Carousel with 9 images
- Navigation dots for user feedback

**CSS Styling:**
- Mobile-first responsive design
- CSS Grid and Flexbox for layout
- Gradient text effects using background-clip
- Smooth transitions and hover states
- Three breakpoints: desktop (default), tablet (768px), mobile (480px)

**JavaScript Functionality:**
- Pure vanilla JavaScript (no dependencies)
- Carousel state management
- Auto-advance timer
- Click handlers for navigation
- Event delegation for carousel clicks

### Clickable Elements

All of the following are clickable and redirect to FanVue:
1. Main title "Grace Upton"
2. Entire carousel area (except when clicking navigation buttons)
3. Description paragraph
4. "Continue to My FanVue" button

### GitHub Pages Configuration

The site is designed to work immediately with GitHub Pages:
- Root-level index.html
- Relative paths for all resources
- No build process required
- All assets contained within the repository

## File Structure

```
grace-upton/
├── index.html          # Main landing page
├── style.css           # All styling and responsive design
├── script.js           # Carousel and interaction logic
├── images/             # Image gallery
│   ├── 1.png
│   ├── 2.png
│   ├── ...
│   └── 9.png
├── README.md           # User-facing documentation
└── CLAUDE.md           # Development documentation (this file)
```

## Future Enhancement Ideas

- Add lazy loading for images
- Implement touch/swipe gestures for mobile carousel
- Add fade or slide transitions between images
- Include analytics tracking
- Add meta tags for social media sharing
- Consider adding a favicon

## Performance Considerations

- Images should be optimized for web (compressed)
- Consider adding loading="lazy" to carousel images
- Could implement preloading for the first few images
- Auto-advance interval set to 4 seconds for optimal viewing

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Uses standard HTML5, CSS3, and ES6 JavaScript
- No polyfills required for modern browsers

## Deployment Steps

1. Commit all files to the repository
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select `main` branch and root folder
5. Site will be live at `https://[username].github.io/grace-upton/`

## Maintenance

- Images can be swapped by replacing files in `images/` folder
- Text can be updated in `index.html`
- Styling adjustments in `style.css`
- FanVue URL is hardcoded in multiple places - search for "fanvue.com" to update all instances

## Notes

- The carousel automatically advances every 4 seconds
- Users can manually navigate using arrow buttons or dots
- All elements maintain clickability while preserving carousel functionality
- The design is fully responsive and works on all screen sizes
