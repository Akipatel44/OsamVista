'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function CTA() {
  const router = useRouter()

  const handleVisit = () => {
    router.push('/visitor-guide')
  }

  const handleContact = () => {
    router.push('/contact')
  }

  const stats = [
    {
      number: '4',
      label: 'Ancient Temples',
      icon: <MapPin size={20} className="text-accent" />,
    },
    {
      number: '5K+',
      label: 'Annual Visitors',
      icon: <Users size={20} className="text-accent" />,
    },
    {
      number: '365',
      label: 'Days of Beauty',
      icon: <Calendar size={20} className="text-accent" />,
    },
  ]

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], rotate: [180, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA Box */}
        <motion.div
          className="rounded-3xl border border-accent/30 bg-gradient-to-br from-background/60 via-background/40 to-background/60 backdrop-blur-2xl p-8 sm:p-12 lg:p-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {/* Content */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ready to Experience{' '}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                Osam Hills?
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Plan your pilgrimage journey and immerse yourself in the spiritual and natural beauty of this sacred destination
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-background/40 border border-accent/20"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(79, 209, 197, 0.5)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-2">{stat.icon}</div>
                  <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">{stat.number}</p>
                  <p className="text-muted text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                onClick={handleVisit}
                className="group px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Visit planning and guide information"
              >
                Plan Your Visit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleContact}
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Contact us for more information"
              >
                Get in Touch
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>

          {/* Info Boxes */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 mt-12 pt-12 border-t border-accent/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="p-4 rounded-lg bg-background/30 border border-accent/20">
              <p className="text-muted text-sm mb-2">Best Time to Visit</p>
              <p className="text-white font-semibold">October to March</p>
            </div>

            <div className="p-4 rounded-lg bg-background/30 border border-accent/20">
              <p className="text-muted text-sm mb-2">Location</p>
              <p className="text-white font-semibold">Patanvav, Rajkot District, Gujarat</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
