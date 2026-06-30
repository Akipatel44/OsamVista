'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Zap, Mountain, Droplet, Calendar } from 'lucide-react'

interface Highlight {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}

export function Highlights() {
  const highlights: Highlight[] = [
    {
      icon: <Zap size={24} className="text-accent" />,
      title: 'Only Perlite Source',
      description: 'India\'s unique mineral wealth - Perlite mining from the sacred hills',
      image: '/images/hill_stones_greenery.jpg',
    },
    {
      icon: <Mountain size={24} className="text-accent" />,
      title: 'Sacred Aum Symbol',
      description: 'The hill forms the holy Aum symbol when viewed from above - spiritually significant',
      image: '/images/top_view.jpg',
    },
    {
      icon: <Droplet size={24} className="text-accent" />,
      title: 'Tapkeshwar Waterfall',
      description: 'Scenic seasonal waterfalls that cascade down the verdant slopes',
      image: '/images/slow_waterfalls.jpg',
    },
    {
      icon: <Calendar size={24} className="text-accent" />,
      title: 'Lok-Mela Festival',
      description: 'Annual celebration blending culture, spirituality, and community traditions',
      image: '/images/Cricket_And_Mela_Groud_Under_Osam_HIlls.jpg',
    },
  ]

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Unique Experiences
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Osam Hills?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Discover what makes Osam Hills a truly special destination for pilgrims and nature enthusiasts
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="group relative overflow-hidden rounded-2xl border border-border/20 bg-background/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-80">
                <div className="mb-4 inline-flex w-fit p-3 rounded-lg bg-accent/20 border border-accent/40">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
