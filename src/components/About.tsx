import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
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
              About Me
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
              A passionate software developer currently pursuing my degree and building real-world applications.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Education Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-primary/10 rounded-full"
                  >
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Bachelor of Engineering (B.E.)</h3>
                    <p className="text-primary mb-1">Computer Engineering</p>
                    <p className="text-muted-foreground mb-2">
                      Nutan Maharashtra Institute of Engineering and Technology
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Batch 2028 (Currently 2nd Year)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h4 className="text-lg mb-4">Academic Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Data Structures & Algorithms</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Object-Oriented Programming</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Database Management Systems</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Software Development Life Cycle</span>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Personal Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-lg mb-4">My Journey</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate software developer currently in my 2nd year of Computer Engineering. 
                    My journey in technology is driven by curiosity and a desire to create solutions that make a difference.
                  </p>
                  <p>
                    I specialize in Android development and have hands-on experience with modern web technologies. 
                    Through various projects and hackathons, I've developed a strong foundation in software engineering principles.
                  </p>
                  <p>
                    I believe in continuous learning and staying updated with the latest technologies. 
                    My goal is to contribute to innovative projects that solve real-world problems.
                  </p>
                </div>
              </div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h4 className="text-lg mb-4">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {['English', 'Hindi'].map((language, index) => (
                    <motion.span
                      key={language}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {language}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;