"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const links = [
    { label: "Projects", href: "#portfolio" },
    { label: "Toolbox", href: "#awards" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative py-16 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-mono tracking-[0.2em] text-background/70 mb-3">
              AVAILABLE FOR SELECT PROJECTS
            </p>
            <h3 className="text-3xl sm:text-4xl font-semibold mb-4">
              Theophilus Samuel
            </h3>
            <p className="text-background/70 leading-relaxed max-w-xl mb-6">
              Software developer focused on modern web platforms, product clarity, and high-performance delivery.
            </p>

            <div className="flex items-center space-x-5">
              <a
                href="https://www.linkedin.com/in/theophilus-mcsamue/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 gentle-animation"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 gentle-animation"
              >
                <Github className="w-5 h-5 text-background" />
              </a>
              <a
                href="mailto:theophilus@iconnects.tech"
                className="hover:scale-110 gentle-animation"
              >
                <Mail className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <p className="text-sm font-mono tracking-[0.2em] text-background/70">
              QUICK LINKS
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background gentle-animation"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-6 border-t border-background/20 text-sm text-background/60">
              © 2026 Theophilus Samuel. Built with care in Lagos, NG.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}