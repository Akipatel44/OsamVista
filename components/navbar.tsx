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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant border container */}
        <div className={`rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'border border-amber-700/40 bg-black/30 backdrop-blur-sm'
            : 'border border-amber-600/30 bg-transparent backdrop-blur-none'
        }`}>
          <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5">
            {/* Logo Section with Vertical Divider */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => router.push('/')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
                title="Go to home page"
              >
                <div className="relative w-10 sm:w-12">
                  <Image
                    src="/OsamHillsLogo.png"
                    alt="Osam Hills Logo"
                    width={674}
                    height={188}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline text-white font-bold text-sm sm:text-base whitespace-nowrap"
                >
                  Osam Hills
                </motion.span>
              </motion.button>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-6 bg-gradient-to-b from-amber-600/40 to-amber-700/20" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-xs sm:text-sm font-medium text-amber-600/90 hover:text-amber-500 transition-colors uppercase tracking-wider"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="hidden sm:block px-5 sm:px-6 py-2 border border-amber-600/60 text-amber-600/90 rounded-lg font-medium hover:bg-amber-600/10 hover:border-amber-500/80 hover:text-amber-500 transition-all text-xs sm:text-sm uppercase tracking-wider"
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
              className="md:hidden text-amber-600/90"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              className="md:hidden pb-4 space-y-2 border-t border-amber-700/30 bg-black/40 backdrop-blur-sm px-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-amber-600/90 hover:text-amber-500 hover:bg-amber-600/5 rounded transition-colors uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="/contact" 
                className="block w-full mt-4 px-4 py-2 border border-amber-600/60 text-amber-600/90 rounded-lg font-medium hover:bg-amber-600/10 hover:border-amber-500/80 hover:text-amber-500 transition-all text-center uppercase tracking-wider text-sm"
              >
                Contact Us
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
