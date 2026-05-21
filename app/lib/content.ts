export const profile = {
    name: "Jansen Yan",
    title: "Full Stack Developer",
    tagline:
        "I build accessible, performant web applications from concept to deployment.",
    resumeUrl: "/Jansen_Yan_Resume.pdf",
};

export const socials = [
    { label: "GitHub", href: "https://github.com/jyan500", icon: "github" as const },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jansenyan",
        icon: "linkedin" as const,
    },
    { label: "Email", href: "mailto:jyan500@gmail.com", icon: "mail" as const },
];

export const about: string[] = [
    "I'm a developer who enjoys turning hard problems into simple and intuitive products that make people's lives easier.",
    "Over the past few years, I've worked primarily in smaller company and start up environments, shipping customer-facing features across the full stack.",
    "Outside of development, I am an avid yoyo player and content creator.",
];

export type Experience = {
    date: string;
    role: string;
    company: string;
    url?: string;
    description: string[];
    tech: string[];
};

export const experience: Experience[] = [
    {
        date: "2023 — Present",
        role: "Software Engineer",
        company: "Career Development",
        url: "",
        description:
        [
            "Sharpening AI full stack development skills through independent project work and self-learning."
        ],
        tech: ["TypeScript", "React", "Redux Toolkit", "Node.js", "Express", "Tailwind", "Recharts", "PostgreSQL", "Claude Code"],
    },
    {
        date: "2021 — 2023",
        role: "Software Engineer",
        company: "Rhumbix",
        url: "https://rhumbix.com",
        description:
        [
            "Designed and implemented web and mobile interfaces for construction administration software, saving manual labor for contractors and subcontracting companies."
        ],
        tech: ["TypeScript", "React", "AG Grid", "Python", "Django", "Django Rest Framework", "React Native", "AWS S3", "LaunchDarkly", "Docker", "Travis CI", "PostgreSQL"],
    },
    {
        date: "2018 — 2021",
        role: "Software Engineer",
        company: "Home Campus",
        url: "https://homecampus.com",
        description:
        [
            "Rebuilt the core high school athletics registration platform to streamline student athletics registration and administrative approval workflows.",
           
        ],
        tech: ["PHP", "Laravel", "Vue", "JQuery", "Ionic", "Angular", "MySQL", "AWS S3"],
    },
];

export type Project = {
    title: string;
    description: string;
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
        github: "https://github.com/jyan500/resume-parser",
        imageAlt: "Screenshot of the CVSquared Editor Page.",
        imageSrc: "/cvsquared.png",
    },
    {
        title: "Kanban — Project Management System",
        description:
            "Project management application inspired by Jira, fully featured with drag and drop kanban board, inline editable tickets, advanced search features, ticket and sprint scheduling, and AI comment thread summarization tool.",
        tech: ["TypeScript", "Node.js", "Express", "Redux Toolkit", "React", "Recharts", "PostgreSQL", "Tailwind"],
        href: "https://kanban-board-k0uf.onrender.com/",
        github: "https://github.com/jyan500/kanban-board",
        imageAlt: "Screenshot of the Kanban board application",
        imageSrc: "/kanban-board.png",
    },
    {
        title: "YTMusic Browser Player — Chrome Extension Music Player",
        description:
            "A chrome extension that allows playback and downloads for your saved music and playlists from your Youtube Music Library.",
        tech: ["Manifest V3", "React", "YtMusicAPI", "Pytubefix", "Tailwind"],
        href: "https://github.com/jyan500/ytmusic-browser-player",
        github: "https://github.com/jyan500/ytmusic-browser-player",
        imageAlt: "Screenshot of the YtMusicBrowser Player",
        imageSrc: "/ytmusic-browser-player.png",
    },
];
