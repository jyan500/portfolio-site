import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: Mail,
    youtube: FaYoutube,
} as const;

export const socials = [
    { label: "GitHub", href: "https://github.com/jyan500", icon: "github" as const },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jansenyan",
        icon: "linkedin" as const,
    },
    { label: "Youtube", href: "https://youtube.com/@jyanyoyo", icon: "youtube" as const },
    { label: "Email", href: "mailto:jyan500@gmail.com", icon: "mail" as const },
];

export function SocialLinks() {
    return (
        <ul
            className="ml-1 mt-8 flex items-center gap-5"
            aria-label="Social media"
        >
            {socials.map((s) => {
                const Icon = iconMap[s.icon];
                const isMail = s.href.startsWith("mailto:");
                return (
                    <li key={s.label}>
                        <a
                            href={s.href}
                            target={isMail ? undefined : "_blank"}
                            rel={isMail ? undefined : "noreferrer noopener"}
                            aria-label={`${s.label}${isMail ? "" : " (opens in a new tab)"}`}
                            className="block text-muted hover:text-bright focus-visible:text-bright transition-colors"
                        >
                            <Icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
