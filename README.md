# AJ Tech World — Software Development Studio

**Building digital experiences that help businesses grow.**

AJ Tech World is a software development agency focused on creating modern websites, web applications, mobile applications, and custom software solutions for businesses and organizations.

This repository contains the frontend code for the AJ Tech World company website, showcasing its services, projects, development approach, and contact information.

## Overview

The website is designed to present AJ Tech World as a professional, reliable technology partner for Indian and international clients.

### Key objectives

- Establish a professional online presence for AJ Tech World.
- Showcase software development services and selected projects.
- Help potential clients understand the company's capabilities.
- Provide a clear path for business inquiries and project discussions.
- Deliver a responsive, accessible, and search-engine-friendly experience.

## Features

- **Modern homepage:** Hero section, company metrics, service overview, featured work, development process, and call-to-action.
- **Services:** Dedicated pages and sections describing software development capabilities.
- **Portfolio:** Showcase selected projects and development work.
- **About:** Company introduction and approach to delivering software solutions.
- **Contact:** A dedicated page for prospective clients to make inquiries.
- **Responsive design:** Layouts optimized for mobile, tablet, and desktop screens.
- **Custom branding:** AJ Tech World logo, favicon, and consistent visual identity.
- **SEO foundations:** Page metadata, sitemap, robots configuration, and social-sharing metadata.
- **Legal pages:** Privacy Policy and Terms of Service.
- **Reusable components:** Shared layout elements and UI components for maintainability.
- **Subtle animations:** Motion effects to enhance the user experience without distracting from content.

## Services

AJ Tech World focuses on the following areas:

- Website Design and Development
- Web Application Development
- Mobile Application Development
- Custom Software Solutions
- Business Dashboards and Internal Tools
- Ongoing Maintenance and Technical Support

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | User interface development |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and layout |
| shadcn/ui | Reusable UI components |
| Lucide React | Icons |
| Framer Motion | UI animations and transitions |
| Git and GitHub | Version control and collaboration |
| Vercel | Deployment platform |

## Website Structure

The website includes the following main pages and sections:

- **Home:** Hero, metrics, services overview, featured projects, process, and CTA.
- **Services:** Overview of development services.
- **Work:** Selected projects and portfolio.
- **About:** Company information and development philosophy.
- **Contact:** Business inquiries and project discussions.
- **Privacy Policy:** Information about privacy practices.
- **Terms of Service:** Terms governing the use of the website and services.

Additional application routes include sitemap and robots configuration.

## Project Structure

The repository's main application is located in the `frontend` directory.

```text
frontend/
├── public/                 # Public assets and brand images
├── src/
│   ├── app/                # Next.js App Router pages and routes
│   │   ├── about/
│   │   ├── api/
│   │   ├── contact/
│   │   ├── privacy/
│   │   ├── services/
│   │   ├── terms/
│   │   ├── work/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── assets/             # Project assets
│   ├── components/         # Reusable UI and layout components
│   ├── data/               # Structured content and project data
│   └── lib/                # Shared utilities and helpers
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*Note: This structure describes the main directories. Individual files and components may evolve as development continues.*

## Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites

Install the following:

- Node.js — a version compatible with the installed Next.js release.
- npm — included with Node.js.
- Git — for version control.

### 1. Clone the repository

```bash
git clone https://github.com/AJ-Tech-World/AJTechWorld.git
```

### 2. Navigate to the frontend directory

```bash
cd AJTechWorld/frontend
```

If you cloned the repository into a different location, adjust the directory path accordingly.

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

If the project requires environment variables, create a local `.env.local` file in the `frontend` directory and add the required values.

```bash
# Example only — add variables required by your application
# VARIABLE_NAME=your_local_value
```

Do not commit API keys, passwords, access tokens, or other secrets to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for production

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

Run these commands from `frontend`. Available scripts can be verified in `frontend/package.json`.

## Development Guidelines

To keep the project maintainable:

- Use TypeScript for application code.
- Prefer reusable components over duplicated UI.
- Keep components and page sections organized by responsibility.
- Use Tailwind CSS for consistent styling and responsive layouts.
- Maintain consistent typography, spacing, and brand colors.
- Test important layouts on mobile, tablet, and desktop.
- Follow accessibility best practices for navigation, forms, and interactive elements.
- Keep SEO metadata accurate for each page.
- Exclude environment files, generated build output, and dependencies from version control.

## Design Philosophy

AJ Tech World's website follows a professional, enterprise-oriented visual direction.

- Clean layouts and strong typography.
- A restrained white, charcoal, and slate palette with corporate blue accents.
- Consistent spacing and a clear visual hierarchy.
- Responsive layouts for different screen sizes.
- Purposeful animations and transitions.
- Content focused on business value, credibility, and clarity.

## Deployment

The frontend is intended to be deployable on [Vercel](https://vercel.com/).

Typical deployment workflow:

1. Push the code to the AJ Tech World GitHub repository.
2. Import the repository into Vercel.
3. Configure the correct project root directory (`frontend`) if required by the deployment setup.
4. Add any required environment variables.
5. Deploy and verify the production website.
6. Configure the custom domain and verify SEO and routing behavior.

Deployment configuration may vary depending on the repository and hosting setup.

## Contributing

Contributions and improvements should follow the project's coding conventions.

1. Create a feature branch.
2. Implement the change using the existing project structure.
3. Test the affected functionality.
4. Review the changes before committing.
5. Open a pull request for review.

## License

All rights reserved by AJ Tech World unless a separate license is added to this repository.

Do not assume that the source code or brand assets may be redistributed or reused without permission.

## Contact

**AJ Tech World — Software Development Studio**

- GitHub: [AJ-Tech-World](https://github.com/AJ-Tech-World)
- Website: [https://ajtechworld.com](https://ajtechworld.com)

For business inquiries, project proposals, or collaboration opportunities, use the contact details published on the official website.

---

*Designed and developed with a focus on quality, usability, and scalable digital experiences.*
=======
# AJTechWorld
