'use client'

import { motion } from 'framer-motion'
import { Heart, Mountain, Music, Utensils } from 'lucide-react'

const experiences = [
  {
    icon: Heart,
    title: 'Spiritual Immersion',
    description: 'Connect with ancient spiritual traditions through meditation and temple rituals.',
    items: ['Sunrise prayers', 'Meditation sessions', 'Guided ceremonies'],
  },
  {
    icon: Mountain,
    title: 'Adventure Trekking',
    description: 'Explore scenic hiking trails with breathtaking panoramic views of the landscape.',
    items: ['Hill trails', 'Nature walks', 'Photo safaris'],
  },
  {
    icon: Music,
    title: 'Cultural Exchange',
    description: 'Engage with local artisans and experience traditional music, dance, and crafts.',
    items: ['Craft workshops', 'Music sessions', 'Cultural shows'],
  },
  {
    icon: Utensils,
    title: 'Culinary Journey',
    description: 'Taste authentic Gujarati cuisine prepared by local families in traditional methods.',
    items: ['Cooking classes', 'Food tastings', 'Farm visits'],
  },
]

export function Experiences() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Immersive
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Unforgettable Experiences
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Transform your journey with curated experiences designed to connect you deeply with Osam Hills.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.title}
                className="group relative p-6 rounded-xl border border-border/20 bg-card/50 backdrop-blur-sm hover:border-accent/40 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10" />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/40 mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={28} className="text-accent" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-muted text-sm mb-4">{exp.description}</p>

                {/* Items List */}
                <ul className="space-y-2">
                  {exp.items.map((item) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 + 0.2 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className="mt-6 w-full px-4 py-2 rounded-lg border border-accent/30 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
