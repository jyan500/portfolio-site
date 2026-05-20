export const profile = {
  name: "Jansen Yan",
  title: "Full Stack Developer",
  tagline:
    "I build accessible, performant web applications from concept to deployment.",
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/jyan500", icon: "github" as const },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/",
    icon: "linkedin" as const,
  },
  { label: "Email", href: "mailto:jyan500@gmail.com", icon: "mail" as const },
];

export const about: string[] = [
  "I'm a developer who enjoys turning hard problems into simple, usable products. My focus is the seam between thoughtful UX and the systems that make it feel effortless — building interfaces that load fast, behave predictably, and stay maintainable as they grow.",
  "Over the past few years I've shipped customer-facing dashboards, internal tools, and end-to-end features across the stack — TypeScript on the front end, Node and Python services on the back, and Postgres for the parts that have to be right.",
  "When I'm not coding, you'll find me running, sketching small game prototypes, or working through a stack of new albums.",
];

export type Experience = {
  date: string;
  role: string;
  company: string;
  url?: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    date: "2023 — Present",
    role: "Senior Full Stack Developer",
    company: "Acme Studio",
    url: "https://example.com",
    description:
      "Lead the build of a multi-tenant analytics platform serving thousands of seats. Drove a migration from a Rails monolith to a Next.js + tRPC architecture, shaved page loads by 60%, and mentor two junior engineers on code review and design tradeoffs.",
    tech: ["TypeScript", "Next.js", "tRPC", "PostgreSQL", "Tailwind", "AWS"],
  },
  {
    date: "2021 — 2023",
    role: "Full Stack Developer",
    company: "Northwind Labs",
    url: "https://example.com",
    description:
      "Owned the customer onboarding experience end-to-end: form flows, identity verification, and a self-serve admin console. Partnered with design to ship a refreshed UI system used across five products.",
    tech: ["React", "Node.js", "GraphQL", "MongoDB", "Stripe"],
  },
  {
    date: "2019 — 2021",
    role: "Software Engineer",
    company: "Blue Heron Co.",
    url: "https://example.com",
    description:
      "Built internal tooling for the operations team — CSV ingestion pipelines, role-based dashboards, and a search index over millions of records. Wrote the first end-to-end test suite the team had ever had.",
    tech: ["Python", "Django", "Vue", "Elasticsearch", "Docker"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
  imageAlt: string;
  // Visual placeholder: two CSS gradient stops. Replace with a real screenshot in /public.
  imageGradient: [string, string];
};

export const projects: Project[] = [
  {
    title: "Beacon — Realtime Status Board",
    description:
      "An open-source status page for small teams. Push events from any service, get a clean public timeline, an incident feed, and Slack/email subscribers — all under your own domain.",
    tech: ["Next.js", "PostgreSQL", "Redis", "Tailwind"],
    href: "https://example.com",
    github: "https://github.com/jyan500",
    imageAlt: "Screenshot of the Beacon status board dashboard.",
    imageGradient: ["#0e7c66", "#0a192f"],
  },
  {
    title: "Tilemap Studio",
    description:
      "A browser-based 2D tilemap editor I built for a game jam and then kept improving. Layered tiles, animation strips, and export to JSON or PNG. Used by ~400 hobbyist devs.",
    tech: ["TypeScript", "Canvas API", "Zustand", "Vite"],
    href: "https://example.com",
    github: "https://github.com/jyan500",
    imageAlt: "Screenshot of the Tilemap Studio editor canvas.",
    imageGradient: ["#1e3a8a", "#0a192f"],
  },
  {
    title: "Cantrip CLI",
    description:
      "A tiny CLI for scaffolding new Node services from a shared template. Bundles linting, tests, CI, and a Docker setup so I never have to do that yawn-inducing first hour again.",
    tech: ["Node.js", "Commander", "GitHub Actions"],
    github: "https://github.com/jyan500",
    imageAlt: "Screenshot of the Cantrip CLI running in a terminal.",
    imageGradient: ["#7c3aed", "#0a192f"],
  },
  {
    title: "This Site",
    description:
      "The site you're looking at now — Next.js 16, React 19, Tailwind v4. Designed in a single split layout, accessible nav with scroll-spy, and zero client JS outside of what's needed for the active section indicator.",
    tech: ["Next.js", "React", "Tailwind v4", "TypeScript"],
    github: "https://github.com/jyan500",
    imageAlt: "Screenshot of this portfolio site.",
    imageGradient: ["#0f766e", "#0a192f"],
  },
];
