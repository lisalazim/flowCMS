# FlowCMS

**A landing page concept for a fictional content management product.**

FlowCMS is a front-end practice project. I designed and built a responsive marketing page for an imaginary CMS, aimed at small content teams. It shows layout, responsive navigation and component styling with React and Tailwind CSS.

> This is a **landing page only**. There is no backend, editor, database or analytics behind it. The product, its features and the "Recent Posts" content are placeholders written for the design.

---

## What's on the page

- **Navigation bar** fixed to the top, with a full-screen mobile menu (open/close state handled in React)
- **Hero section** with a background image, headline and two calls to action
- **Features section** with three cards: content editing, analytics and device support
- **Recent posts section** with placeholder blog cards
- **Footer** with product name and tagline

## Tech stack

- React 19 with TypeScript
- Vite 7
- Tailwind CSS 4 (configured through the `@theme` directive)
- React Icons
- Google Fonts: Inter and Roboto

## What I practiced

- Building a responsive layout with Tailwind's mobile-first breakpoints
- Managing simple UI state with `useState` for the mobile menu
- Setting up Tailwind CSS 4 with Vite and custom font tokens
- Organizing a React project into pages and assets

## Run locally

```bash
git clone https://github.com/lisalazim/flowCMS.git
cd flowCMS
npm install
npm run dev
```

Then open the local address Vite prints, usually `http://localhost:5173`.

## Possible next steps

- Make the navigation links scroll to their sections
- Split the page into reusable components (`Navbar`, `Hero`, `FeatureCard`, `PostCard`)
- Load the recent posts from a JSON file or a headless CMS

---

## Author

**Lisa Lazimaturrohmah**: EdTech developer and Vice Principal for Student Affairs

GitHub: [@lisalazim](https://github.com/lisalazim)
