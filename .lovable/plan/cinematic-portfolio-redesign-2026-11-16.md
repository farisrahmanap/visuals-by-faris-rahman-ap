# Cinematic portfolio redesign

## Outcome
Transform the existing portfolio into a distinctive, motion-led cinematic experience while preserving its real media, content, navigation, and all existing features. The uploaded brief mentions a reference screen recording, but no recording was included with this upload; use the written direction and current brand rules.

## Experience
- Keep the single sequential, audio-controllable Home video and identity introduction intact; refine its editorial typography, hierarchy, contrast, and entrance choreography.
- Redesign the presentation of About, Clubs, Services, Photos, Works, Color Grading, Quotes, and Contact so sections have varied full-width compositions, stronger visual rhythm, and richer media reveals rather than repetitive card layouts.
- Create a standout software motion feature for the six authentic existing software logos plus Alight Motion, with sequenced depth/scale reveals and restrained hover response; use scroll-aware motion only where it remains lightweight and readable.
- Give featured real media stronger editorial emphasis, preserve every image/video's natural proportions, and retain working video players, comparison sliders, links, résumé download, and responsive navigation.

## Motion and accessibility
- Reuse the current intersection-observer motion system and semantic design tokens; build motion with CSS and small React state/observers instead of adding animation dependencies.
- Use purposeful stagger, masked image entrances, text reveals, and section transitions; avoid generic repeated fades, continuous mobile motion, and movement that crops or shifts controls.
- Honor reduced-motion settings, keyboard access, contrast, stable layouts, and mobile performance. Keep existing and newly introduced copy grounded in provided content; do not invent projects, clients, testimonials, or achievements.

## Technical approach
- Update the existing home route and global stylesheet in place, preserving route metadata and all content/media source mappings.
- Use the existing six logo assets; obtain authentic Alight Motion artwork through the project asset flow only if it can be sourced reliably, otherwise do not fabricate a logo.
- Validate the build/preview, then inspect desktop and mobile layouts and key interactions, including the sequential Home player, Works playback, grading sliders, navigation, and reduced-motion behavior.
