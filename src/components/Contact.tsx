"use client"

import { useEffect, useRef, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "./ui/sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

export function Contact() {
    const [isMessageOpen, setIsMessageOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        interest: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const calLoadedRef = useRef(false)
    const calScriptPromiseRef = useRef<Promise<void> | null>(null)
    const calBootstrapRef = useRef(false)

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            details: "theophilus@iconnects.tech",
            action: "mailto:theophilus@iconnects.tech",
        },
        {
            icon: Phone,
            title: "Phone",
            details: "+234 70 4220 6770",
            action: "tel:+2347042206770",
        },
        {
            icon: MapPin,
            title: "Location",
            details: "Lagos, Nigeria",
            action: "https://maps.google.com",
        },
    ]

    const serviceOptions = [
        { value: "general", label: "General Inquiry" },
        { value: "product", label: "Product Build" },
        { value: "frontend", label: "Frontend Architecture" },
        { value: "performance", label: "Performance Optimization" },
        { value: "integration", label: "API Integration" },
        { value: "consulting", label: "Engineering Consulting" },
    ]

    useEffect(() => {

        const ensureCalScript = () => {
            if (calLoadedRef.current) return Promise.resolve()
            if (calScriptPromiseRef.current) return calScriptPromiseRef.current

            if (!calBootstrapRef.current) {
                const bootstrapScript = document.createElement("script")
                bootstrapScript.type = "text/javascript"
                bootstrapScript.innerHTML = `
                    (function (C, A, L) {
                        let p = function (a, ar) { a.q.push(ar); };
                        let d = C.document;
                        C.Cal = C.Cal || function () {
                            let cal = C.Cal;
                            let ar = arguments;
                            if (!cal.loaded) {
                                cal.ns = {};
                                cal.q = cal.q || [];
                                d.head.appendChild(d.createElement("script")).src = A;
                                cal.loaded = true;
                            }
                            if (ar[0] === L) {
                                const api = function () { p(api, arguments); };
                                const namespace = ar[1];
                                api.q = api.q || [];
                                if (typeof namespace === "string") {
                                    cal.ns[namespace] = cal.ns[namespace] || api;
                                    p(cal.ns[namespace], ar);
                                    p(cal, ["initNamespace", namespace]);
                                } else p(cal, ar);
                                return;
                            }
                            p(cal, ar);
                        };
                    })(window, "https://app.cal.com/embed/embed.js", "init");
                `
                document.body.appendChild(bootstrapScript)
                calBootstrapRef.current = true
            }

            calScriptPromiseRef.current = new Promise<void>((resolve, reject) => {
                let attempts = 0
                const checkReady = () => {
                    const Cal = (window as typeof window & { Cal?: unknown }).Cal
                    if (Cal && typeof Cal === "function") {
                        calLoadedRef.current = true
                        resolve()
                        return
                    }
                    attempts += 1
                    if (attempts > 40) {
                        reject(new Error("Cal.com failed to initialize"))
                        return
                    }
                    window.setTimeout(checkReady, 50)
                }
                checkReady()
            })

            return calScriptPromiseRef.current
        }

        const initializeCal = async () => {
            await ensureCalScript()

            const container = document.getElementById(
                "my-cal-inline-theophilus-consultation",
            )
            if (container) {
                container.innerHTML = ""
            }

            const Cal = (window as typeof window & { Cal?: unknown }).Cal as unknown as {
                (action: string, calLink: string, config: unknown): void
                ns: Record<string, (action: string, config: unknown) => void>
            }
            if (!Cal || typeof Cal !== "function") return

            Cal("init", "theophilus-consultation", { origin: "https://app.cal.com" })

            Cal.ns["theophilus-consultation"]("inline", {
                elementOrSelector: "#my-cal-inline-theophilus-consultation",
                config: { layout: "month_view" },
                calLink: "theophilus-samuel/30min",
            })

            Cal.ns["theophilus-consultation"]("ui", {
                hideEventTypeDetails: false,
                layout: "month_view",
            })
        }

        initializeCal()
    }, [])

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, interest: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
            toast.error("Email service is not configured. Please contact me directly.")
            setIsSubmitting(false)
            return
        }

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone || "Not provided",
                company: formData.company || "Not provided",
                interest: formData.interest || "General Inquiry",
                message: formData.message,
                to_email:
                    import.meta.env.VITE_ADMIN_EMAIL || "theophilussam@outlook.com",
            }

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey,
            )

            if (response.status === 200) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                    interest: "",
                })
                toast.success("Message sent! I will reply within 24–48 hours.")
                setIsMessageOpen(false)
            } else {
                toast.error("Failed to send message. Please try again or email me directly.")
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="relative py-32 bg-card/30">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-muted-foreground font-mono tracking-[0.2em]">
                            CONTACT
                        </span>
                        <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-8">
                        Let us build something dependable.
                    </h2>

                    <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Book a consultation or send a detailed message. Either way, I will respond quickly.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <Button
                            variant="default"
                            onClick={() =>
                                document
                                    .getElementById("my-cal-inline-theophilus-consultation")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Book a Call
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setIsMessageOpen(true)}
                        >
                            Send a Message
                        </Button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-background clean-border rounded-3xl overflow-hidden elevated-shadow">
                        <div className="bg-card/50 px-8 py-6 border-b border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-1">
                                        Theophilus Consultation Call
                                    </h3>
                                    <p className="text-muted-foreground">
                                        30 minutes • Video call • Free consultation
                                    </p>
                                </div>
                                <div className="hidden sm:flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-accent-emerald rounded-full" />
                                    <span className="text-sm text-muted-foreground font-medium">
                                        Available
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-0 bg-white">
                            <div
                                style={{
                                    width: "100%",
                                    height: "600px",
                                    overflow: "scroll",
                                }}
                                id="my-cal-inline-theophilus-consultation"
                            />
                        </div>
                    </div>
                </div>

                <Dialog open={isMessageOpen} onOpenChange={setIsMessageOpen}>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Send a message</DialogTitle>
                            <DialogDescription>
                                Share your project details and I will get back to you quickly.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Full name
                                    </label>
                                    <Input
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Email address
                                    </label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="you@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Phone (optional)
                                    </label>
                                    <Input
                                        name="phone"
                                        placeholder="+234..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Company (optional)
                                    </label>
                                    <Input
                                        name="company"
                                        placeholder="Company or team"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">
                                    Project interest
                                </label>
                                <Select
                                    value={formData.interest}
                                    onValueChange={handleSelectChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {serviceOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">
                                    Message
                                </label>
                                <Textarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                />
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send message"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-6">
                        Prefer to reach out directly? Contact me here:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        {contactInfo.map((info) => (
                            <a
                                key={info.title}
                                href={info.action}
                                className="flex items-center gap-3 text-foreground hover:text-accent-blue transition-colors"
                            >
                                <info.icon className="w-4 h-4" />
                                <span>{info.details}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
