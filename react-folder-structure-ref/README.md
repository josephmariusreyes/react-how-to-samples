# Toyota Dealership Website - React Best Practices Demo

This is a sample React application demonstrating best practices in folder structure and component architecture for a Toyota car dealership website.

## 🚗 Features

- **Home Page**: Welcome page with featured models and company highlights
- **Models Page**: Complete vehicle lineup with filtering and sorting
- **Vehicle Details**: Detailed car information with test drive scheduling
- **Contact Us**: Contact form and dealership information

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Header, Footer, Layout, CarCard)
│   └── forms/           # Form-specific components (ContactForm, TestDriveForm)
├── pages/               # Page-level components
│   ├── HomePage.tsx
│   ├── ModelsPage.tsx
│   ├── VehicleDetailsPage.tsx
│   └── ContactUsPage.tsx
├── types/               # TypeScript type definitions
│   └── index.ts
├── data/                # Static data and mock APIs
│   └── carModels.ts
├── hooks/               # Custom React hooks
│   └── useForm.ts
├── utils/               # Utility functions
│   └── index.ts
├── styles/              # SCSS configuration and global styles
│   ├── _variables.scss  # Design system variables
│   ├── _mixins.scss     # Reusable SCSS mixins
│   └── main.scss        # Main SCSS entry point
├── App.tsx              # Main app component with routing
├── App.scss             # Global styles with SCSS
├── index.tsx            # Application entry point
└── index.scss           # Global CSS reset and base styles
```

## 🎯 Best Practices Implemented

### 1. **Folder Structure**
- **Feature-based organization**: Components grouped by functionality
- **Separation of concerns**: Pages, components, utilities, and types in separate folders
- **Consistent naming**: PascalCase for components, camelCase for utilities
- **Index files**: Easy imports with barrel exports

### 2. **Component Architecture**
- **Layout Components**: Header, Footer, Layout for consistent page structure
- **Reusable Components**: CarCard, forms that can be used across different pages
- **Page Components**: Each route has its own dedicated component
- **Props Interfaces**: Strongly typed component props

### 3. **TypeScript Integration**
- **Type Definitions**: Comprehensive interfaces for all data structures
- **Type Safety**: Full TypeScript coverage for better development experience
- **Generic Types**: Reusable types for forms and API responses

### 4. **Styling Strategy**
- **SCSS Architecture**: Organized SCSS with variables, mixins, and modular imports
- **Design System**: Centralized variables for colors, typography, spacing, and breakpoints
- **Component-scoped SCSS**: Each component has its own SCSS file with consistent naming
- **Mixins and Functions**: Reusable SCSS mixins for buttons, cards, forms, and layouts
- **Responsive Design**: Mobile-first approach with standardized breakpoint mixins
- **Consistent Design System**: Toyota brand colors and typography with SCSS variables

## 🛠️ Technologies Used

- **React 19.2.3**: Latest React with function components and hooks
- **TypeScript**: Full type safety and developer experience
- **React Router DOM**: Client-side routing
- **SCSS/Sass**: Advanced CSS with variables, mixins, and nesting
- **CSS3**: Modern CSS with Flexbox and Grid
- **React Testing Library**: Testing utilities (pre-configured)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Run tests**:
   ```bash
   npm test
   ```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action buttons
- Featured models showcase
- Company highlights and benefits
- Responsive design with mobile optimization

### Models Page (`/models`)
- Complete vehicle lineup
- Category filtering (Sedan, SUV, Hybrid, Truck)
- Price sorting options
- Responsive grid layout

### Vehicle Details (`/vehicle-details/:id`)
- Detailed car information and specifications
- Image gallery with thumbnails
- Test drive scheduling form
- Sticky action sidebar

### Contact Us (`/contact-us`)
- Contact form with validation
- Dealership information and hours
- Department contact details
- Map placeholder section

## 🎨 SCSS Architecture

### Variables (`src/styles/_variables.scss`)
- **Brand Colors**: Toyota red variants and neutral colors
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing scale from xs to 4xl
- **Breakpoints**: Mobile-first responsive breakpoint system
- **Shadows & Effects**: Standardized box-shadows and transitions

### Mixins (`src/styles/_mixins.scss`)
- **Button Mixins**: Primary, secondary, and base button styles
- **Card Mixins**: Reusable card and hover effect patterns
- **Form Mixins**: Consistent form input and label styling
- **Layout Mixins**: Container, flexbox, and grid utilities
- **Responsive Mixins**: Mobile, tablet, and desktop media queries

### Component SCSS Structure
Each component has its own SCSS file that:
- Imports the variables and mixins
- Uses SCSS nesting for better organization
- Implements responsive design with mixin utilities
- Maintains consistent naming conventions

## 🔧 Custom Hooks

### `useForm`
A reusable hook for form state management with validation, loading states, and auto-reset functionality.

## 🛡️ Type Safety

All major data structures are fully typed including CarModel, ContactForm, TestDriveForm, and FormStatus interfaces.

## 📦 Component Reusability

Components like CarCard and form components are designed to be reusable across different pages with consistent styling and behavior.

## 📋 Best Practices Checklist

✅ **Folder Structure**: Feature-based organization  
✅ **TypeScript**: Full type coverage  
✅ **Component Design**: Single responsibility principle  
✅ **Styling**: Component-scoped CSS  
✅ **Responsive Design**: Mobile-first approach  
✅ **Routing**: Declarative routing with React Router  
✅ **Form Handling**: Custom hooks and validation  
✅ **Code Organization**: Consistent imports and exports  

---

*This project demonstrates React best practices for enterprise-level applications with proper folder structure, TypeScript integration, and component architecture.*

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
