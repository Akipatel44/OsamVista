'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const features = [
  '4 Ancient Temples',
  'Sacred Pilgrimage Site',
  'Only Perlite Source in India',
  'Mahabharata Mythology',
  'Annual Lok-Mela Festival',
  'Hiking & Trekking Routes',
]

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
              About Osam Hills
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Heart of Rajkot, Rajkot District
            </h2>
            
            <p className="text-muted text-lg mb-6">
              Located in Patanvav, Dhoraji Taluka, Rajkot District (110 km from Rajkot city), Osam Hills is a sacred pilgrimage destination 
              featuring four ancient temples. The hill itself forms the holy Aum symbol when viewed from above, making it spiritually significant 
              to both Hindus and Jains. It is also India's only source of Perlite mineral.
            </p>

            <p className="text-muted text-lg mb-8">
              Steeped in Mahabharata mythology, Osam Hills is believed to be where the five Pandavas stayed during their exile. 
              Legends speak of Bhima meeting Hidimbi here, adding layers of cultural and historical significance to this sacred landscape.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="mt-8 px-8 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore More
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border/20">
              <Image
                src="/images/bhimnath_mahadev_temple.jpg"
                alt="Ancient Indian temple architecture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-8 -right-8 p-6 bg-card border border-border/20 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-1">5K+</p>
                <p className="text-muted text-sm">Annual Visitors</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
