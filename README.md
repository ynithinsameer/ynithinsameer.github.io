# Nithin Sameer Yerramilli - Personal Website

This repository contains the code for my personal website, showcasing my portfolio, work experience, projects, and research papers.

## Overview

This website serves as a comprehensive portfolio that highlights my skills and experience as an ML Engineer and Data Analyst. It features:

- Interactive homepage with a professional summary
- Detailed work experience timeline
- Project showcase with in-depth descriptions
- Research publications
- Professional milestones

## Technologies Used

This project is built with modern web technologies:

- **React** - Frontend library for building the user interface
- **TypeScript** - For type-safe code
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - For smooth animations and transitions
- **shadcn/ui** - Reusable component library
- **Lucide Icons** - SVG icon library

## Project Structure

```
├── public/              # Static assets
│   └── assets/
│       ├── images/      # Project and profile images
│       └── icons/       # Icon assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main page components
│   │   ├── Index.tsx    # Homepage
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Blogs.tsx
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── providers/       # Context providers
│   └── main.tsx         # Application entry point
└── package.json         # Project dependencies
```

## Running Locally

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/Nithinsameer/personal-website.git

# Navigate to the project directory
cd personal-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173/` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory that can be deployed to any static hosting service.

## Contact

Feel free to reach out to me:

- Email: ynsameer@gmail.com
- LinkedIn: [Nithin Sameer Yerramilli](https://www.linkedin.com/in/nithin-sameer-yerramilli/)
- GitHub: [Nithinsameer](https://github.com/Nithinsameer)
