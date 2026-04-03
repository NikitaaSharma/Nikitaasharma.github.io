# Nikita Sharma - Portfolio Website

Personal portfolio website for Nikita Sharma, a Software Engineer II @ Microsoft.
Built with React, TypeScript, Vite, and Tailwind CSS with shadcn/ui components.

**Live Site:** https://nikitaasharma.github.io/

## Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Testing:** Vitest + Playwright
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/NikitaaSharma/Nikitaasharma.github.io.git
   cd Nikitaasharma.github.io
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:8080/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Other Commands

- **Preview build:** `npm run preview`
- **Run tests:** `npm run test`
- **Watch tests:** `npm run test:watch`
- **Lint code:** `npm run lint`

## Project Structure

```
src/
├── components/       # React components
│   └── ui/          # shadcn/ui components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── assets/          # Static assets
└── test/            # Test files
```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

The deployment workflow:
1. Installs dependencies
2. Builds the project with `npm run build`
3. Deploys the `dist/` directory to GitHub Pages

## License

All rights reserved © 2026 Nikita Sharma
