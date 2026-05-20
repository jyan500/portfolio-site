"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export function Nav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center py-3 focus-visible:outline-none"
              >
                <span
                  className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                    isActive
                      ? "w-16 bg-heading"
                      : "w-8 bg-muted group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-heading"
                      : "text-muted group-hover:text-heading group-focus-visible:text-heading"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
