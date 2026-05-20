import { profile } from "@/app/lib/content";
import { Nav } from "./nav";
import { SocialLinks } from "./social-links";

export function LeftColumn() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          <a href="/" className="hover:text-accent focus-visible:text-accent transition-colors">
            {profile.name}
          </a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-heading sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>
        <Nav />
      </div>
      <SocialLinks />
    </header>
  );
}
