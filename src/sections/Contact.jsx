import { Send, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "../components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: ""});

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                "EmailJS configuration missing"
            );
        }
            await emailjs.send(serviceId, templateId, {name: formData.name, email: formData.email, message: formData.message}, publicKey);

            setSubmitStatus({
                type: "Success",
                message: "Message sent successfully"
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (err){
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id="contact" className="py-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3x1"/>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200 text-primary-foreground">
                        Contact Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input id="name" type="text" required placeholder="Your Name" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input id="email" type="email" required placeholder="Your Email" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea rows={5} required placeholder="Your Message" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}/>
                            </div>
                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? ( <>Sending...</> ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </>
                                 )}
                            </Button>

                            <div>
                                <p className="text-sm">{submitStatus.message}</p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}