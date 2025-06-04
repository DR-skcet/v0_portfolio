"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, LinkedinIcon, GithubIcon, CheckCircleIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { toast } = useToast()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const contactInfo = [
    {
      icon: <MailIcon className="h-6 w-6 text-red-500" />,
      title: "Email",
      value: "idurairaj2002@gmail.com",
      link: "mailto:idurairaj2002@gmail.com",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-950/30",
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-blue-500" />,
      title: "Location",
      value: "Coimbatore, India",
      link: "#",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: <LinkedinIcon className="h-6 w-6 text-blue-700" />,
      title: "LinkedIn",
      value: "linkedin.com/in/durairaj-tech",
      link: "https://www.linkedin.com/in/durairaj-tech/",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: <GithubIcon className="h-6 w-6 text-gray-700" />,
      title: "GitHub",
      value: "github.com/DR-skcet",
      link: "https://github.com/DR-skcet?tab=repositories",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50 dark:bg-gray-950/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-cyan-950/20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Card className="h-full overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <SendIcon className="h-6 w-6 text-blue-600" />
                  Send Message
                </h3>
                <form
                  action="https://formsubmit.co/ajax/idurairaj2002@gmail.com"
                  method="POST"
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const formData = new FormData(form)
                    const res = await fetch("https://formsubmit.co/ajax/idurairaj2002@gmail.com", {
                      method: "POST",
                      body: formData,
                    })
                    if (res.ok) {
                      toast({ title: "Message sent!", description: "Thank you for reaching out." })
                      form.reset()
                    } else {
                      toast({ title: "Error", description: "There was a problem sending your message. Please try again later." })
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-2"
                    >
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="border-2 focus:border-blue-500 transition-colors"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Your email"
                        className="border-2 focus:border-blue-500 transition-colors"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="border-2 focus:border-blue-500 transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Your message"
                      rows={6}
                      className="border-2 focus:border-blue-500 transition-colors resize-none"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      data-cursor-hover
                    >
                      <span className="flex items-center justify-center">
                        <SendIcon className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Card className="h-full overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <MailIcon className="h-6 w-6 text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="group"
                    >
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                        data-cursor-hover
                      >
                        <motion.div
                          className={`p-3 rounded-xl ${info.bgColor} group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <div className={`bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                            {info.icon}
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm break-all">{info.value}</p>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-blue-500"
                        >
                          <CheckCircleIcon className="h-5 w-5" />
                        </motion.div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Response Promise */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 }}
                  className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl"
                >
                  <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Quick Response Guarantee</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via
                    phone or LinkedIn.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
