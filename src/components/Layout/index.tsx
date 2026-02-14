"use client"

import type { ReactNode } from "react"
import { Header, type NavLink } from "../Header"
import { Toaster } from "../ui/sonner"

type LayoutProps = {
  children: ReactNode
  isMuted: boolean
  onToggleMute: () => void
}

export function Layout({ children, isMuted, onToggleMute }: LayoutProps) {
  const navLinks: NavLink[] = [
    { href: "#portfolio", label: "Projects" },
    { href: "#toolbox", label: "Toolbox" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Highlights" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: "visible" }}>
      <Header navLinks={navLinks} isMuted={isMuted} onToggleMute={onToggleMute} />
      {children}
      <Toaster />
    </div>
  )
}
