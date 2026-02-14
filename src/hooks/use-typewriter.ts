"use client"

import { useEffect, useState } from "react"

export type TypewriterPair = {
    headline: string
    subline: string
}

type TypewriterPhase = "typingHeadline" | "typingSubline" | "pausing" | "deleting"

type TypewriterOptions = {
    headlineDelay?: number
    sublineDelay?: number
    pauseAfterTypingMs?: number
    pauseBetweenPairsMs?: number
    deleteHeadlineDelay?: number
    deleteSublineDelay?: number
}

export function useTypewriter(
    pairs: TypewriterPair[],
    options: TypewriterOptions = {},
) {
    const {
        headlineDelay = 45,
        sublineDelay = 22,
        pauseAfterTypingMs = 1200,
        pauseBetweenPairsMs = 1400,
        deleteHeadlineDelay = 28,
        deleteSublineDelay = 18,
    } = options

    const [pairIndex, setPairIndex] = useState(0)
    const [headlineText, setHeadlineText] = useState("")
    const [sublineText, setSublineText] = useState("")
    const [phase, setPhase] = useState<TypewriterPhase>("typingHeadline")

    useEffect(() => {
        if (pairs.length === 0) return
        const currentPair = pairs[pairIndex]
        let timeoutId: number

        if (phase === "typingHeadline") {
            if (headlineText.length < currentPair.headline.length) {
                timeoutId = window.setTimeout(() => {
                    setHeadlineText(currentPair.headline.slice(0, headlineText.length + 1))
                }, headlineDelay)
            } else {
                timeoutId = window.setTimeout(() => setPhase("typingSubline"), 200)
            }
        }

        if (phase === "typingSubline") {
            if (sublineText.length < currentPair.subline.length) {
                timeoutId = window.setTimeout(() => {
                    setSublineText(currentPair.subline.slice(0, sublineText.length + 1))
                }, sublineDelay)
            } else {
                timeoutId = window.setTimeout(() => setPhase("pausing"), pauseAfterTypingMs)
            }
        }

        if (phase === "pausing") {
            timeoutId = window.setTimeout(() => setPhase("deleting"), pauseBetweenPairsMs)
        }

        if (phase === "deleting") {
            if (sublineText.length > 0) {
                timeoutId = window.setTimeout(() => {
                    setSublineText(sublineText.slice(0, -1))
                }, deleteSublineDelay)
            } else if (headlineText.length > 0) {
                timeoutId = window.setTimeout(() => {
                    setHeadlineText(headlineText.slice(0, -1))
                }, deleteHeadlineDelay)
            } else {
                setPairIndex((prev) => (prev + 1) % pairs.length)
                setPhase("typingHeadline")
            }
        }

        return () => window.clearTimeout(timeoutId)
    }, [
        pairs,
        pairIndex,
        headlineText,
        sublineText,
        phase,
        headlineDelay,
        sublineDelay,
        pauseAfterTypingMs,
        pauseBetweenPairsMs,
        deleteHeadlineDelay,
        deleteSublineDelay,
    ])

    return { headlineText, sublineText }
}


export const headlinePairsAbout = [
    {
        headline: "I help teams ship trustworthy software.",
        subline:
            "I build modern web experiences with performance, clarity, and product impact in mind.",
    },
    {
        headline: "I turn complex ideas into clean products.",
        subline:
            "From architecture to UI polish, I deliver fast, scalable, and reliable web apps.",
    },
    {
        headline: "I design systems that scale with your roadmap.",
        subline:
            "Reusable components, strong UX, and production-grade engineering that lasts.",
    },
]

export const headlinePairsHero = [
    {
        headline: "I build fast, reliable web products.",
        subline:
            "I design and ship scalable frontends with React, TypeScript, and modern architecture.",
    },
    {
        headline: "Clean UX, crisp performance, delivery you can trust.",
        subline:
            "From concept to production, I create web experiences that feel effortless and perform at scale.",
    },
]