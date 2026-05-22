import { ArrowRight, ArrowUpRight } from "lucide-react";
import { RESUME_URL } from "@/app/lib/constants"
import { TechTag } from "@/app/ui/components/TechTag"

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
        role: "Software Engineer",
        company: "Career Development",
        url: "",
        description: "Sharpening full stack development and AI skills through independent project work and self-learning.",
        tech: ["TypeScript", "React", "Redux Toolkit", "Node.js", "Express", "Tailwind", "Recharts", "PostgreSQL", "Claude Code"],
    },
    {
        date: "2021 — 2023",
        role: "Software Engineer",
        company: "Rhumbix",
        url: "https://rhumbix.com",
        description: "Designed and implemented web and mobile features for construction administration software, saving manual labor for contractors and subcontractors.",
        tech: ["TypeScript", "React", "AG Grid", "Python", "Django", "Django Rest Framework", "React Native", "AWS S3", "LaunchDarkly", "Docker", "Travis CI", "PostgreSQL"],
    },
    {
        date: "2018 — 2021",
        role: "Software Engineer",
        company: "Home Campus",
        url: "https://homecampus.com",
        description: "Designed and implemented web and mobile features for high school athletics administration software, streamlining student athletics registration and administrative workflows.",
        tech: ["PHP", "Laravel", "Vue", "JQuery", "Ionic", "Angular", "MySQL", "AWS S3"],
    },
];

function ExperienceItem({ item }: { item: Experience }) {
  const hasUrl = Boolean(item.url);
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_#233554] lg:group-hover:drop-shadow-lg" />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2"
          aria-label={item.date}
        >
          {item.date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-heading">
            {hasUrl ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${item.role} at ${item.company} (opens in a new tab)`}
                className="group/link inline-flex items-baseline gap-1 text-heading hover:text-accent focus-visible:text-accent transition-colors"
              >
                <span>
                  {item.role} ·{" "}
                  <span className="inline-block">{item.company}</span>
                </span>
                <ArrowUpRight
                  className="ml-0.5 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <span>
                {item.role} ·{" "}
                <span className="inline-block">{item.company}</span>
              </span>
            )}
          </h3>
          <p className = "text-decoration mt-2 text-sm leading-normal">
            {item.description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {item.tech.map((t, i) => (
                <li key={`tech_${t}_i`} className="mr-1.5 mt-2">
                    <TechTag>{t}</TechTag>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">
          Experience
        </h2>
      </div>
      <ol className="group/list">
        {experience.map((item) => (
          <ExperienceItem key={`${item.company}-${item.date}`} item={item} />
        ))}
      </ol>
      <div className="mt-12">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-heading hover:text-accent focus-visible:text-accent transition-colors"
        >
          <span>
            View Full <span className="sr-only">résumé</span>
            <span aria-hidden="true">Résumé</span>
          </span>
          <ArrowRight
            className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
