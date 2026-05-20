import { LeftColumn } from "@/app/ui/left-column";
import { About } from "@/app/ui/sections/about";
import { Experience } from "@/app/ui/sections/experience";
import { Projects } from "@/app/ui/sections/projects";
import { Footer } from "@/app/ui/footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-y-full rounded bg-accent px-4 py-3 text-sm font-bold uppercase tracking-widest text-navy transition-transform focus:translate-y-4 focus:translate-x-4 z-50"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <LeftColumn />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}
