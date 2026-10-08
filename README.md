# Cinematic Portfolio Studio

Build a project called "Faris Rahman Portfolio" — a dark-themed, cinematic professional web portfolio for a video editor and photographer, using React + Vite + Tailwind.

STRUCTURE:
A single-page app with a sleek, sticky header nav fixed to the top with three links: "Main Video", "Photos", "Color Grading". Clicking a link smooth-scrolls (CSS `scroll-behavior: smooth` or JS smooth scroll) to the matching section anchor. Nav background should be semi-transparent/blurred dark glass that stays visible on scroll.

SECTION 1 — "Main Video" (Hero, id="main-video"):
- Full-viewport-height section, background pure #000000.
- Centered, massive, ultra-bold headline text "FARIS RAHMAN" using fluid responsive sizing (clamp() font-size scaling smoothly from mobile to desktop).
- Apply `background-clip: text` + `-webkit-background-clip: text` + `-webkit-text-fill-color: transparent` so the text is masked by a background video behind it (background-image/video shows through the letters only).
- Behind/within that text mask, place a looping placeholder cinematic video element (use a free stock placeholder video URL, e.g. from a royalty-free source, as a stand-in — I will swap in my real video later). Video tag must include autoPlay, loop, muted, playsInline attributes.

SECTION 2 — "Photos" (id="photos"):
- Responsive masonry-style image gallery (CSS columns or CSS grid with variable row spans) for high-resolution stills, using placeholder images (e.g. picsum.photos or unsplash placeholder URLs) for now.
- Each image has a subtle hover zoom effect (scale up slightly on hover with smooth transition).
- All gallery images use loading="lazy".

SECTION 3 — "Color Grading" (id="color-grading"):
- Interactive before/after slider comparing a "RAW" image and a "GRADED" image (use two placeholder images for now, styled/filtered differently to simulate raw vs. graded — e.g. apply a CSS filter like grayscale/desaturation to the RAW one and a warm cinematic filter to the GRADED one).
- Implementation: stack the two images absolutely on top of each other; layer an invisible `<input type="range">` on top spanning the container width; use its value to drive a CSS `clip-path: inset(0 X% 0 0)` on the top "GRADED" image so dragging the slider reveals the "RAW" image underneath.
- Include a thin vertical white line at the slider position representing the handle/thumb, and small minimalist text badges reading "RAW" (bottom-left) and "GRADED" (bottom-right) in the corners of the image, using clean uppercase letter-spaced typography.

OVERALL STYLE: cinematic, moody, minimal, dark (blacks/near-blacks with white/light-gray type), generous negative space, elegant sans-serif typography, subtle fade/slide-in scroll animations on section entry. Make it fully responsive across mobile and desktop.

Note: no real assets are attached yet — please use tasteful placeholder video/images throughout so the layout and interactions are fully demonstrable, structured so it's easy for me to swap in my real video and photos later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f18c1145-efcc-4ab6-afba-3c42b1b480e6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
