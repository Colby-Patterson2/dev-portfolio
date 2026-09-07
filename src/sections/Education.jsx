import { Award, GraduationCap } from "lucide-react";

const education = [
    {
        icon: GraduationCap,
        title: "Bachelor of Science",
        field: "Cloud Computing",
        description: "WGU",
    },
    {
        icon: Award,
        title: "Web Development Certificate",
        field: "Web Development",
        description: "BYU-Idaho",
    },
];

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Education
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Degrees and Certifications
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        My Education and Training
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((item, idx) => (
                        <article
                            key={item.title}
                            className="glass p-8 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3">
                                {item.field}
                            </p>
                            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
