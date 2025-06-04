"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon, MapPinIcon, ArrowRightIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      title: "AI Intern",
      company: "Infosys Springboard",
      period: "Oct 2024 - Dec 2024",
      location: "Remote",
      type: "Internship",
      description:
        "Developed an AI-powered solution for real-time health data analysis, optimizing predictive analytics, enhancing decision support, and improving patient care insights.",
      technologies: ["AI", "Machine Learning", "Predictive Analytics", "Healthcare"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "IoT Intern",
      company: "Centre for Entrepreneurship Development (CED), Anna University",
      period: "Jul 2024",
      location: "Chennai",
      type: "Internship",
      description:
        "Engineered an IoT-based automation system using Arduino and MQTT for real-time infrastructure monitoring, increasing operational efficiency and optimizing resource utilization.",
      technologies: ["IoT", "Arduino", "MQTT", "Automation"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
    {
      title: "Machine Learning Intern",
      company: "Tamil Nadu Smart and Advanced Manufacturing Centre (TANSAM) - Siemens",
      period: "Mar 2024 - Apr 2024",
      location: "Chennai",
      type: "Internship",
      description:
        "Designed and deployed machine learning model using TensorFlow and Keras for defect detection in PCB manufacturing, improving accuracy, scalability, and production efficiency.",
      technologies: ["TensorFlow", "Keras", "Computer Vision", "Manufacturing"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-950/20 dark:to-blue-950/20 overflow-hidden"
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
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              My professional journey and internship experiences in AI, IoT, and Machine Learning
            </p>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative group">
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-4 top-8 bg-gradient-to-r ${exp.color} rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-lg group-hover:scale-125 transition-transform duration-300`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
                  >
                    <BriefcaseIcon className="h-4 w-4 text-white" />
                  </motion.div>

                  <Card className="ml-20 hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group-hover:-translate-y-2">
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Background gradient on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                {exp.title}
                              </h3>
                              <Badge variant="outline" className={`${exp.bgColor} border-0`}>
                                {exp.type}
                              </Badge>
                            </div>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                          </div>
                          <div className="flex flex-col lg:items-end text-sm text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
                            <div className="flex items-center gap-2 mb-1">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPinIcon className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ delay: 1 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover arrow */}
                      <motion.div
                        className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRightIcon className="h-5 w-5 text-blue-500" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
