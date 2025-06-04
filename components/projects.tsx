"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon, EyeIcon, StarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [visibleProjects, setVisibleProjects] = useState(3)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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

  const projects = [
    {
      title: "RAG-based Chatbot for Text File Extraction",
      description:
        "Built a Retrieval-Augmented Generation (RAG) chatbot integrating Google GenAI Embeddings and FAISS for contextual Q&A across multiple documents. Deployed an interactive Streamlit UI enabling real-time semantic search and document exploration. Enabled dynamic interaction with unstructured PDF, DOCX, and TXT content using LLaMA 3-powered Groq API backend.",
      image: "/rag.webp?height=250&width=400",
      tags: ["AI", "GenAI", "RAG", "Document Intelligence"],
      github: "https://github.com/DR-skcet/RagBased-pdfInteraction-chatbot",
      period: "May 2025",
      category: "AI/GenAI",
      stats: { stars: 0, views: 0 },
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Oil Spill Detection using AIS and Satellite Imagery",
      description:
        "Developed a deep learning model combining AIS data and satellite imagery for accurate detection of marine oil spills. Applied CNNs and object detection to classify and locate spill zones using multi-modal input. Automated the pipeline with geospatial preprocessing and remote sensing libraries, improving environmental monitoring capabilities.",
      image: "/oilspill.png?height=250&width=400",
      tags: ["AI", "Remote Sensing", "Environment"],
      github: "https://github.com/DR-skcet/Oil-spill-Detection-using-AIS-Data-and-Satellite-Image",
      period: "December 2024",
      category: "AI/Remote Sensing",
      stats: { stars: 0, views: 0 },
      gradient: "from-blue-700 to-cyan-700",
    },
    {
      title: "AI-Powered Automated Requirement Gathering System",
      description:
        "Engineered a FastAPI backend integrating OCR, pdfplumber, and docx parsers for multi-format requirement ingestion. Embedded domain regulations (ISO 25010, GDPR) with semantic vector search using FAISS and HuggingFace models. Leveraged LLaMA 3 via Groq API for structured functional/non-functional extraction with regulatory grounding. Designed scalable, enterprise-ready pipelines for requirement analysis and export in JSON/Excel formats.",
      image: "/requ.png?height=250&width=350",
      tags: ["AI", "NLP", "RAG", "Compliance"],
      github: "https://github.com/DR-skcet/Requirement_Analyser",
      period: "May 2025",
      category: "AI/NLP",
      stats: { stars: 0, views: 0 },
      gradient: "from-fuchsia-500 to-pink-500",
    },
    {
      title: "Ovarian Cancer Detection",
      description:
        "Developed a CNN-based AI model using TensorFlow, Keras to classify ovarian cancer subtypes. Implemented Explainable AI (SHAP, Grad-CAM) for diagnostic transparency and transfer learning to boost model adaptability and enhanced generalization. Optimized model performance with hyperparameter tuning and data augmentation, achieving high accuracy.",
      image: "/ovariancancer.jpeg?height=250&width=400",
      tags: ["AI", "Deep Learning", "Healthcare", "TensorFlow", "Keras", "Computer Vision"],
      github: "https://github.com/DR-skcet/Ovarian-Cancer",
      period: "Mar 2024 - Apr 2024",
      category: "AI/ML",
      stats: { stars: 15, views: 120 },
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "PCB Defect Detection",
      description:
        "Developed an AI-powered deep learning system for detecting burnt marks, rust, water damage, and pad defects in printed circuit boards (PCBs) with high accuracy. Designed and implemented a scalable solution for real-time multi-class defect classification in a manufacturing environment. Optimized data augmentation and feature extraction, boosting defect detection to high accuracy.",
      image: "/pcbproject.avif?height=250&width=400",
      tags: ["AI", "Quality Control", "Automation", "Computer Vision", "Manufacturing"],
      github: "https://github.com/DR-skcet/PCB-board-defect-detection-",
      demo: "#",
      period: "Mar 2024 - Apr 2024",
      category: "AI/ML",
      stats: { stars: 22, views: 180 },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart Health Monitoring",
      description:
        "Built an AI-driven real-time health monitoring system using Django for predictive analytics. Developed a Django-based API-driven health monitoring system for real-time biometric data analysis. Implemented a user-friendly dashboard with personalized health recommendations for improved user well-being.",
      image: "/smarthealth.jpeg?height=250&width=400",
      tags: ["AI", "Real-Time Analytics", "Django", "Healthcare", "API"],
      github: "https://github.com/DR-skcet/infy_smarthealth",
      period: "Oct 2024 - Dec 2024",
      category: "Full Stack",
      stats: { stars: 18, views: 95 },
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const showMoreProjects = () => {
    setVisibleProjects(projects.length)
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-purple-950/20 overflow-hidden"
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
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              Showcasing my technical skills through real-world applications and innovative solutions
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Project Stats */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="secondary" className="bg-black/70 text-white border-0 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="absolute top-3 right-3 flex gap-2">
                    <motion.div
                      className="bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StarIcon className="h-3 w-3" />
                      {project.stats.stars}
                    </motion.div>
                    <motion.div
                      className="bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <EyeIcon className="h-3 w-3" />
                      {project.stats.views}
                    </motion.div>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <Badge variant="outline" className="bg-white/90 dark:bg-gray-900/90 border-0 backdrop-blur-sm">
                      {project.period}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.5 + tagIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="outline"
                          className={`
                            transition-all duration-300 cursor-pointer
                            ${
                              hoveredProject === index
                                ? `bg-gradient-to-r ${project.gradient} text-white border-0`
                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                            }
                          `}
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="opacity-70">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" data-cursor-hover>
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                      asChild
                    >
                      {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" data-cursor-hover>
                        <ExternalLinkIcon className="h-4 w-4" />
                        Demo
                      </a> */}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={showMoreProjects}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              data-cursor-hover
            >
              Show More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
