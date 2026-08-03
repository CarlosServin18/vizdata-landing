# Component Guide

## Overview

Components are organized by feature/section for better maintainability.

## Components

### Hero
**Location:** `src/components/Hero/Hero.jsx`

Main hero section with branding and CTA.

**Props:** None

**Usage:**
```jsx
import Hero from './components/Hero/Hero';

<Hero />
```

---

### Services
**Location:** `src/components/Services/Services.jsx`

Displays service tiers in a grid layout.

**Props:** None (data from constants)

**Usage:**
```jsx
import Services from './components/Services/Services';

<Services />
```

---

### ServiceCard
**Location:** `src/components/ServiceCard/ServiceCard.jsx`

Individual service card component.

**Props:**
- `name` (string) - Service name
- `description` (string) - Service description
- `price` (string) - Pricing info
- `popular` (boolean) - Show "Recommended" badge
- `id` (string) - Card ID

---

### Process
**Location:** `src/components/Process/Process.jsx`

Shows 4-step process flow.

**Props:** None (data from constants)

---

### ProcessStep
**Location:** `src/components/ProcessStep/ProcessStep.jsx`

Individual process step.

**Props:**
- `icon` (string) - Emoji icon
- `name` (string) - Step name
- `description` (string) - Step description

---

### Testimonials
**Location:** `src/components/Testimonials/Testimonials.jsx`

Testimonials section with multiple cards.

**Props:** None (data from constants)

---

### TestimonialCard
**Location:** `src/components/TestimonialCard/TestimonialCard.jsx`

Individual testimonial.

**Props:**
- `quote` (string) - Customer quote
- `author` (string) - Customer name
- `company` (string) - Company name

---

### Contact
**Location:** `src/components/Contact/Contact.jsx`

Contact section wrapper.

**Props:** None

---

### ContactForm
**Location:** `src/components/ContactForm/ContactForm.jsx`

Email contact form.

**Props:** None

---

### Footer
**Location:** `src/components/Footer/Footer.jsx`

Main footer section.

**Props:** None

---

### Button
**Location:** `src/components/Button/Button.jsx`

Reusable button component (generic, not currently used).

**Props:**
- `href` (string) - Link URL
- `children` (node) - Button text
- `className` (string) - Additional CSS classes

## Adding New Components

1. Create a folder: `src/components/ComponentName/`
2. Create file: `ComponentName.jsx`
3. Add to constants if needed
4. Import in App.js or parent component
5. Update this documentation

## Styling Approach

- Use inline styles with COLORS constants for dynamic theming
- Use Tailwind utility classes for layout
- Keep styling consistent across components

## Constants

All centralized data is in `src/constants/`:
- `colors.js` - Color palette
- `strings.js` - All text content
- `config.js` - Configuration values
