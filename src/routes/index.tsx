import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Facebook, Instagram, Youtube } from "lucide-react";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Faris Rahman — Video Editor & Photographer" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Faris Rahman: film editing, photography stills and color grading work.",
      },
      { property: "og:title", content: "Faris Rahman — Video Editor & Photographer" },
      {
        property: "og:description",
        content:
          "Cinematic portfolio of Faris Rahman: film editing, photography stills and color grading work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ---------- MEDIA ---------- */
// Small media ships inside the site (public/media) so any static host
// (Vercel, Netlify, ...) serves it. The three largest videos exceed the
// repository file limit, so they stream from the Lovable CDN instead.
const CDN = "https://id-preview--f18c1145-efcc-4ab6-afba-3c42b1b480e6.lovable.app/__l5e/assets-v1";
const HERO_VIDEO_SRC = `${CDN}/925b57d9-b977-43ab-8f12-a86478ed9759/For_Portfolio.mp4`;
const SECOND_HERO_VIDEO_SRC = `${CDN}/3e354364-dc40-4d76-ac10-13d8af64b57c/0922_1.mp4`;
const WORKS_VIDEO_1006_SRC = `${CDN}/1e484aff-e292-4f31-a18a-86a9a2832fa9/1006.mp4`;
const WORKS_VIDEO_1006_1_SRC = "/media/1006_1.mp4";

const media = (name: string) => `/media/${name}`;

const PHOTOS = [
  { title: "Lantern at Dusk", src: media("gallery-lantern.jpg"), alt: "Hanging lantern silhouetted against a mountain sunset" },
  { title: "Ridges on Fire", src: media("gallery-mountain-sunset.jpg"), alt: "Layered mountain landscape beneath a dramatic sunset sky" },
  { title: "The Inner Dome", src: media("gallery-dome-ceiling.jpg"), alt: "Symmetrical ornamental dome and ceiling viewed from below" },
  { title: "Hall of Columns", src: media("gallery-mosque-interior.jpg"), alt: "Grand mosque interior with decorated columns and dome" },
  { title: "Mosaic Light", src: media("gallery-hanging-lamp.jpg"), alt: "Mosaic hanging lamp beneath an ornate dome" },
  { title: "Mist Over Tea", src: media("gallery-misty-tea-hills.jpg"), alt: "Misty green tea plantation rolling across the hills" },
  { title: "Gate of Humayun", src: media("gallery-humayun-tomb.jpg"), alt: "Humayun's Tomb entrance beneath a clear blue sky" },
  { title: "Under the Arch", src: media("gallery-india-gate.jpg"), alt: "India Gate framed by a broad cloud-filled sky" },
  { title: "Marble Elegy", src: media("gallery-taj-mahal.jpg"), alt: "Taj Mahal framed by trees and gardens" },
  { title: "Glass Evening", src: media("gallery-modern-architecture.jpg"), alt: "Modern angular building reflecting an evening sky" },
  { title: "After the Rain", src: media("gallery-forest-road.jpg"), alt: "Rain-soaked forest road with reflections in muddy puddles" },
  { title: "Palms and Thunder", src: media("gallery-cloudy-building.jpg"), alt: "Palm-framed building beneath a dramatic cloudy sky" },
  { title: "Last Boat Home", src: media("gallery-sunset-boat.jpg"), alt: "Fishing boat crossing the water beneath a hazy sunset" },
  { title: "Stone and Tide", src: media("gallery-shore-rocks.jpg"), alt: "Sea washing between moss-covered boulders on the beach" },
  { title: "Shell on Sand", src: media("gallery-beach-shell.jpg"), alt: "Seashell resting on sand beside the ocean" },
  { title: "Held by the Sea", src: media("gallery-shell-in-hand.jpg"), alt: "Seashell held against a coastal shoreline" },
  { title: "Hilltop Sentinels", src: media("gallery-tea-hill-trees.jpg"), alt: "Cluster of trees on a sunlit tea plantation hill" },
  { title: "Morning Valley", src: media("gallery-tea-valley.jpg"), alt: "Rolling tea fields and distant mountains in morning light" },
  { title: "Pink Wings", src: media("gallery-butterfly-display.jpg"), alt: "Pink butterfly display inside a shopping gallery" },
  { title: "Storm Breaks", src: media("gallery-stormy-mountain.jpg"), alt: "Storm clouds breaking over a mountain valley at sunset" },
];

const COLOR_GRADES = [
  {
    raw: media("raw-style-2.jpg"),
    graded: media("graded-style-2.jpg"),
    alt: "Mountain swing overlooking misty hills",
    orientation: "portrait",
  },
  {
    raw: media("raw-style-3.jpg"),
    graded: media("graded-style-3.jpg"),
    alt: "Illuminated observation wheel at dusk",
    orientation: "portrait",
  },
  {
    raw: media("raw-hilltop-trees.jpg"),
    graded: media("graded-style-4.jpg"),
    alt: "Tea plantation and hilltop trees",
    orientation: "portrait",
  },
  {
    raw: media("raw-tea-valley.jpg"),
    graded: media("graded-style-5.jpg"),
    alt: "Tea-covered hills beneath mountain peaks",
    orientation: "landscape",
  },
  {
    raw: media("raw-car-plantation.jpg"),
    graded: media("graded-style-6.jpg"),
    alt: "Car beside a mountain tea plantation",
    orientation: "portrait",
  },
] as const;
/* ------------------------------------------------ */

function Whatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#photos", label: "Photos" },
  { href: "#works", label: "Works" },
  { href: "#color-grading", label: "Color Grading" },
];

