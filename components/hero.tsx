"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, PlayIcon } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      life: number
      maxLife: number
    }[] = []

    const createParticles = () => {
      particles.length = 0
      // Reduce particle count for performance
      const particleCount = Math.floor(window.innerWidth / 32) // was /12
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1, // was 4 + 1
          speedX: (Math.random() - 0.5) * 0.6, // was 1.2
          speedY: (Math.random() - 0.5) * 0.6, // was 1.2
          color: `hsl(${200 + Math.random() * 80}, 70%, ${60 + Math.random() * 20}%)`,
          opacity: Math.random() * 0.6 + 0.2, // was 0.8 + 0.2
          life: 0,
          maxLife: Math.random() * 100 + 50, // was 200 + 100
        })
      }
    }

    // Throttle animation frame for performance
    let lastFrame = 0
    const animateParticles = (now = 0) => {
      if (now - lastFrame < 33) { // ~30fps
        requestAnimationFrame(animateParticles)
        return
      }
      lastFrame = now
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY
        p.life++
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -0.8
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -0.8
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))
        const lifeRatio = p.life / p.maxLife
        p.opacity = Math.max(0, 1 - lifeRatio)
        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.6,
            speedY: (Math.random() - 0.5) * 0.6,
            color: `hsl(${200 + Math.random() * 80}, 70%, ${60 + Math.random() * 20}%)`,
            opacity: Math.random() * 0.6 + 0.2,
            life: 0,
            maxLife: Math.random() * 100 + 50,
          })
          continue
        }
        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.shadowBlur = 8 // was 20
        ctx.shadowColor = p.color
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 80) { // was 150
            ctx.save()
            ctx.globalAlpha = (1 - distance / 80) * 0.2 * Math.min(p.opacity, p2.opacity) // was 0.4
            ctx.strokeStyle = p.color
            ctx.lineWidth = 0.5 // was 1
            ctx.shadowBlur = 4 // was 10
            ctx.shadowColor = p.color
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
      requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    window.addEventListener("resize", () => {
      resizeCanvas()
      createParticles()
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  }

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGetInTouch = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.6 }} />

      {/* Enhanced Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
            scale: [1, 1.1, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-poppins leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Durairaj S
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300 min-h-[3em] flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  "AI/ML Innovator",
                  2000,
                  "GenAI Focussed",
                  2000,
                  "Cloud Enthusiast",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Tech Explorer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent font-semibold"
              />
            </h2>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Building innovative solutions with{" "}
              <motion.span
                className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Artificial Intelligence
              </motion.span>
              , {" "}
              <motion.span
                className="text-emerald-600 dark:text-emerald-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Machine Learning
              </motion.span>
              , {" "}
              <motion.span
                className="text-orange-600 dark:text-orange-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                GenAI
              </motion.span>
              , {" "}
              <motion.span
                className="text-blue-600 dark:text-blue-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                LLM 
              </motion.span>
              , {" "}
              <motion.span
                className="text-purple-600 dark:text-purple-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                API
              </motion.span>
              , and {" "}
              <motion.span
                className="text-cyan-600 dark:text-cyan-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Cloud Technologies
              </motion.span>
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Button
                size="lg"
                onClick={handleViewWork}
                className="relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-lg"
                data-cursor-hover
              >
                <PlayIcon className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                View My Work
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Button
                variant="outline"
                size="lg"
                onClick={handleGetInTouch}
                className="relative border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-4 rounded-full transition-all duration-300 group text-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                data-cursor-hover
              >
                <MailIcon className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Get In Touch
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8">
            {[
              {
                icon: GithubIcon,
                href: "https://github.com/DR-skcet",
                label: "GitHub",
                color: "hover:text-gray-900 dark:hover:text-white",
                bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
              },
              {
                icon: LinkedinIcon,
                href: "https://linkedin.com/in/durai-raj-0a3611258",
                label: "LinkedIn",
                color: "hover:text-blue-600",
                bgColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
              },
              {
                icon: MailIcon,
                href: "mailto:idurairaj2002@gmail.com",
                label: "Email",
                color: "hover:text-red-600",
                bgColor: "hover:bg-red-100 dark:hover:bg-red-900/30",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 p-4 rounded-full ${social.bgColor} shadow-lg hover:shadow-xl group relative overflow-hidden`}
                data-cursor-hover
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <social.icon className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="sr-only">{social.label}</span>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {social.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
