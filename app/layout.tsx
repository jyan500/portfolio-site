import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Jansen Yan — Full Stack Engineer",
    description:
        "Full stack engineer with a passion for building software that makes people's lives easier.",
    icons: {
        icon: [
            {
                url: '/icon.svg', 
                href: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
        >
            <body className="bg-navy text-muted leading-relaxed antialiased">
                {children}
            </body>
        </html>
    );
}
