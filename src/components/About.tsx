"use client"

import { motion } from "framer-motion"
import { headlinePairsAbout, useTypewriter } from "@/hooks/use-typewriter"

export function About() {


  const { headlineText, sublineText } = useTypewriter(headlinePairsAbout)

  const strengths = [
    {
      title: "Frontend architecture",
      description:
        "Component systems, design tokens, and maintainable UI patterns.",
    },
    {
      title: "Full-stack delivery",
      description:
        "API integration, auth flows, and production-ready deployments.",
    },
    {
      title: "Performance mindset",
      description:
        "Speed budgets, edge caching, and optimized bundle strategy.",
    },
    {
      title: "Product collaboration",
      description:
        "Tight feedback loops with designers, founders, and teams.",
    },
  ]

  const values = ["Clarity", "Reliability", "Craft", "Ownership"]
  // const strengthAccents = [
  //   "from-accent-emerald/30 to-transparent",
  //   "from-accent-blue/30 to-transparent",
  //   "from-accent-purple/30 to-transparent",
  //   "from-accent-emerald/30 to-transparent",
  // ]

  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
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
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-muted-foreground font-mono tracking-[0.2em]">
              ABOUT
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-foreground">
            <span className="font-mono text-accent-emerald">&gt; </span>
            <span aria-live="polite">{headlineText}</span>
            <span className="ml-1 inline-block w-2 h-8 bg-foreground/70 align-middle animate-pulse" />
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {sublineText}
          </p>
        </motion.div>

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="absolute -top-12 -left-10 w-48 h-48 bg-accent-emerald/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 right-0 w-56 h-56 bg-accent-blue/15 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden bg-card/90 clean-border rounded-2xl p-8 subtle-shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-accent-emerald/20 blur-3xl opacity-60" />
            <h3 className="text-2xl font-semibold mb-4">
              What you can expect
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I build interfaces that feel polished, load fast, and scale with your product. From discovery to delivery, I keep stakeholders aligned, ship iteratively, and document decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="px-3 py-1 rounded-full bg-accent/70 text-foreground text-xs font-mono transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-emerald/30"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden bg-card clean-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* // bg-gradient-to-br ${strengthAccents[index % strengthAccents.length]}  */}
                <div
                  className={`absolute inset-0 
                    opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/70">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {strength.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
