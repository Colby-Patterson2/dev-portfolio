import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img src="/hero.png" alt="Hero image" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }} />
            ))}
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Computer Science · Cloud Computing
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Lorem <span className="text-primary glow-text">Ipsum</span>
                            <br />
                            Dolor
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                Sit Amet
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200+-
                        ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div>
                        <Button size="lg">Contact Me<ArrowRight className="w-5 h-5"/></Button>
                    </div>
                </div>
                <div className="relative animate-fade-in animation-delay-300">
                    <div className="relative max-w-md mx-auto">
                        <div />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/hero.png" alt="Colby Patterson" className="w-full aspect-4/5 object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}