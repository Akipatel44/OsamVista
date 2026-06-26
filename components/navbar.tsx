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
          ? 'bg-white/95 shadow-md backdrop-blur-md border-b border-gray-100'
          : 'bg-white'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <motion.button
            onClick={() => router.push('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            title="Go to home page"
          >
            <div className="relative w-9 sm:w-11 h-9 sm:h-11 flex-shrink-0">
              <Image
                src="/OsamHillsLogo.png"
                alt="Osam Hills Logo"
                width={674}
                height={188}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden sm:inline text-gray-900 font-bold text-sm sm:text-base"
            >
              Osam Hills
            </motion.span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 text-sm font-medium hover:text-amber-600 hover:bg-amber-50/50 rounded-md transition-all duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.a
              href="/contact"
              className="hidden sm:block px-5 sm:px-6 py-2 bg-amber-600 text-white rounded-lg font-medium text-sm hover:bg-amber-700 transition-all duration-200 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="lg:hidden border-t border-gray-100 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 text-gray-700 text-sm font-medium hover:text-amber-600 hover:bg-amber-50/50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="block w-full px-4 py-2.5 mt-3 bg-amber-600 text-white rounded-lg font-medium text-sm hover:bg-amber-700 transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
