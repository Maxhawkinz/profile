import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, FileText, ExternalLink } from 'lucide-react';

const Awards = () => {
  const courseraRoadmap = [
    "Introduction to Software Development",
    "Programming with Java",
    "Data Structures & Algorithms",
    "Database Management",
    "Full Stack Development",
    "Generative AI",
    "Application Development"
  ];

  const hackathons = [
    {
      name: "Anveshna Hackathon",
      description: "Participated in competitive programming and problem-solving event",
      type: "Hackathon"
    },
    {
      name: "Code Arena by CodeCraft PCCOER",
      description: "Competitive coding competition focusing on algorithmic challenges",
      type: "Competition"
    }
  ];

  const otherCertifications = [
    {
      name: "Assertiveness Skill Certificate",
      description: "Professional development certification in communication and leadership",
      type: "Soft Skills"
    }
  ];

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl mb-4 relative inline-block"
            >
              Awards & Certifications
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Recognitions and certifications that showcase my commitment to continuous learning and excellence.
            </motion.p>
          </div>

          <div className="space-y-12">
            {/* Coursera Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-blue-500/10 rounded-full"
                >
                  <FileText className="w-6 h-6 text-blue-500" />
                </motion.div>
                <h3 className="text-2xl">Coursera Certificates</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseraRoadmap.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card border border-border rounded-lg p-6 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="p-2 bg-blue-500/10 rounded-lg mt-1"
                      >
                        <FileText className="w-4 h-4 text-blue-500" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-sm mb-2 group-hover:text-blue-500 transition-colors">{course}</h4>
                        <p className="text-xs text-muted-foreground">Coursera Certification</p>
                      </div>
                    </div>
                    <motion.div
                      className="mt-4 flex items-center text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hackathons & Competitions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-yellow-500/10 rounded-full"
                >
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </motion.div>
                <h3 className="text-2xl">Hackathons & Competitions</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {hackathons.map((hackathon, index) => (
                  <motion.div
                    key={hackathon.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card border border-border rounded-lg p-6 hover:border-yellow-500/20 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="p-3 bg-yellow-500/10 rounded-lg"
                      >
                        <Trophy className="w-5 h-5 text-yellow-500" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2 group-hover:text-yellow-500 transition-colors">{hackathon.name}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{hackathon.description}</p>
                        <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full">
                          {hackathon.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-green-500/10 rounded-full"
                >
                  <Award className="w-6 h-6 text-green-500" />
                </motion.div>
                <h3 className="text-2xl">Professional Development</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {otherCertifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card border border-border rounded-lg p-6 hover:border-green-500/20 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="p-3 bg-green-500/10 rounded-lg"
                      >
                        <Award className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2 group-hover:text-green-500 transition-colors">{cert.name}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{cert.description}</p>
                        <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="text-xl mb-8 text-center">Achievement Summary</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "7+", label: "Coursera Certificates", color: "text-blue-500" },
                  { number: "2", label: "Hackathons", color: "text-yellow-500" },
                  { number: "1", label: "Soft Skills Cert", color: "text-green-500" },
                  { number: "2nd", label: "Year Student", color: "text-purple-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`text-3xl ${stat.color}`}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;