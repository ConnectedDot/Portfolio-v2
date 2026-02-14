"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Compass, FileText, Timer } from "lucide-react"

export function Team() {
    const highlights = [
        {
            title: "Outcome-first delivery",
            description:
                "Every build ties directly to a business goal or product KPI.",
            icon: CheckCircle2,
        },
        {
            title: "Clear product direction",
            description:
                "Roadmaps, decisions, and next steps documented for speed.",
            icon: Compass,
        },
        {
            title: "Weekly visibility",
            description:
                "Lightweight updates so stakeholders always know status.",
            icon: FileText,
        },
        {
            title: "On-time execution",
            description:
                "Tight scope control and focused sprints for dependable delivery.",
            icon: Timer,
        },
    ]

    return (
        <section id="team" className="relative py-24 bg-background">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <div className="absolute -top-24 left-8 w-44 h-44 bg-accent-emerald/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 right-10 w-52 h-52 bg-accent-purple/15 rounded-full blur-3xl" />

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
                            HIGHLIGHTS
                        </span>
                        <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
                        The way I work with teams.
                    </h2>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        A focused, transparent delivery style designed to reduce risk and build confidence fast.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
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
                                    <item.icon className="w-5 h-5 text-foreground" />
                                </div>
                                <h3 className="text-base font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
