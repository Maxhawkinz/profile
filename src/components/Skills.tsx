import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Smartphone, Globe, Settings, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "C", "C++", "Kotlin", "Python", "JavaScript"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Globe,
      title: "Web & Mobile Technologies",
      skills: ["Responsive Web Design", "Node.js", "Android Development", "Firebase", "Web Technologies"],
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Settings,
      title: "Tools & Frameworks",
      skills: ["Git", "GitHub", "Spring Framework", "Android Studio", "Agile", "JUnit"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Brain,
      title: "Software Practices",
      skills: ["SDLC", "OOP", "Debugging", "Unit Testing"],
      color: "from-pink-500/20 to-violet-500/20"
    },
    {
      icon: Database,
      title: "Others",
      skills: ["Chatbots", "Pattern Matching", "Technical Design", "Requirements Analysis"],
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
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
              Technical Skills
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
              A comprehensive toolkit for building modern applications and solving complex problems.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border border-border rounded-xl p-6 h-full hover:border-primary/20 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 bg-primary/10 rounded-lg"
                    >
                      <category.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
                      >
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl mb-8 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Java", level: 90 },
                { name: "Android Development", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "Python", level: 75 },
                { name: "Database Management", level: 70 },
                { name: "Web Technologies", level: 80 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;