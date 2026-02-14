"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { headlinePairsHero, useTypewriter } from "@/hooks/use-typewriter"

type HeroProps = {
  isMuted: boolean
}

export function Hero({ isMuted }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const { headlineText, sublineText } = useTypewriter(headlinePairsHero)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return
    videoEl.volume = 0
    videoEl.muted = true
    videoEl.defaultMuted = true

    const handlePlay = () => {
      videoEl.muted = isMuted
      videoEl.volume = isMuted ? 0 : 0.7
    }

    videoEl.addEventListener("play", handlePlay)

    const playPromise = videoEl.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => undefined)
    }

    return () => {
      videoEl.removeEventListener("play", handlePlay)
    }
  }, [isMuted])

  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.muted = isMuted
    videoRef.current.volume = isMuted ? 0 : 0.7
  }, [isMuted])

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/HeroVideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      <div className="relative z-10 flex min-h-[100svh] items-center pb-12 pt-28 sm:pt-32">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-5xl text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-3 text-white/80 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] font-mono">
                <span className="w-2 h-2 bg-accent-emerald rounded-full" />
                Software Developer
                <span className="w-2 h-2 bg-accent-blue rounded-full" />
                Lagos, NG
              </div>

              <>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight text-shadow-strong">
                  <span className="font-mono text-accent-emerald">&gt; </span>
                  <span aria-live="polite">{headlineText}</span>
                  <span className="ml-1 inline-block w-2 h-8 bg-foreground/70 align-middle animate-pulse" />
                </h1>
              </>

              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto sm:mx-0">
                {sublineText}
              </p>

              {/* <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                <Button
                  variant="secondary"
                  className="bg-white text-black hover:bg-white/90 w-full sm:w-auto"
                  onClick={() =>
                    document.getElementById("portfolio")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  View Projects
                </Button>

                <Button
                  variant="outline"
                  className="border-white/40 text-black hover:bg-white/10 w-full sm:w-auto"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Start a Project
                </Button>
              </div> */}

              <div className="grid gap-4 pt-4 sm:pt-6 sm:grid-cols-3">
                {[
                  {
                    title: "Product-minded",
                    copy: "I blend UX intuition with engineering discipline.",
                  },
                  {
                    title: "System-ready",
                    copy: "Reusable components and scalable architecture.",
                  },
                  {
                    title: "Delivery focus",
                    copy: "Clear scope, reliable timelines, measurable wins.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
                  >
                    <p className="text-white font-medium mb-2">
                      {item.title}
                    </p>
                    <p className="text-white/70 text-sm">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}