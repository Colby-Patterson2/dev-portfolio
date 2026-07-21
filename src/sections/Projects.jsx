import { ArrowUpRight, GitBranchIcon } from "lucide-react"

const projects = [
    {
        title: "Visitor Counter",
        description: "A website that counts visitors, hosted on AWS",
        image: "/visitor_count_project2.png",
        tags: ["HTML, CSS, Amazon S3, Lambda, DynamoDB"],
        link: "https://dhznztclhi5hz.cloudfront.net/",
        github: "#",
    },
    {
        title: "eCommerce Project",
        description: "Full Stack eCommerce Website",
        image: "/hero.png",
        tags: ["Coming Soon"],
        link: "#",
        github: "#",
    },
    {
        title: "More Projects Coming Soon",
        description: "Coming Soon",
        image: "/hero.png",
        tags: ["Coming Soon"],
        link: "#",
        github: "#",
    }
]

export const Projects = () => {
    return ( 
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">My Projects</h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">This section contains my recent cloud projects</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="relative overflow-hidden aspect-video">
                               <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                               <div className="absolute inset-0 bg-linear-to-t from-card via-card/45 to-transparent opacity-70" />

                               <div className="absolute inset-x-3 bottom-3 md:inset-x-auto md:bottom-4 md:right-4 flex items-center justify-between md:justify-end gap-2 rounded-2xl border border-white/10 bg-background/55 p-2 backdrop-blur-md opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 min-h-11 px-3 rounded-xl bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-all"
                                        aria-label={`Open live project: ${project.title}`}
                                    >
                                        <ArrowUpRight className="w-4 h-4"/>
                                        <span className="text-xs font-medium md:hidden">Live</span>
                                    </a>

                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 min-h-11 px-3 rounded-xl glass hover:bg-surface/80 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-all"
                                            aria-label={`Open source code: ${project.title}`}
                                        >
                                            <GitBranchIcon className="w-4 h-4"/>
                                            <span className="text-xs font-medium md:hidden">Code</span>
                                        </a>
                                    )}
                               </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-start">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}