"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

export function Portfolio() {
  const projects = [
    {
      title: "Izusoft Technology",
      description:
        "A SaaS marketing site with a focus on clear messaging, fast performance, and conversion-optimized design.",
      tags: ["Next.js", "Shadcn UI", "Tailwind", "Framer Motion"],
      link: "https://www.izusoft.tech//",
      accent: "from-accent-blue to-accent-purple",
    },
    {
      title: "Huel Medics",
      description:
        "A healthcare storefront with conversion-focused UX, subscription flows, and a fast checkout experience.",
      tags: ["Next.js", "Shadcn UI", "Tailwind"],
      link: "https://huel-medics.vercel.app/",
      accent: "from-accent-blue to-accent-purple",
    },
    {
      title: "Kendra LMS",
      description:
        "Learning platform for courses, payments, and instructor management with real-time progress tracking.",
      tags: ["React", "Firebase", "TypeScript"],
      link: "https://kendra-lms.vercel.app/",
      accent: "from-accent-emerald to-accent-blue",
    },
    {
      title: "RenewEdge",
      description:
        "Energy product website optimized for clarity, storytelling, and quick navigation to key resources.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://renew-edge.vercel.app/",
      accent: "from-accent-purple to-accent-emerald",
    },
  ]

  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-muted-foreground font-mono tracking-[0.2em]">
              FEATURED WORK
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-8">
            Projects built for clarity, speed, and scale.
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A mix of product builds, marketing experiences, and platform work focused on real business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card clean-border rounded-xl overflow-hidden subtle-shadow group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-4">
                <div className={`h-20 rounded-lg bg-gradient-to-br ${project.accent} p-3 flex items-end`}>
                  <span className="text-white font-semibold text-sm tracking-wide">
                    {project.title}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 mb-2">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <span className="text-[0.65rem] font-mono text-muted-foreground">
                    CASE STUDY
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/60 text-foreground px-2 py-1 rounded text-[0.65rem] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-9 text-xs"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}