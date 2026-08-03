# Contributing Guide

## Code Standards

### Structure
- Keep components small and focused
- One component per file
- Organize by feature/section

### Naming
- Components: PascalCase (e.g., `Hero.jsx`)
- Files: Match component names
- Constants: UPPER_SNAKE_CASE
- Functions: camelCase

### Formatting
```bash
npm run format  # Auto-format with Prettier
npm run lint    # Check code quality
```

### Styling
- Use colors from `constants/colors.js`
- Use text from `constants/strings.js`
- Prefer inline styles for theme colors
- Use Tailwind classes for layout

### Example Component

```jsx
import { COLORS, STRINGS } from '../../constants';

export default function MyComponent() {
  return (
    <div style={{ backgroundColor: COLORS.lightGray }}>
      <h2>{STRINGS.mySection.title}</h2>
    </div>
  );
}
```

## Adding Content

### New Text
Update `src/constants/strings.js`

### New Colors
Update `src/constants/colors.js`

### New Configuration
Update `src/constants/config.js`

## Testing

Before committing:
1. Run `npm run lint`
2. Run `npm run format`
3. Test locally with `npm start`
4. Build for production: `npm run build`

## Commit Messages

Use clear, descriptive messages:
- `feat: add new component`
- `fix: resolve styling issue`
- `refactor: improve code structure`
- `docs: update documentation`

## Questions?

Open an issue or contact the maintainer.
