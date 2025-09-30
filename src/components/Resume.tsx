import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl mb-4 relative inline-block"
            >
              Resume
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
              Download or view my complete professional resume with detailed experience and qualifications.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-primary/10 rounded-full"
                  >
                    <FileText className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl">Resume Preview</h3>
                </div>

                {/* Resume Mockup */}
                <div className="bg-background border border-border rounded-lg p-6 min-h-[400px]">
                  <div className="space-y-4">
                    <div className="text-center border-b border-border pb-4">
                      <h4 className="text-lg">AJAY THAKARE</h4>
                      <p className="text-sm text-muted-foreground">Junior Software Developer</p>
                      <p className="text-xs text-muted-foreground">Ajaythakare500@gmail.com | +91-XXXXX-XXXXX</p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-sm uppercase tracking-wide border-b border-border pb-1">Education</h5>
                      <div className="text-xs space-y-1">
                        <p className="font-medium">B.E. Computer Engineering</p>
                        <p className="text-muted-foreground">NMIET • 2025-2028 • Currently 2nd Year</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-sm uppercase tracking-wide border-b border-border pb-1">Skills</h5>
                      <div className="text-xs space-y-1">
                        <p><span className="font-medium">Languages:</span> Java, C, C++, Kotlin, Python, JavaScript</p>
                        <p><span className="font-medium">Technologies:</span> Android, Node.js, Firebase, Spring Framework</p>
                        <p><span className="font-medium">Tools:</span> Git, GitHub, Android Studio, JUnit</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-sm uppercase tracking-wide border-b border-border pb-1">Certifications</h5>
                      <div className="text-xs space-y-1">
                        <p>• Coursera: Java Programming, DSA, Full Stack Development</p>
                        <p>• Hackathon Participation: Anveshna, Code Arena</p>
                        <p>• Professional Skills: Assertiveness Certificate</p>
                      </div>
                    </div>

                    <div className="text-center text-xs text-muted-foreground pt-4">
                      <p>... View complete resume for detailed information ...</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Download Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Download Button */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-green-500/10 rounded-full"
                  >
                    <Download className="w-6 h-6 text-green-500" />
                  </motion.div>
                  <h3 className="text-xl">Download Resume</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  Get a PDF copy of my complete resume with all details, projects, and contact information.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF Resume</span>
                </motion.button>

                <div className="mt-4 flex items-center justify-center text-xs text-muted-foreground">
                  <span>Last updated: December 2024 • 2 pages • 1.2MB</span>
                </div>
              </motion.div>

              {/* View Online Button */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-blue-500/10 rounded-full"
                  >
                    <Eye className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  <h3 className="text-xl">View Online</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  View my resume in a new tab with full formatting and interactive elements.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Full Resume</span>
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg mb-4">Resume Highlights</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Experience", value: "2+ Years" },
                    { label: "Projects", value: "6+" },
                    { label: "Certifications", value: "8+" },
                    { label: "Languages", value: "6+" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="text-lg text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Additional Resume Formats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg mb-4">Need a specific format?</h4>
              <p className="text-muted-foreground mb-6">
                I can provide my resume in different formats based on your requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { format: "PDF", description: "Standard format" },
                  { format: "Word", description: "Editable document" },
                  { format: "Plain Text", description: "ATS-friendly" },
                  { format: "LinkedIn", description: "Professional profile" }
                ].map((format, index) => (
                  <motion.button
                    key={format.format}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <div className="text-sm">{format.format}</div>
                    <div className="text-xs opacity-75">{format.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;