"use client"

import { motion } from "framer-motion"

export function ToolBox() {
  const stack = [
    { name: "Next.js", image: "/next-logo.svg" },
    { name: "React", image: "/react-logo.svg" },
    { name: "TypeScript", image: "/typescript.svg" },
    { name: "Tailwind", image: "/tailwindcss.svg" },
    { name: "Firebase", image: "/firebase.svg" },
    { name: "Node.js", image: "/node.svg" },
    { name: "Git", image: "/git.svg" },
    { name: "PostgreSQL", image: "/postgresql.svg" },
  ]

  return (
    <section id="awards" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-25" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-muted-foreground font-mono tracking-[0.2em]">
              TOOLBOX
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-foreground">
            The stack I reach for every day.
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A reliable mix of modern frameworks, infrastructure, and tooling for building production-grade software.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {stack.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden bg-card/80 clean-border rounded-xl px-3 py-4 flex flex-col items-center text-center subtle-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-accent/50 mb-3 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-6 h-6"
                />
              </div>
              <p className="text-[0.7rem] font-semibold tracking-wide text-foreground/90">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}