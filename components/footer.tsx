"use client"

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: <GithubIcon className="h-5 w-5" />,
      href: "https://github.com/DR-skcet",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: <LinkedinIcon className="h-5 w-5" />,
      href: "https://linkedin.com/in/durai-raj-0a3611258",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: <MailIcon className="h-5 w-5" />,
      href: "mailto:idurairaj2002@gmail.com",
      label: "Email",
      color: "hover:text-red-600",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Durairaj S
            </h2>
            <p className="text-blue-200 mb-6 text-lg">AI & ML Engineer | Full Stack Developer | Cloud Enthusiast</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate about creating innovative solutions that bridge technology and real-world impact. Always
              excited to collaborate on projects that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/10 backdrop-blur-sm ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  data-cursor-hover
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    data-cursor-hover
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-300">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MailIcon className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-sm">idurairaj2002@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="h-5 w-5 mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <span className="text-sm">Available for opportunities</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                data-cursor-hover
              >
                <ArrowUpIcon className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">© {currentYear} Durairaj S. All rights reserved.</p>
            <p className="text-gray-400 text-xs">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
