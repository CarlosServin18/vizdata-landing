# VizData Landing Page

Professional landing page for VizData - transforming data into decisions.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `/build` folder.

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Hero/
│   ├── Services/
│   ├── Process/
│   ├── Testimonials/
│   ├── Contact/
│   ├── Footer/
│   ├── Button/
│   ├── ServiceCard/
│   ├── ProcessStep/
│   ├── TestimonialCard/
│   └── ContactForm/
├── constants/           # Centralized configuration
│   ├── colors.js
│   ├── strings.js
│   ├── config.js
│   └── index.js
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run lint` | Check code quality |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Deploy to GitHub Pages |

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **Inline styles** with constants for dynamic theming
- Professional color palette defined in `constants/colors.js`

## 📝 Configuration Files

- `.eslintrc.json` - ESLint configuration
- `.prettierrc.json` - Prettier configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.gitignore` - Git ignore patterns

## 🌐 Deployment

The project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

## 📄 License

All rights reserved © 2025 VizData
