"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, CalendarIcon, CheckCircleIcon, AwardIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Certifications() {
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
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  }

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Jan 2025",
      description:
        "Certified in AWS architecture, security, networking, IAM, cost management and cloud deployment practices.",
      link: "https://www.linkedin.com/posts/durairaj-tech_aws-certified-cloud-practitioner-activity-7281740466239193089-5i-y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9zYDsBoR0rgFsc-ZVbLL4Ol-YJ3QpRQY0",
      skills: ["AWS", "Cloud Architecture", "Security", "Cost Management"],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      verified: true,
      icon: (
        <img
          src="/aws.jpeg"
          alt="AWS"
          className="h-13 w-12 object-contain object-center scale-150"
          style={{ aspectRatio: "1/1" }}
        />
      ),
    },
    {
      title: "Oracle OCI Foundations Associate",
      issuer: "Oracle",
      date: "Jan 2025",
      description:
        "Certified in Oracle Cloud services, networking, storage, compute, and security for OCI cloud operations.",
      link: "https://www.linkedin.com/posts/durairaj-tech_oracleoci-cloudexpert-cloudjourney-activity-7286763974224723968-N2C1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9zYDsBoR0rgFsc-ZVbLL4Ol-YJ3QpRQY0",
      skills: ["Oracle Cloud", "Networking", "Storage", "Security"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      verified: true,
      icon: (
        <img
          src="/oracle.png"
          alt="Oracle"
          className="h-13 w-12 object-contain object-center scale-150"
          style={{ aspectRatio: "1/1" }}
        />
      ),
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 dark:from-gray-900 dark:via-orange-950/20 dark:to-red-950/20 overflow-hidden"
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
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              Professional certifications that validate my expertise in cloud technologies
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }} className="group">
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-8 relative">
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center">
                      <motion.div
                        className={`p-4 rounded-xl ${cert.bgColor} mr-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        {cert.icon ? cert.icon : <AwardIcon className={`h-8 w-8 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>

                    {cert.verified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                        className="flex items-center gap-1 text-green-600 dark:text-green-400"
                      >
                        <CheckCircleIcon className="h-5 w-5" />
                        <span className="text-xs font-medium">Verified</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.7 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`
                        flex items-center gap-2 w-full justify-center
                        group-hover:bg-gradient-to-r group-hover:${cert.color} group-hover:text-white group-hover:border-0
                        transition-all duration-300
                      `}
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" data-cursor-hover>
                        <ExternalLinkIcon className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Continuous Professional Development</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am committed to continuous learning and professional development. These certifications represent my
                dedication to staying current with industry best practices and emerging technologies in cloud computing.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
