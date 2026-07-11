import { CloudCheck, CodeXml, DraftingCompass, ThumbsUp } from "lucide-react";

const highlights = [
    {
        icon: CloudCheck,
        title: "Cloud Certifications",
        description: "Multiple Cloud Certifications, including AWS Solutions Architect-Associate",
    },
    {
        icon: CodeXml,
        title: "Coding Experience",
        description: "Experience with several coding languages, including Javascript and Python",
    },
    {
        icon: ThumbsUp,
        title: "Team Focused",
        description: "Always interested in working on a team toward a common goal",
    },
    {
        icon: DraftingCompass,
        title: "Problem Solving",
        description: "Dedicated to finding innovative solutions to difficult problems",
    },
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Aspiring Cloud
                        <span className="font-serif italic font-normal text-white"> And Devops Engineer</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I have 3+ years experience working in IT Support, solving complex issues. I have a Bachelor's Degree in Cloud Computing that includes working knowledge of AWS and Azure. I also have a Web Development certificate from which I learned how to code in React. Additionally, I have several IT and Cloud certifications, including CompTIA Network+, Security+, AWS Certified Solutions Architect - Associate, and Azure Administrator Associate.
                        </p>
                        <p>
                            I have always been interested in computing and have become interested in cloud computing in the past several years. I have spent the last couple years learning as much as I can about networking concepts and cloud services. I have mostly focused on AWS and Azure, but I am learning about Google Cloud Platform as well.
                        </p>
                    </div>

                    {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            Mission Statement Goes Here
                        </p>
                    </div> */}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};