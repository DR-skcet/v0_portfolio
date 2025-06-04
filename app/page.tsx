"use client"

import { Suspense, lazy } from "react"
import React from "react"
import HeaderBase from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import FooterBase from "@/components/footer"
import ScrollToTopBase from "@/components/scroll-to-top"
import CustomCursorBase from "@/components/custom-cursor"

// Memoized static components
const Header = React.memo(HeaderBase)
const Footer = React.memo(FooterBase)
const ScrollToTop = React.memo(ScrollToTopBase)
const CustomCursor = React.memo(CustomCursorBase)

// Below-the-fold: true code-splitting with React.lazy
const Projects = lazy(() => import("@/components/projects"))
const Certifications = lazy(() => import("@/components/certifications"))
const Achievements = lazy(() => import("@/components/achievements"))
const Contact = lazy(() => import("@/components/contact"))

function SectionSkeleton({ height = 'h-32' }) {
  return <div className={`animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg my-4 ${height}`} />
}

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-cyan-950/20 overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
