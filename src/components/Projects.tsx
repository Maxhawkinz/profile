import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code, Smartphone, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Android Task Manager",
      description: "A comprehensive task management application built with Kotlin and Firebase. Features include real-time synchronization, offline support, and intuitive UI design.",
      technologies: ["Kotlin", "Android Studio", "Firebase", "Material Design"],
      category: "Mobile",
      icon: Smartphone,
      github: "https://github.com/Maxhawkinz",
      live: "#",
      image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvamVjdHxlbnwxfHx8fDE3NTg5NTI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Web Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built using modern web technologies.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      category: "Web",
      icon: Globe,
      github: "https://github.com/Maxhawkinz",
      live: "#",
      image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvamVjdHxlbnwxfHx8fDE3NTg5NTI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: 3,
      title: "Data Structure Visualizer",
      description: "Interactive web application for visualizing common data structures and algorithms. Helps students understand complex concepts through animations.",
      technologies: ["Python", "JavaScript", "HTML/CSS", "D3.js"],
      category: "Educational",
      icon: Code,
      github: "https://github.com/Maxhawkinz",
      live: "#",
      image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvamVjdHxlbnwxfHx8fDE3NTg5NTI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    },
    {
      id: 4,
      title: "Smart Chatbot Assistant",
      description: "AI-powered chatbot with natural language processing capabilities. Integrates with multiple platforms and provides intelligent responses.",
      technologies: ["Python", "NLP", "TensorFlow", "Flask"],
      category: "AI/ML",
      icon: Code,
      github: "https://github.com/Maxhawkinz",
      live: "#",
      image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvamVjdHxlbnwxfHx8fDE3NTg5NTI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    },
    {
      id: 5,
      title: "University Management System",
      description: "Comprehensive system for managing student records, courses, and faculty information. Features role-based access and reporting capabilities.",
      technologies: ["Java", "Spring Framework", "MySQL", "Bootstrap"],
      category: "Enterprise",
      icon: Code,
      github: "https://github.com/Maxhawkinz",
      live: "#",
      image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvamVjdHxlbnwxfHx8fDE3NTg5NTI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    },
    {
      id: 6,
      title: "Personal Finance Tracker",
      description: "Mobile application for tracking personal expenses and income. Features budgeting tools, expense categorization, and financial insights.",
      technologies: ["Kotlin", "Room Database", "Charts", "Material UI"],
      category: "Mobile",
      icon: Smartphone,
      github: "https://github.com/Maxhawkinz",
      live: "#",
      image: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvamVjdHxlbnwxfHx8fDE3NTg5NTI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl mb-4 relative inline-block"
            >
              Featured Projects
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
              A showcase of my best work, demonstrating my skills in various technologies and problem-solving capabilities.
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 bg-primary/10 rounded-lg"
                    >
                      <project.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h3 className="text-xl group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 bg-primary/10 rounded-lg"
                    >
                      <project.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  <h4 className="text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Maxhawkinz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;