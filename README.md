# Chuol Tut Duop Portfolio

Professional portfolio website for Chuol Tut Duop, a B.Sc. in Natural Resources and Management candidate at the University of Kebri Dahar, Ethiopia.

The site presents academic work, environmental interests, field experience, skills, education, and professional opportunities through a responsive portfolio experience designed for desktop and mobile devices.

## Live Portfolio

Add the deployed portfolio URL here:

```text
https://chuol-portfolio.vercel.app/
```

## Highlights

- Responsive portfolio layout for mobile, tablet, and desktop screens
- Dark and light theme support
- Accessible section navigation and scroll progress tracking
- Project archive with category filtering
- Detailed case-study modal for selected projects
- Previous and next project navigation
- CV modal with copy and download actions
- Education timeline and academic background
- Environmental focus areas and skills dashboard
- Field experience and opportunity sections
- Contact and professional inquiry information
- Local image assets bundled with the application

## Featured Work

The portfolio includes case studies covering:

- Integrated watershed and natural resource governance
- Institutional solid waste stream auditing and circular mitigation
- In-situ ecological sampling and vegetation transect analysis
- Earth observation and drought telemetry

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons
- Motion for interface animation
- tsParticles for the background particle system
- EmailJS for contact form delivery

## Project Structure

```text
.
├── public/                  # Public files, robots.txt, sitemap.xml, and static assets
├── src/
│   ├── assets/              # Local images and visual assets
│   ├── components/          # Portfolio sections and reusable UI components
│   ├── context/             # Theme and shared application context
│   ├── data/                # Centralized portfolio and project content
│   ├── App.tsx              # Application composition
│   ├── index.css            # Global styles, theme variables, and Tailwind setup
│   ├── main.tsx             # React application entry point
│   └── types.ts             # Shared TypeScript interfaces
├── index.html               # Document metadata and structured SEO data
├── metadata.json            # Portfolio metadata
├── package.json             # Scripts and dependencies
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment configuration
└── vite.config.ts           # Vite configuration
```

## Requirements

- Node.js 18 or newer
- npm 9 or newer

Check your installed versions:

```bash
node --version
npm --version
```

## Run Locally

Clone the repository and install the dependencies:

```bash
git clone https://github.com/kueiyiee/chuol-tut-duop-portfolio.git
cd chuol-tut-duop-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite. The configured development port is usually:

```text
http://localhost:3000
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript compiler without emitting files |
| `npm run clean` | Remove generated build files on Unix-like systems |

## Updating Portfolio Content

Most personal, academic, and project content is centralized in:

```text
src/data/portfolioData.ts
```

Update this file when changing:

- Personal information
- University and degree details
- Academic history
- Focus areas
- Project descriptions and case studies
- Skills and coursework
- Field observations
- Target organizations

Project presentation and interaction logic lives in:

```text
src/components/Projects.tsx
src/components/ProjectModal.tsx
```

Global visual styling and theme variables live in:

```text
src/index.css
```

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the generated build locally with:

```bash
npm run preview
```

The generated files are written to the `dist/` directory.

## Deployment

This project is configured for Vercel deployment.

### Vercel Dashboard

1. Import the repository into Vercel.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.
4. Deploy the project.

### Vercel CLI

```bash
npm install --global vercel
vercel
```

For a production deployment:

```bash
vercel --prod
```

## Accessibility and Responsive Behavior

The interface includes semantic sections, descriptive image alternative text, keyboard-accessible controls, Escape-key modal closing, and responsive layouts for narrow mobile screens through large desktop displays.

Before publishing changes, verify the main workflows on both mobile and desktop widths:

- Open and close a project case study
- Navigate between projects
- Filter the project list
- Open and close the CV modal
- Toggle the color theme
- Submit or test the contact workflow
- Check that no content is clipped horizontally

## Content and Accuracy

The portfolio is built around locally maintained project and academic data. Update the centralized data files when personal details, academic status, project descriptions, contact information, or deployment links change. Keep case studies grounded in verified project information.

## License

This repository is a personal portfolio. Unless a separate license is added, the portfolio content, personal information, photographs, and project materials should not be reused without permission.

## Contact

For professional inquiries, use the contact details provided in the portfolio or update the contact information in `src/data/portfolioData.ts`.
