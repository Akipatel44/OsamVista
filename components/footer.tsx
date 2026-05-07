'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { label: 'Attractions', href: '/attractions' },
        { label: 'Festival', href: '/festival' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Temples', href: '/temples' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Visitor Info', href: '/visitor-guide' },
        { label: 'Getting There', href: '/visitor-guide' },
        { label: 'Best Time', href: '/visitor-guide' },
        { label: 'Safety', href: '/visitor-guide' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'About', href: '/' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Newsletter', href: '/contact' },
        { label: 'Social Media', href: '#' },
        { label: 'Reviews', href: '/contact' },
        { label: 'Feedback', href: '/contact' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="relative mt-auto bg-background/50 border-t border-border/20 overflow-hidden flex flex-col">
      {/* Decorative Background */}
      <motion.div
        className="absolute -right-40 -bottom-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          {/* Top Section */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex rounded-xl border border-accent/30 bg-background/80 p-2.5 shadow-lg">
                <Image
                  src="/OsamHillsLogo.png"
                  alt="Osam Hills Logo"
                  width={674}
                  height={188}
                  className="h-auto w-36 object-contain brightness-125 contrast-125 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] sm:w-40"
                />
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
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted text-sm hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 pb-4 border-b border-border/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted text-xs">Phone</p>
                <a href="tel:+91" className="text-accent hover:text-accent/80 transition-colors">
                  +91 XXX XXX XXXX
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted text-xs">Email</p>
                <a href="mailto:akshayshingala112@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                  akshayshingala112@gmail.com
                </a>
              </div>
            </div>

            <Link href="/location">
              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-muted text-xs">Location</p>
                  <p className="text-accent hover:text-accent/80 transition-colors text-sm font-medium">Patanvav, Rajkot, Gujarat</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Bottom Section */}
          <div className="pt-4 mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/20">
            {/* Copyright */}
            <motion.p
              className="text-muted text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
            >
              © {currentYear} Osam Hills. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
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
              viewport={{ once: false }}
              transition={{ delay: 0.7 }}
            >
              <a href="/privacy-policy" className="text-muted hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span className="text-border">•</span>
              <a href="/terms-and-conditions" className="text-muted hover:text-accent transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
