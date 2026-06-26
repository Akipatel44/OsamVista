'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter()
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
      className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Centered container with blur background box */}
      <div className="px-4 sm:px-6">
        <motion.div
          className={`max-w-5xl mx-auto rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'bg-background/40 border-accent/30 backdrop-blur-2xl shadow-2xl'
              : 'bg-background/20 border-accent/20 backdrop-blur-xl'
          }`}
          whileHover={{ boxShadow: isScrolled ? '0 25px 50px rgba(79, 209, 197, 0.15)' : '0 20px 40px rgba(79, 209, 197, 0.1)' }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            {/* Logo */}
            <motion.button
              onClick={() => router.push('/')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              title="Go to home page"
            >
              <div className="relative w-10 sm:w-12">
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
                className="inline text-white font-bold text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Osam Hills
              </motion.span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-xs lg:text-sm text-muted hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="hidden sm:block px-3 sm:px-5 lg:px-6 py-2 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors text-xs sm:text-sm"
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
              className="md:hidden pb-4 px-4 sm:px-6 space-y-2 border-t border-accent/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted hover:text-accent hover:bg-accent/10 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="block w-full mt-3 px-3 py-2 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors text-center text-sm">
                Contact Us
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  )
}
