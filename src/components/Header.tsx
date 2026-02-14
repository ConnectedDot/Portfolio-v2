"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, Volume2, VolumeX, X } from "lucide-react"
import { Button } from "./ui/button"

export type NavLink = {
    href: string
    label: string
}

type HeaderProps = {
    navLinks: NavLink[]
    isMuted: boolean
    onToggleMute: () => void
}

export function Header({ navLinks, isMuted, onToggleMute }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) setIsMobileMenuOpen(false)
        }

        if (isMobileMenuOpen) {
            window.addEventListener("scroll", handleScroll)
        }

        return () => window.removeEventListener("scroll", handleScroll)
    }, [isMobileMenuOpen])

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="fixed left-0 right-0 top-0 z-[110] w-full"
            >
                <div
                    className={`w-full px-4 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${isScrolled
                            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
                            : "bg-transparent"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center cursor-pointer"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <span className="text-white text-xl tracking-widest font-semibold">
                                THEOPHILUS
                            </span>
                        </motion.button>

                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/90 hover:text-white font-medium gentle-animation hover:scale-105"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-3 relative">
                            <div className="relative">
                                <button
                                    onClick={onToggleMute}
                                    className="glass-effect p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer"
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-4 h-4" />
                                    ) : (
                                        <Volume2 className="w-4 h-4" />
                                    )}
                                </button>

                                {isMuted && (
                                    <div className="absolute -bottom-10 right-0 hidden sm:flex items-center text-white/80 font-mono text-xs">
                                        <span className="whitespace-nowrap mr-2">Sound On</span>
                                        <span className="text-lg">↗</span>
                                    </div>
                                )}
                            </div>

                            <Button
                                variant="secondary"
                                className="hidden sm:flex bg-white/10 text-white border border-white/15 hover:bg-white/20"
                                onClick={() =>
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Book a Call
                            </Button>

                            <button
                                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[80] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/10 z-[90]"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 px-6 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-white text-lg font-medium hover:text-white/80 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="mt-auto p-6">
                        <button
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                                setIsMobileMenuOpen(false)
                            }}
                            className="w-full bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-white/90 gentle-animation"
                        >
                            Book a Call
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
