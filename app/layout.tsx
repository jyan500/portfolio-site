import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jansen Yan — Full Stack Developer",
  description:
    "Jansen Yan is a full stack developer who builds accessible, performant web applications from concept to deployment.",
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
