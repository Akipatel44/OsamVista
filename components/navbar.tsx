'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Temples', href: '/temples' },
    { label: 'Attractions', href: '/attractions' },
    { label: 'Festival', href: '/festival' },
    { label: 'Visitor Guide', href: '/visitor-guide' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/20'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 shadow-lg backdrop-blur-sm transition-all ${
              isScrolled
                ? 'border-accent/35 bg-background/90'
                : 'border-white/20 bg-black/45'
            }`}
          >
            <div className="relative w-12 sm:w-14">
              <Image
                src="/OsamHillsLogo.png"
                alt="Osam Hills Logo"
                width={674}
                height={188}
                priority
                className="h-auto w-full object-contain contrast-125 brightness-125 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden sm:inline text-white font-bold text-sm sm:text-base whitespace-nowrap"
            >
              Osam Hills
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-accent transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            className="hidden sm:block px-4 sm:px-6 py-2 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2 border-t border-border/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-muted hover:text-accent hover:bg-background/50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/contact" className="block w-full mt-4 px-4 py-2 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors text-center">
              Contact Us
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
