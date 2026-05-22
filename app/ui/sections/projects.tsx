import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaYoutube } from "react-icons/fa6";

export type Project = {
    title: string;
    description: React.ReactNode | string;
    tech: string[];
    href?: string;
    github?: string;
    imageAlt: string;
    imageSrc: string;
};

export const projects: Project[] = [
    {
        title: "CVSquared — Resume Writing Tool for Job Seekers",
        description:
            "Upload a PDF or DOCX resume, edit every section in a structured editor with a live PDF preview, and tailor it to any job description using AI.",
        tech: ["Next.js", "React", "Redux Toolkit", "Python", "Flask", "Tailwind", "OpenAI", "Gemini", "Cloudflare Turnstile"],
        href: "https://cvsquared.pages.dev",
        source: "https://github.com/jyan500/resume-parser",
        imageAlt: "Screenshot of the CVSquared Editor Page.",
        imageSrc: "/cvsquared.png",
    },
    {
        title: "Kanban — Project Management System",
        description:
            "Project management application inspired by Jira, fully featured with drag and drop kanban board, inline editable tickets, advanced search features, ticket and sprint scheduling, and AI comment thread summarization tool.",
        tech: ["TypeScript", "Node.js", "Express", "Redux Toolkit", "React", "Recharts", "PostgreSQL", "Tailwind"],
        href: "https://kanban-board-k0uf.onrender.com/",
        source: "https://github.com/jyan500/kanban-board",
        imageAlt: "Screenshot of the Kanban board application",
        imageSrc: "/kanban-board.png",
    },
    {
        title: "YTMusic Browser Player — Chrome Extension Music Player",
        description:
            "A chrome extension that allows playback and downloads for your saved music and playlists from your Youtube Music Library.",
        tech: ["Manifest V3", "React", "YTMusicAPI", "Pytubefix", "Tailwind"],
        href: "https://github.com/jyan500/ytmusic-browser-player",
        source: "https://github.com/jyan500/ytmusic-browser-player",
        imageAlt: "Screenshot of the YtMusicBrowser Player",
        imageSrc: "/ytmusic-browser-player.png",
    },
    {
        title: "Yoyo Player and Content Creator",
        description: <p>Specializing in tutorial based content for yoyo players, breaking down complex tricks in an understandable manner.</p>,
        tech: ["Video Editing", "Youtube", "Education"],
        href: "https://youtube.com/@jyanyoyo",
        source: "https://youtube.com/@jyanyoyo",
        imageAlt: "Top down view of yoyo trick",
        imageSrc: "/yoyo.jpg",
    },
];

interface SourceProps {
    item: Project
}

const Source = ({item}: SourceProps) => {
    const getSourceIcon = (source: string) => {
        if (source.includes("github")){
            return (
                <>
                    <FaGithub className = "h-4 w-4" aria-hidden = "true"/> 
                    <span>Source</span>
                </>
            )
        }
        else if (source.includes("youtube")){
            return (
            <>
                <FaYoutube className = "h-4 w-4" aria-hidden = "true"/>
                <span>Youtube</span>
            </>)
        }
        // default to github
        return (
            <>
                <FaGithub className = "h-4 w-4" aria-hidden = "true"/> 
                <span>Source</span>
            </>
        )
    }

    return (
        <div className="mt-2">
            <a
                href={item.source}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${item.title} source on GitHub (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 text-sm text-muted-light hover:text-accent focus-visible:text-accent transition-colors"
            >
                {getSourceIcon(item.source)}
            </a>
        </div>
    )
}

function TechTag({ children }: { children: React.ReactNode }) {
    return (
        <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {children}
            </div>
        </li>
    );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative aspect-video w-full overflow-hidden rounded border-2 border-navy-lighter/60 transition group-hover:border-accent/40">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 640px) 200px, 100vw"
                className="object-cover"
            />
        </div>
    );
}

function ProjectItem({ item }: { item: Project }) {
    const primaryHref = item.href ?? item.source;
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
                    {typeof item.description === "string" ? (
                        <p className="mt-2 text-sm leading-normal">{item.description}</p>
                    ) : (
                        <div className="mt-2 text-sm leading-normal">{item.description}</div>
                    )}
                    {item.source && item.href && (
                        <Source item={item}/> 
                    )}
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {item.tech.map((t) => (
                            <TechTag key={t}>{t}</TechTag>
                        ))}
                    </ul>
                </div>
                <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                    <ProjectImage src={item.imageSrc} alt={item.imageAlt} />
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