const CONNECT = [
  { label: "YouTube", href: "https://www.youtube.com/@farisrahmanap", icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/faris.rahman.ap/", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/faris_rahman_ap", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/919037228774", icon: Whatsapp },
];


function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setShown(true);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, className: shown ? "reveal is-visible" : "reveal" };
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
        <a href="#home" className="truncate text-xs font-semibold tracking-[0.35em] uppercase">
          Faris Rahman<span className="text-accent-red">.</span>
        </a>
        <ul className="flex shrink-0 items-center gap-4 text-[10px] tracking-[0.2em] uppercase sm:gap-8 sm:text-xs">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="nav-link text-muted-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* ---------- WORKS SHOWN AS SEPARATE PLAYERS BELOW THE HERO ---------- */
const WORKS = [
  { src: SECOND_HERO_VIDEO_SRC, orientation: "landscape", title: "Showreel", category: "Film Edit · Color" },
  { src: HERO_VIDEO_SRC, orientation: "portrait", title: "Portfolio Cut", category: "Vertical Edit · Color" },
  { src: WORKS_VIDEO_1006_SRC, orientation: "portrait", title: "Frames in Motion", category: "Short-Form Edit" },
  { src: WORKS_VIDEO_1006_1_SRC, orientation: "portrait", title: "Rhythm Study", category: "Short-Form Edit" },
] as const;

const SERVICES = [
  ["Feature Film & Short-Form Editing", "Story-first cuts with deliberate pacing, from long-form narratives to vertical reels."],
  ["Cinematic Color Grading", "Mood-driven grades in DaVinci Resolve that give every frame a consistent emotional tone."],
  ["Photography & Visual Storytelling", "Travel, landscape and portrait stills composed around light and atmosphere."],
  ["Motion Design & Visual Finishing", "Titles, transitions and polish in After Effects to complete the final picture."],
  ["Creative Direction", "Shaping the look, rhythm and feel of a project from first idea to final export."],
] as const;

function Lines({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={l} className={`split-line ${className}`}>
          <span style={{ transitionDelay: `${i * 110}ms` }}>{l}</span>
        </span>
      ))}
    </>
  );
}

function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [ready, setReady] = useState(false);
  const videos = [SECOND_HERO_VIDEO_SRC, HERO_VIDEO_SRC];
  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section id="home" className={`bg-background ${ready ? "is-visible" : ""}`}>
      <div className="relative flex min-h-screen items-end overflow-hidden px-5 pt-28 pb-16 sm:pb-24">
        <video
          key={activeVideo}
          className="hero-video"
          src={videos[activeVideo]}
          autoPlay
          muted={isMuted}
          controls
          playsInline
          onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
          onEnded={() => setActiveVideo((current) => (current + 1) % videos.length)}
        />
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="eyebrow stagger" style={{ transitionDelay: "0ms" }}>
            Faris Rahman — Video Editor · Photographer · Color Grader
          </p>
          <h1 className="display-title mt-6">
            <Lines lines={["I don't just", "create content."]} />
            <Lines lines={["I create feelings", "that last."]} className="text-accent-red" />
          </h1>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="stagger max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base" style={{ transitionDelay: "500ms" }}>
              Every frame has a purpose. Every cut has a rhythm. Every story deserves to be felt.
            </p>
            <p className="stagger text-[10px] tracking-[0.4em] text-muted-foreground uppercase sm:text-xs" style={{ transitionDelay: "650ms" }}>
              Shoot. Edit. Grade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ index, title, sub }: { index: string; title: string; sub: string }) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="section-title">
        <span className="mr-4 align-top text-xs font-medium tracking-[0.3em] text-accent-red">{index}</span>
        {title}
      </h2>
      <p className="max-w-sm text-sm text-muted-foreground">{sub}</p>
    </div>
  );
}

