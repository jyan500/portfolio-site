import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, type Project } from "@/app/lib/content";

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
        {children}
      </div>
    </li>
  );
}

function ProjectPlaceholder({
  alt,
  gradient,
}: {
  alt: string;
  gradient: [string, string];
}) {
  const [from, to] = gradient;
  return (
    <div
      role="img"
      aria-label={alt}
      className="aspect-video w-full rounded border-2 border-navy-lighter/60 transition group-hover:border-accent/40"
      style={{
        backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
    />
  );
}

function ProjectItem({ item }: { item: Project }) {
  const primaryHref = item.href ?? item.github;
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:drop-shadow-lg" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            {primaryHref ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${item.title} (opens in a new tab)`}
                className="group/link inline-flex items-baseline gap-1 text-base font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent transition-colors"
              >
                <span>{item.title}</span>
                <ArrowUpRight
                  className="ml-0.5 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <span className="text-base font-medium leading-tight text-heading">
                {item.title}
              </span>
            )}
          </h3>
          <p className="mt-2 text-sm leading-normal">{item.description}</p>
          {item.github && item.href && (
            <div className="mt-2">
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${item.title} source on GitHub (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 text-sm text-muted-light hover:text-accent focus-visible:text-accent transition-colors"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                <span>Source</span>
              </a>
            </div>
          )}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {item.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </ul>
        </div>
        <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
          <ProjectPlaceholder alt={item.imageAlt} gradient={item.imageGradient} />
        </div>
      </div>
    </li>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">
          Projects
        </h2>
      </div>
      <ol className="group/list">
        {projects.map((p) => (
          <ProjectItem key={p.title} item={p} />
        ))}
      </ol>
    </section>
  );
}
