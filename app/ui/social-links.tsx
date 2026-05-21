import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { socials } from "@/app/lib/content";

const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: Mail,
} as const;

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
