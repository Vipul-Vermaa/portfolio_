# Backend Developer Portfolio

A modern, responsive React portfolio showcasing backend development skills, projects, and technologies.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Display projects with tech stack, descriptions, and links
- **Skills Section**: Organized skills by categories with icons
- **Contact Information**: Easy access to social links and contact details
- **Smooth Navigation**: Fixed navigation with smooth scrolling

## Sections

1. **Header/Hero**: Name, title, profile photo area, and social links
2. **About**: Short bio and experience highlights
3. **Projects**: Project cards with screenshots, tech stack, and links
4. **Skills**: Categorized skills with icons and descriptions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Customization

### Personal Information

Update the following files with your information:

#### Header Component (`src/components/Header.js`)
- Change "Your Name" to your actual name
- Update the description text
- Replace social media links with your actual profiles
- Add your profile photo (replace the placeholder)

#### About Component (`src/components/About.js`)
- Update the bio text to reflect your experience
- Modify the experience highlights

#### Projects Component (`src/components/Projects.js`)
- Replace the sample projects with your actual projects
- Update project names, descriptions, tech stacks
- Add real GitHub and deployment links
- Replace placeholder images with actual project screenshots

### Styling

The portfolio uses CSS for styling. You can customize:

- Colors: Update CSS variables in the component files
- Fonts: Change the font-family in `src/index.css`
- Layout: Modify grid layouts and spacing
- Animations: Adjust transition effects

### Adding Your Profile Photo

1. Add your photo to the `public` folder
2. Update the `Header.js` component to use your image:
   ```jsx
   <img src="/your-photo.jpg" alt="Your Name" />
   ```

### Adding Project Screenshots

1. Add project screenshots to the `public` folder
2. Update the project data in `Projects.js`:
   ```jsx
   image: "/project-screenshot.jpg"
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation and hero section
│   ├── Header.css
│   ├── About.js           # About section
│   ├── About.css
│   ├── Projects.js        # Projects showcase
│   ├── Projects.css
│   ├── Skills.js          # Skills section
│   └── Skills.css
├── App.js                 # Main app component
├── App.css
├── index.js              # Entry point
└── index.css             # Global styles
```

## Technologies Used

- **React**: Frontend framework
- **React Icons**: Icon library
- **CSS3**: Styling and animations
- **HTML5**: Semantic markup

## Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### GitHub Pages
1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, feel free to reach out! 