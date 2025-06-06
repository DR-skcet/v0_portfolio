"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpenIcon,
  CodeIcon,
  ServerIcon,
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon,
  TrendingUpIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
  }

  const interests = [
    {
      icon: (
        <div className="bg-white p-1 rounded shadow w-8 h-8 flex items-center justify-center">
          <CodeIcon className="w-6 h-6 text-blue-600" />
        </div>
      ),
      title: "AI & Machine Learning",
      description:
        "Passionate about developing intelligent systems that can learn and adapt to solve complex problems using cutting-edge algorithms.",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn"],
      projects: 3,
    },
    {
      icon: (
        <div className="bg-white p-1 rounded shadow w-8 h-8 flex items-center justify-center">
          <ServerIcon className="w-6 h-6 text-purple-600" />
        </div>
      ),
      title: "Cloud Computing",
      description:
        "Experienced in AWS and Oracle Cloud services for building scalable, robust, and cost-effective cloud-native applications.",
      gradient: "from-purple-500 to-pink-500",
      skills: ["AWS", "Oracle Cloud", "Docker", "Kubernetes"],
      projects: 2,
    },
    {
      icon: (
        <div className="bg-white p-1 rounded shadow w-8 h-8 flex items-center justify-center">
          <BookOpenIcon className="w-6 h-6 text-fuchsia-600" />
        </div>
      ),
      title: "GenAI",
      description:
        "Exploring and building with Generative AI models, prompt engineering, and real-world applications of LLMs for automation, creativity, and productivity.",
      gradient: "from-fuchsia-500 to-pink-500",
      skills: ["Prompt Engineering", "LLMs", "RAG", "GenAI APIs"],
      projects: 3,
    },
  ]

  const stats = [
    { label: "Years of Study", value: "3+", icon: <GraduationCapIcon className="h-5 w-5" /> },
    { label: "Projects Completed", value: "10+", icon: <CodeIcon className="h-5 w-5" /> },
    { label: "Technologies", value: "20+", icon: <ServerIcon className="h-5 w-5" /> },
    { label: "Internships", value: "4", icon: <StarIcon className="h-5 w-5" /> },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions that bridge technology and real-world impact
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Personal Info Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <Card className="relative overflow-hidden rounded-2xl shadow-2xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm group-hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <GraduationCapIcon className="h-10 w-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-1">Durairaj S</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                      Computer Science & Business Systems
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <motion.div
                    className="flex items-center text-gray-600 dark:text-gray-300 group/item hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <GraduationCapIcon className="h-5 w-5 mr-3 text-blue-500 group-hover:item:scale-110 transition-transform" />
                    <span>Sri Krishna College of Engineering and Technology</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-600 dark:text-gray-300 group/item hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CalendarIcon className="h-5 w-5 mr-3 text-purple-500 group-hover:item:scale-110 transition-transform" />
                    <span>Oct 2022 - May 2026</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-600 dark:text-gray-300 group/item hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <MapPinIcon className="h-5 w-5 mr-3 text-green-500 group-hover:item:scale-110 transition-transform" />
                    <span>Coimbatore, India</span>
                  </motion.div>
                </div>

                <div className="mb-6 flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-semibold"
                  >
                    <TrendingUpIcon className="h-4 w-4 mr-2" />
                    CGPA: 8.51
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/30"
                  >
                    Top Performer
                  </Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  I am a passionate Computer Science and Business Systems student with a deep interest in AI, Machine
                  Learning, and Cloud Computing. I constantly explore new technologies and apply them to solve
                  real-world problems, creating innovative solutions that make a positive impact.
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { label: "Email", value: "idurairaj2002@gmail.com", color: "text-red-600" },
                    { label: "Phone", value: "+91-9344021076", color: "text-green-600" },
                    { label: "Location", value: "Coimbatore, India", color: "text-blue-600" },
                    { label: "Status", value: "Available for Opportunities", color: "text-purple-600" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group/info"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.label}:</p>
                      <p
                        className={`text-xs break-all ${item.color} dark:${item.color.replace("600", "400")} group-hover/info:scale-105 transition-transform`}
                      >
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Section */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
              Areas of Interest
            </motion.h3>
            <div className="space-y-6">
              {interests.map((interest, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02, x: 10 }} className="group">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`bg-gradient-to-r ${interest.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                          whileHover={{ rotate: 5 }}
                        >
                          {interest.icon}
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-xl"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {interest.title}
                            </h4>
                            <Badge variant="outline" className="text-xs">
                              {interest.projects} Projects
                            </Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            {interest.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {interest.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{ delay: 1 + skillIndex * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-pointer text-xs"
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-950/30 dark:group-hover:to-purple-950/30">
                <motion.div className="flex justify-center mb-3" whileHover={{ rotate: 10, scale: 1.1 }}>
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white group-hover:shadow-lg transition-shadow">
                    {stat.icon}
                  </div>
                </motion.div>
                <motion.h4
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.8 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm md:text-4xl lg:text-5xl hover:from-blue-600 hover:to-purple-600 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
              >
                My Vision
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg md:text-xl">
                To leverage the power of artificial intelligence and machine learning to create solutions that not only
                solve complex technical challenges but also contribute to making the world a better place. I believe in
                continuous learning, innovation, and the transformative potential of technology when applied with
                purpose and ethical consideration.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