function Services() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section id="services" ref={reveal.ref} className={`${reveal.className} bg-background px-5 py-28 sm:py-40`}>
      <div className="mx-auto max-w-6xl">
        <SectionHead index="02" title="What I Do" sub="A complete visual pipeline — from the shoot to the final grade." />
        <ol>
          {SERVICES.map(([name, desc], i) => (
            <li key={name} className="service-row stagger" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="text-xs tracking-[0.3em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="service-name">{name}</h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">{desc}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">→</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Works() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section id="works" ref={reveal.ref} className={`${reveal.className} bg-background px-5 py-28 sm:py-40`}>
      <div className="mx-auto max-w-6xl">
        <SectionHead index="04" title="Works" sub="Selected films — press play and turn the sound on." />
        <div className="mt-14 grid items-start gap-8 min-[560px]:grid-cols-2 sm:gap-10 lg:gap-12">
          {WORKS.map((work, index) => (
            <figure key={work.src} className="work-card stagger min-w-0" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`work-frame${work.orientation === "portrait" ? " work-frame-portrait" : ""}`}>
                <video
                  src={`${work.src}#t=0.5`}
                  className="work-video"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={work.title}
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-4 p-5">
                <span>
                  <span className="block text-[10px] tracking-[0.35em] text-accent-red uppercase">{work.category}</span>
                  <span className="mt-2 block text-lg font-bold tracking-tight uppercase">{work.title}</span>
                </span>
                <span className="text-xs tracking-[0.3em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Photos() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section id="photos" ref={reveal.ref} className={`${reveal.className} bg-background px-5 py-28 sm:py-40`}>
      <div className="mx-auto max-w-6xl">
        <SectionHead index="03" title="Photos" sub="Selected stills — travel, architecture and available-light work." />
        <div className="masonry mt-14">
          {PHOTOS.map((p, i) => (
            <figure key={p.src} className="photo-card stagger" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
              <figcaption className="photo-caption">
                <span className="text-[10px] tracking-[0.3em] text-accent-red">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold tracking-wide uppercase">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GradeComparison({
  raw,
  graded,
  alt,
  orientation,
}: (typeof COLOR_GRADES)[number]) {
  const [value, setValue] = useState(55);

  return (
    <figure className={`compare stagger ${orientation === "landscape" ? "compare-landscape" : "compare-portrait"}`}>
      <img src={raw} alt={`RAW — ${alt}`} loading="lazy" className="compare-img raw" />
      <img
        src={graded}
        alt={`Color graded — ${alt}`}
        loading="lazy"
        className="compare-img graded"
        style={{ clipPath: `inset(0 0 0 ${value}%)` }}
      />
      <span className="compare-line" style={{ left: `${value}%` }} aria-hidden="true" />
      <span className="badge left-4 sm:left-6">Raw</span>
      <span className="badge right-4 sm:right-6">Graded</span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        aria-label={`Compare RAW and graded versions of ${alt}`}
        onChange={(e) => setValue(Number(e.target.value))}
        className="compare-range"
      />
    </figure>
  );
}

function ColorGrading() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section
      id="color-grading"
      ref={reveal.ref}
      className={`${reveal.className} bg-background px-5 pb-32 sm:pb-44`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHead index="05" title="Color Grading" sub="Drag to compare the untouched capture with the final cinematic grade." />

        <div className="grade-grid mt-14">
          {COLOR_GRADES.map((comparison) => (
            <GradeComparison key={comparison.raw} {...comparison} />
          ))}
        </div>
      </div>
    </section>
  );
}

const BIO = {
  name: "Faris Rahman A P",
  roles: ["Video Editor", "Photographer", "Color Grader", "Cinematographer"],
  tools: [
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "CapCut",
    "Adobe Photoshop",
    "Adobe After Effects",
  ],
  background:
    "Mechanical Engineering student at T.K.M. College of Engineering, Kollam, Kerala.",
  involvement: "Contributes to the media wing of the Civil Service Aspirants Club.",
};

function About() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section
      id="about"
      ref={reveal.ref}
      className={`${reveal.className} bg-background px-5 py-28 sm:py-40`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHead index="01" title="About" sub="Video editor, photographer and color grader based in Kerala." />
        <div className="mt-12 grid gap-12 sm:mt-16 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:gap-16">
          <figure className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden border border-border/60">
              <img
                src={media("portrait-faris.jpg")}
                alt="Portrait of Faris Rahman at golden hour"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption className="mt-6 text-center text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
              Faris Rahman
            </figcaption>
          </figure>
          <div>
            <p className="bio-name">{BIO.name}</p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {BIO.roles.map((role) => (
                <li key={role} className="bio-role">
                  {role}
                </li>
              ))}
            </ul>
            <div className="bio-grid mt-16 sm:mt-24">
              <div>
                <p className="bio-label">Tools</p>
                <ul className="mt-2">
                  {BIO.tools.map((tool) => (
                    <li key={tool} className="bio-item">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="bio-label">Background</p>
                <p className="bio-text mt-4">{BIO.background}</p>
                <p className="bio-label mt-10">Involvement</p>
                <p className="bio-text mt-4">{BIO.involvement}</p>
              </div>
            </div>
            <p className="bio-label mt-10">Connect</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {CONNECT.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noreferrer" className="connect-link">
                    <c.icon className="h-4 w-4" aria-hidden="true" />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Photos />
        <Works />
        <ColorGrading />
      </main>
      <footer className="border-t border-border/60 px-5 py-10 text-center">
        <ul className="mb-6 flex justify-center gap-8">
          {CONNECT.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                aria-label={c.label}
                className="connect-link"
              >
                <c.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Faris Rahman
        </p>
      </footer>
    </div>
  );
}

