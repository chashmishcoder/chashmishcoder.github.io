# ML Engineer Portfolio Website

A modern, responsive portfolio website for a Machine Learning Engineer. This website showcases skills, projects, and professional information in an elegant and user-friendly manner.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Mobile-friendly navigation
- Sections for About, Skills, Projects, and Contact
- Smooth scrolling navigation
- Project cards with hover effects
- Social media integration
- Contact information display

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (Vanilla)
- Font Awesome Icons

## Setup Instructions

1. Clone this repository to your local machine
2. Open `index.html` in your web browser
3. Customize the content in `index.html` with your personal information
4. Replace the placeholder images in the projects section with your own images
5. Update the contact information and social media links
6. Modify the color scheme in `styles.css` if desired (look for the CSS variables in the `:root` selector)

## Customization

### Changing Colors
The website uses CSS variables for colors, which can be modified in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --light-bg: #f5f6fa;
    --white: #ffffff;
}
```

### Adding Projects
To add new projects, copy the following structure in the projects section of `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="path-to-your-image.jpg" alt="Project Title">
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <div class="project-tags">
            <span>Technology 1</span>
            <span>Technology 2</span>
            <span>Technology 3</span>
        </div>
    </div>
</div>
```

### Adding Skills
To add new skills, add them to the appropriate category in the skills section of `index.html`:

```html
<div class="skill-category">
    <h3>Category Name</h3>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the MIT License. 