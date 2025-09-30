import React from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowUp, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-xl tracking-wider cursor-pointer"
              onClick={scrollToTop}
            >
              AJAY THAKARE
            </motion.h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Junior Software Developer passionate about creating innovative solutions 
              and delivering real-world software projects.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center space-x-1 text-sm text-muted-foreground"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of coffee ☕</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Awards', id: 'awards' },
                { name: 'Projects', id: 'projects' },
                { name: 'Resume', id: 'resume' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ x: 5, color: 'var(--primary)' }}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg">Let's Connect</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:Ajaythakare500@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Ajaythakare500@gmail.com</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/ajay-thakare-a03494328"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/Maxhawkinz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Mail, href: 'mailto:Ajaythakare500@gmail.com', label: 'Email' },
                { icon: Linkedin, href: 'https://linkedin.com/in/ajay-thakare-a03494328', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/Maxhawkinz', label: 'GitHub' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Ajay Thakare. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Tech Stack Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-6 pt-6 border-t border-border"
        >
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, Tailwind CSS, and Motion. Hosted with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;