import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import heroVideo from "@/assets/For_Portfolio.mp4.asset.json";
import secondHeroVideo from "@/assets/0922_1.mp4.asset.json";
import gradedStyle2 from "@/assets/graded-style-2.jpg.asset.json";
import gradedStyle3 from "@/assets/graded-style-3.jpg.asset.json";
import gradedStyle4 from "@/assets/graded-style-4.jpg.asset.json";
import gradedStyle5 from "@/assets/graded-style-5.jpg.asset.json";
import gradedStyle6 from "@/assets/graded-style-6.jpg.asset.json";
import rawStyle2 from "@/assets/raw-style-2.jpg.asset.json";
import rawStyle3 from "@/assets/raw-style-3.jpg.asset.json";
import rawStyle4 from "@/assets/raw-style-4.jpg.asset.json";
import rawStyle5 from "@/assets/raw-style-5.jpg.asset.json";
import rawStyle6 from "@/assets/raw-style-6.jpg.asset.json";
import galleryLantern from "@/assets/gallery-lantern.jpg.asset.json";
import galleryMountainSunset from "@/assets/gallery-mountain-sunset.jpg.asset.json";
import galleryDomeCeiling from "@/assets/gallery-dome-ceiling.jpg.asset.json";
import galleryMosqueInterior from "@/assets/gallery-mosque-interior.jpg.asset.json";
import galleryHangingLamp from "@/assets/gallery-hanging-lamp.jpg.asset.json";
import galleryMistyTeaHills from "@/assets/gallery-misty-tea-hills.jpg.asset.json";
import galleryHumayunTomb from "@/assets/gallery-humayun-tomb.jpg.asset.json";
import galleryIndiaGate from "@/assets/gallery-india-gate.jpg.asset.json";
import galleryTajMahal from "@/assets/gallery-taj-mahal.jpg.asset.json";
import galleryModernArchitecture from "@/assets/gallery-modern-architecture.jpg.asset.json";
import galleryForestRoad from "@/assets/gallery-forest-road.jpg.asset.json";
import galleryCloudyBuilding from "@/assets/gallery-cloudy-building.jpg.asset.json";
import gallerySunsetBoat from "@/assets/gallery-sunset-boat.jpg.asset.json";
import galleryShoreRocks from "@/assets/gallery-shore-rocks.jpg.asset.json";
import galleryBeachShell from "@/assets/gallery-beach-shell.jpg.asset.json";
import galleryShellInHand from "@/assets/gallery-shell-in-hand.jpg.asset.json";
import galleryTeaHillTrees from "@/assets/gallery-tea-hill-trees.jpg.asset.json";
import galleryTeaValley from "@/assets/gallery-tea-valley.jpg.asset.json";
import galleryButterflyDisplay from "@/assets/gallery-butterfly-display.jpg.asset.json";
import galleryStormyMountain from "@/assets/gallery-stormy-mountain.jpg.asset.json";

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

/* ---------- SWAP YOUR REAL ASSETS HERE ---------- */
const HERO_VIDEO_SRC = heroVideo.url;
const SECOND_HERO_VIDEO_SRC = secondHeroVideo.url;

