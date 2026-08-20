# Mainframe

Full-screen cursor-scrubbed video built with React, TypeScript, Vite, and
Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL.

## Behavior

- The background video fills the entire viewport, no autoplay.
- Cursor position maps directly to a point in the video: far left = the
  start of the clip, far right = the end. With the current clip (wolf
  turning its head) that means the wolf looks left when your cursor is on
  the left side of the screen and looks right when it's on the right.
- The system cursor is replaced with the dollar-bill image
  (`public/cursor-dollar.png`).
- All on-screen text (navbar, headline, buttons) has been removed — the
  page is just the video and the custom cursor.

## Structure

- `src/components/BackgroundVideo.tsx` — fixed full-screen video, scrubbed
  by absolute cursor position.
- `src/App.tsx` — renders only `BackgroundVideo`.
- `src/index.css` — sets the custom cursor globally on `body`.
- `public/wolf-turning-head.mp4` — the background video.
- `public/cursor-dollar.png` — the custom cursor image.
- `src/components/Navbar.tsx` and `src/components/Hero.tsx` are still in
  the project (unused, not imported) in case you want to bring text/UI
  back later — just import and render them again in `App.tsx`.
