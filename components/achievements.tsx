"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrophyIcon, StarIcon, UsersIcon, AwardIcon, TargetIcon, CrownIcon } from "lucide-react"

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const achievements = [
    {
      title: "Finalist - IIT Madras Ideas to Impact",
      description:
        "Ranked in the top 20 out of 701 ideas, advancing to NIRMAAN pre-incubation for scalable innovation.",
      icon: <CrownIcon className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      rank: "Top 20/701",
      category: "Innovation",
    },
    {
      title: "Finalist - Hackfest'24, NITTE Mangalore",
      description: "Competed among 240+ teams in a national hackathon, showcasing technical excellence and innovation.",
      icon: <TrophyIcon className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      rank: "Finalist",
      category: "Hackathon",
    },
    {
      title: "NPTEL Topper - Introduction to IoT",
      description:
        "Recognized as a topper in the NPTEL-certified 'Introduction to IoT' course with outstanding performance.",
      icon: <StarIcon className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      iconColor: "text-green-600 dark:text-green-400",
      rank: "Topper",
      category: "Academic",
    },
    {
      title: "Runner-up - Synergy 2024, PSG Coimbatore",
      description: "Secured 2nd place in a high-stakes business pitch event, demonstrating entrepreneurial skills.",
      icon: <AwardIcon className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      rank: "2nd Place",
      category: "Business",
    },
    {
      title: "Pune Metro Rail Hackathon",
      description:
        "Engineered AI-driven escalator fall detection system, enhancing passenger safety through innovation.",
      icon: <TargetIcon className="h-6 w-6" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      iconColor: "text-red-600 dark:text-red-400",
      rank: "Participant",
      category: "AI/Safety",
    },
    {
      title: "MyGov Campus Ambassador",
      description:
        "Selected by Ministry of Electronics and IT for digital initiatives, representing government programs.",
      icon: <UsersIcon className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      rank: "Ambassador",
      category: "Leadership",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-yellow-950/20 overflow-hidden"
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
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              Recognition and accomplishments throughout my academic and professional journey
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }} className="group">
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-l-4 border-transparent group-hover:border-l-4 group-hover:border-gradient-to-b group-hover:from-yellow-500 group-hover:to-orange-500">
                <CardContent className="p-6 relative">
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div
                      className={`p-3 rounded-xl ${achievement.bgColor} ${achievement.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}
                      >
                        {achievement.rank}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{achievement.category}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300 leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <motion.div
                    className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${achievement.color} opacity-10 rounded-tl-full`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "20+", label: "Achievements" },
                  { number: "15+", label: "Hackathons" },
                  { number: "10+", label: "Certifications" },
                  { number: "4", label: "Internships" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
