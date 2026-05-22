export const about: string[] = [
    "I'm a developer who enjoys turning hard problems into simple and intuitive products that make people's lives easier.",
    "Over the past few years, I've worked in small company and start up environments, shipping customer-facing features across the full stack.",
    "My recent experiences have been in Node.js, Python, React and Typescript, but I quickly learn new technologies and processes to meet the needs of any team.",
    "Outside of software development, I am an avid yoyo player and create tutorials to teach complex yoyo tricks.",
];

export function About(){
    return (
        <section
            id="about"
            aria-label="About me"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">
                    About
                </h2>
            </div>
            <div className="space-y-4">
                {about.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </section>
    );
}