const PHOTOS = [
  { src: galleryLantern.url, alt: "Hanging lantern silhouetted against a mountain sunset" },
  { src: galleryMountainSunset.url, alt: "Layered mountain landscape beneath a dramatic sunset sky" },
  { src: galleryDomeCeiling.url, alt: "Symmetrical ornamental dome and ceiling viewed from below" },
  { src: galleryMosqueInterior.url, alt: "Grand mosque interior with decorated columns and dome" },
  { src: galleryHangingLamp.url, alt: "Mosaic hanging lamp beneath an ornate dome" },
  { src: galleryMistyTeaHills.url, alt: "Misty green tea plantation rolling across the hills" },
  { src: galleryHumayunTomb.url, alt: "Humayun's Tomb entrance beneath a clear blue sky" },
  { src: galleryIndiaGate.url, alt: "India Gate framed by a broad cloud-filled sky" },
  { src: galleryTajMahal.url, alt: "Taj Mahal framed by trees and gardens" },
  { src: galleryModernArchitecture.url, alt: "Modern angular building reflecting an evening sky" },
  { src: galleryForestRoad.url, alt: "Rain-soaked forest road with reflections in muddy puddles" },
  { src: galleryCloudyBuilding.url, alt: "Palm-framed building beneath a dramatic cloudy sky" },
  { src: gallerySunsetBoat.url, alt: "Fishing boat crossing the water beneath a hazy sunset" },
  { src: galleryShoreRocks.url, alt: "Sea washing between moss-covered boulders on the beach" },
  { src: galleryBeachShell.url, alt: "Seashell resting on sand beside the ocean" },
  { src: galleryShellInHand.url, alt: "Seashell held against a coastal shoreline" },
  { src: galleryTeaHillTrees.url, alt: "Cluster of trees on a sunlit tea plantation hill" },
  { src: galleryTeaValley.url, alt: "Rolling tea fields and distant mountains in morning light" },
  { src: galleryButterflyDisplay.url, alt: "Pink butterfly display inside a shopping gallery" },
  { src: galleryStormyMountain.url, alt: "Storm clouds breaking over a mountain valley at sunset" },
];

const COLOR_GRADES = [
  {
    raw: rawStyle2.url,
    graded: gradedStyle2.url,
    alt: "Mountain swing overlooking misty hills",
    orientation: "portrait",
  },
  {
    raw: rawStyle3.url,
    graded: gradedStyle3.url,
    alt: "Illuminated observation wheel at dusk",
    orientation: "portrait",
  },
  {
    raw: rawStyle4.url,
    graded: gradedStyle4.url,
    alt: "Tea plantation and hilltop trees",
    orientation: "portrait",
  },
  {
    raw: rawStyle5.url,
    graded: gradedStyle5.url,
    alt: "Tea-covered hills beneath mountain peaks",
    orientation: "landscape",
  },
  {
    raw: rawStyle6.url,
    graded: gradedStyle6.url,
    alt: "Car beside a mountain tea plantation",
    orientation: "portrait",
  },
] as const;
/* ------------------------------------------------ */

const NAV = [
  { href: "#video", label: "Video" },
  { href: "#photos", label: "Photos" },
  { href: "#color-grading", label: "Color Grading" },
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
        <a href="#video" className="truncate text-xs font-semibold tracking-[0.35em] uppercase">
          Faris Rahman
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

function Hero() {
  return (
    <section id="video" className="bg-background">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-6 text-[10px] tracking-[0.5em] text-muted-foreground uppercase sm:text-xs">
            Video Editor · Photographer
          </p>
          <h1 className="hero-title">
            <span className="hero-title-primary">FARIS</span>
            <span className="hero-title-secondary">RAHMAN</span>
          </h1>
          <span className="hero-divider" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Visuals driven by editing, lighting, and color.
          </p>
        </div>
        <a
          href="#video-two"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Next video
        </a>
      </div>

      <div id="video-two" className="relative flex min-h-screen items-end overflow-hidden">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={SECOND_HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero-atmosphere" aria-hidden="true" />
        <p className="relative z-10 mb-10 ml-5 text-[10px] tracking-[0.35em] text-muted-foreground uppercase sm:mb-14 sm:ml-10">
          Film 02
        </p>
      </div>
    </section>
  );
}

function Photos() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section id="photos" ref={reveal.ref} className={`${reveal.className} bg-background px-5 py-28 sm:py-40`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Photos</h2>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Selected stills — travel, portrait and available-light work.
        </p>
        <div className="masonry mt-14">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="photo-card">
              <img src={p.src} alt={p.alt} loading="lazy" />
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
    <figure className={`compare ${orientation === "landscape" ? "compare-landscape" : "compare-portrait"}`}>
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
        <h2 className="section-title">Color Grading</h2>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Drag to compare the untouched capture with the final cinematic grade.
        </p>

        <div className="grade-grid mt-14">
          {COLOR_GRADES.map((comparison) => (
            <GradeComparison key={comparison.raw} {...comparison} />
          ))}
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
        <Photos />
        <ColorGrading />
      </main>
      <footer className="border-t border-border/60 px-5 py-10 text-center text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Faris Rahman
      </footer>
    </div>
  );
}
