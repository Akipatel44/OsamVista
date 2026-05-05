'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Explore',
      links: ['Attractions', 'Events', 'Gallery', 'Experiences'],
    },
    {
      title: 'Information',
      links: ['Visitor Info', 'Getting There', 'Best Time', 'Safety'],
    },
    {
      title: 'Quick Links',
      links: ['About', 'Contact', 'Book Visit', 'FAQ'],
    },
    {
      title: 'Connect',
      links: ['Newsletter', 'Social Media', 'Reviews', 'Feedback'],
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-background/50 border-t border-border/20 overflow-hidden">
      {/* Decorative Background */}
      <motion.div
        className="absolute -right-40 -bottom-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Top Section */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-white font-bold text-lg">Osam Hills</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Discover the sacred heritage and natural beauty of Patanvav, Gujarat.
              </p>
            </motion.div>

            {/* Links */}
            {footerLinks.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted text-sm hover:text-accent transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 pb-12 border-b border-border/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted text-xs">Phone</p>
                <a href="tel:+91" className="text-accent hover:text-accent/80 transition-colors">
                  +91 XXXX XXX XXXX
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted text-xs">Email</p>
                <a href="mailto:info@osamhills.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@osamhills.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted text-xs">Location</p>
                <p className="text-foreground text-sm">Patanvav, Rajkot, Gujarat</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              className="text-muted text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              © {currentYear} Osam Hills. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-lg border border-border/20 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex gap-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <a href="#" className="text-muted hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span className="text-border">•</span>
              <a href="#" className="text-muted hover:text-accent transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
