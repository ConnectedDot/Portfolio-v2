"use client"

import { motion } from "framer-motion"
import {
    Cloud,
    Code2,
    Gauge,
    Layers,
    Shield,
    Sparkles,
} from "lucide-react"

export function Services() {
    const services = [
        {
            title: "Product websites",
            description:
                "High-converting landing pages and marketing sites with crisp performance.",
            icon: Sparkles,
        },
        {
            title: "Web apps",
            description:
                "Full-featured dashboards, portals, and internal tools built to scale.",
            icon: Layers,
        },
        {
            title: "Frontend architecture",
            description:
                "Design systems, component libraries, and engineering standards.",
            icon: Code2,
        },
        {
            title: "API integration",
            description:
                "Clean data flows, auth, and third-party service integrations.",
            icon: Cloud,
        },
        {
            title: "Performance tuning",
            description:
                "Audit, optimize, and ship faster user experiences.",
            icon: Gauge,
        },
        {
            title: "Security-first builds",
            description:
                "Role-based access, validation, and safe deployment practices.",
            icon: Shield,
        },
    ]

    return (
        <section id="services" className="relative py-24 bg-background">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="absolute -top-24 left-10 w-48 h-48 bg-accent-emerald/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 right-12 w-56 h-56 bg-accent-blue/15 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-muted-foreground font-mono tracking-[0.2em]">
                            SERVICES
                        </span>
                        <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
                        What I build for teams and founders.
                    </h2>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Clear scoping, rapid execution, and dependable systems that grow with your product.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative overflow-hidden bg-card/90 clean-border rounded-xl p-5 subtle-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="absolute top-4 right-4 text-[0.65rem] font-mono text-muted-foreground/70">
                                0{index + 1}
                            </div>

                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-accent/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                    <service.icon className="w-5 h-5 text-foreground" />
                                </div>
                                <h3 className="text-base font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
