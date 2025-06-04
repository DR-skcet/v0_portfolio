"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CodeIcon, DatabaseIcon, ServerIcon, GlobeIcon, BrainIcon, GitBranchIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  }

  const skillCategories = [
    {
      icon: <CodeIcon className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "SQL", "Java"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <DatabaseIcon className="h-6 w-6" />,
      title: "Database Management",
      skills: ["MySQL", "MongoDB", "Firebase", "SQL", "DynamoDB"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "Django"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: <BrainIcon className="h-6 w-6" />,
      title: "AI & ML",
      skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "CNN", "NLP"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: "Cloud Services",
      skills: ["AWS EC2", "AWS S3", "AWS Lambda", "Oracle Cloud"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: <GitBranchIcon className="h-6 w-6" />,
      title: "Tools & Concepts",
      skills: ["Git", "OOPS", "Data Structures", "SDLC"],
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-50 dark:bg-gray-950/30",
      iconColor: "text-gray-600 dark:text-gray-400",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950/20 overflow-hidden"
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
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              A comprehensive overview of my technical expertise and capabilities across various domains
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6 relative">
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                    animate={{ opacity: hoveredCard === index ? 0.05 : 0 }}
                  />

                  {/* Header */}
                  <div className="flex items-center mb-6 relative z-10">
                    <motion.div
                      className={`p-3 rounded-xl ${category.bgColor} ${category.iconColor} mr-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`
                            px-3 py-1 text-sm font-medium transition-all duration-300 cursor-pointer
                            ${
                              hoveredCard === index
                                ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md"
                                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }
                          `}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill Count */}
                  <motion.div
                    className="mt-4 text-right relative z-10"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400">{category.skills.length} skills</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight md:text-3xl lg:text-4xl drop-shadow-sm hover:from-purple-500 hover:to-blue-500 transition-colors duration-300">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. My skill set is
                constantly evolving as I explore new frameworks, tools, and methodologies to deliver cutting-edge
                solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
