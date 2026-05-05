'use client'

import { motion } from 'framer-motion'
import { Calendar, DollarSign, MapPin, Info } from 'lucide-react'

const infoCards = [
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    content: 'October to March',
    description: 'Pleasant weather and clear skies make these months ideal for exploration.',
  },
  {
    icon: MapPin,
    title: 'How to Reach',
    content: 'Multiple Routes Available',
    description: 'Nearest city: Bhavnagar (80km). Accessible by road, rail, and air.',
  },
  {
    icon: DollarSign,
    title: 'Entry & Packages',
    content: 'Starting from ₹200',
    description: 'Various packages available for temples, guided tours, and experiences.',
  },
  {
    icon: Info,
    title: 'Essential Info',
    content: 'Plan Your Visit',
    description: 'Accommodations, food, guides, and safety information provided.',
  },
]

export function VisitorInfo() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute -right-40 -top-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ rotate: [0, 90, 180] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Planning
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visitor Information
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Everything you need to know to plan your perfect visit to Osam Hills.
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                className="group relative p-6 rounded-xl border border-border/20 bg-card hover:border-accent/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Icon size={32} className="text-accent mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                <p className="text-accent font-semibold mb-2">{card.content}</p>
                <p className="text-muted text-sm">{card.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Info Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Accommodation & Food */}
          <motion.div
            className="p-8 rounded-xl border border-border/20 bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Stay & Dine</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-accent font-semibold mb-2">Accommodations</h4>
                <p className="text-muted text-sm">
                  From budget guest houses to premium resorts. Traditional homestays available for authentic experience.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-semibold mb-2">Local Cuisine</h4>
                <p className="text-muted text-sm">
                  Try authentic Gujarati food, fresh local produce, and traditional recipes passed down through generations.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-semibold mb-2">Dining Options</h4>
                <p className="text-muted text-sm">
                  From roadside dhabas to organized restaurants offering regional and international cuisines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Safety & Tips */}
          <motion.div
            className="p-8 rounded-xl border border-border/20 bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Safety & Tips</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-accent font-semibold mb-2">Health & Safety</h4>
                <p className="text-muted text-sm">
                  Medical facilities available. Carry water, sunscreen, and appropriate clothing for the climate.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-semibold mb-2">Local Guidelines</h4>
                <p className="text-muted text-sm">
                  Respect temple customs, maintain cleanliness, and follow local authority instructions.
                </p>
              </div>
              <div>
                <h4 className="text-accent font-semibold mb-2">Best Practices</h4>
                <p className="text-muted text-sm">
                  Hire certified guides, use registered transport, and carry necessary identification documents.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
