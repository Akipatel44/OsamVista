'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()

  const handleStartExploring = () => {
    router.push('/gallery')
  }

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <Image
          src="/images/above_view_from_osam.jpg"
          alt="Osam Hills aerial landscape"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-background/70" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], rotate: [180, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-accent text-sm font-medium">Welcome to Osam Hills</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Discover Sacred{' '}
          <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
            Heritage
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Explore the pristine beauty of Patanvav, Gujarat. A journey through ancient temples, 
          cultural traditions, and breathtaking natural landscapes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            onClick={handleStartExploring}
            className="group px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Navigate to gallery to explore images of Osam Hills"
          >
            Start Exploring
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={handleLearnMore}
            className="px-8 py-4 border border-accent/50 text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll down to learn more about Osam Hills"
          >
            Learn More
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
