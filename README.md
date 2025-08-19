# React Micro UI - Component Library

A accessible React component library built with TypeScript, Vite, and Storybook. This project provides reusable UI components with comprehensive documentation and interactive examples.

## 🚀 Features

- **Modern React 19** with TypeScript support
- **Vite** for fast development and building
- **Storybook** for component documentation and testing
- **Accessibility-focused** components with ARIA support
- **Responsive design** with multiple size variants
- **Customizable styling** with CSS custom properties
- **Type-safe** component APIs

## 📦 Components

### Button
A versatile button component with multiple variants and sizes:
- **Variants**: Primary, Secondary, Outline
- **Sizes**: Small, Medium, Large
- **States**: Default, Disabled, Loading
- **Types**: Button, Submit

### Input
A flexible input component with validation support:
- **Types**: Text, Email, Password, Number, Tel, URL
- **Sizes**: Small, Medium, Large
- **States**: Default, Error, Disabled
- **Features**: Error messages, Required validation

### Dropdown
An accessible dropdown component with keyboard navigation:
- **Features**: Search, Multi-select support
- **States**: Open, Closed, Disabled
- **Accessibility**: ARIA labels, Keyboard navigation
- **Customization**: Custom options, Placeholders

## 🛠️ Tech Stack

- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Vite 7.0** - Fast build tool and dev server
- **Storybook 9.0** - Component development environment
- **ESLint** - Code quality and consistency
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-micro-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Available Scripts

```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run storybook    # Start Storybook dev server
npm run build-storybook # Build Storybook for production
npm run lint         # Run ESLint
```

## 📚 Storybook

Storybook provides an interactive playground for all components:

- **Component Library**: Browse all available components
- **Interactive Examples**: Test different props and states
- **Accessibility Testing**: Built-in a11y checks
- **Responsive Testing**: Test on different screen sizes
- **Code Examples**: Copy-paste ready code snippets

Start Storybook with:
```bash
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006) in your browser.

## 🎨 Component Usage

### Button Example

```tsx
import { Button } from './components/Button';

function App() {
  return (
    <Button 
      variant="primary" 
      size="large" 
      onClick={() => console.log('Clicked!')}
    >
      Click Me
    </Button>
  );
}
```

### Input Example

```tsx
import { Input } from './components/Input';

function App() {
  return (
    <Input
      type="email"
      placeholder="Enter your email"
      required
      error={false}
      errorMessage="Please enter a valid email"
    />
  );
}
```

### Dropdown Example

```tsx
import { Dropdown } from './components/Dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function App() {
  return (
    <Dropdown
      options={options}
      placeholder="Select an option"
      onChange={(value) => console.log('Selected:', value)}
    />
  );
}
```

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Using Vitest for component testing
- **E2E Tests**: Using Playwright for integration testing
- **Storybook Testing**: Interactive testing in Storybook
- **Accessibility Testing**: Built-in a11y validation

## 📁 Project Structure

```
react-micro-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.css
│   │   │   ├── Input.stories.tsx
│   │   │   └── index.ts
│   │   ├── Dropdown/
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Dropdown.css
│   │   │   ├── Dropdown.stories.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Storybook Documentation](https://storybook.js.org/)
