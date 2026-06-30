'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const temples = [
  {
    name: 'Tapakeshwar Mahadev Temple',
    image: '/images/Tapkeshwar_Temple.jpg',
    deity: 'Lord Shiva',
    age: '104 Years Old',
    description: 'One of the most revered temples on Osam Hill, Tapakeshwar Mahadev is dedicated to Lord Shiva and stands as a testament to centuries of devotion. Located at a scenic spot on the hilltop, this ancient temple attracts thousands of pilgrims annually.',
    highlights: ['Ancient Architecture', 'Sacred Water Spring', 'Panoramic Views', 'Pilgrimage Site'],
  },
  {
    name: 'Bhimnath Mahadev Temple',
    image: '/images/bhimnath_mahadev_temple.jpg',
    deity: 'Lord Shiva',
    age: 'Historic',
    description: 'Situated near the legendary Bhimkund (water pool believed to be created by Bhima), this temple holds deep mythological significance. It is believed that Bhima, one of the Pandavas, stayed near this sacred spring during the exile period.',
    highlights: ['Mythological Connection', 'Natural Water Pool', 'Scenic Location', 'Shiva Temple'],
  },
  {
    name: 'Matrimataji Temple',
    image: '/images/MatriMatajiTemple.jpg',
    deity: 'Amba Devi',
    age: 'Very Old',
    description: 'The most prominent temple on Osam Hill, Matrimataji is dedicated to Amba Devi (Goddess Durga). This beautiful temple is the center of the annual Lok-Mela festival held on Shravan Amavashya, attracting huge crowds from across Gujarat and neighboring states.',
    highlights: ['Goddess Durga Temple', 'Annual Festival', 'Large Congregation', 'Sacred Darshan'],
  },
  {
    name: 'Jain Temple Complex',
    image: '/images/HIll_Entry_Gate_2.jpg',
    deity: 'Tirthankaras',
    age: 'Historic',
    description: 'The hill hosts sacred Jain temples dedicated to Lord Shantinath and Lord Rushabhdeo. The Siddhchakra Jain Temple is notable for its unique circular design representing sacred geometry, making it a spiritual hub for Jain pilgrims.',
    highlights: ['Unique Architecture', 'Sacred Geometry', 'Lord Rushabhdeo', 'Pilgrimage Destination'],
  },
]

export default function TemplesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sacred Temples
          </motion.h1>
          <motion.p
            className="text-xl text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the four ancient temples that make Osam Hill a major pilgrimage destination
          </motion.p>
        </div>
      </section>

      {/* Temples Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {temples.map((temple, index) => (
            <motion.div
              key={temple.name}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative h-96 rounded-2xl overflow-hidden border border-border/20">
                  <Image
                    src={temple.image}
                    alt={temple.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.span
                  className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                >
                  {temple.deity}
                </motion.span>

                <h2 className="text-4xl font-bold text-white mb-2">{temple.name}</h2>
                <p className="text-muted mb-6">{temple.age}</p>

                <p className="text-lg text-muted mb-8 leading-relaxed">
                  {temple.description}
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {temple.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border/20 p-8 bg-card/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Spiritual Significance</h3>
            <p className="text-muted mb-4">
              These temples collectively form a major pilgrimage circuit for both Hindus and Jains. The temples are believed to be 
              ancient, with some dating back several centuries. Devotees visit throughout the year, but the Lok-Mela festival on 
              Shravan Amavashya attracts the largest congregation.
            </p>
            <p className="text-muted">
              The mythological connection to the Mahabharata, particularly the story of Bhima meeting Hidimbi, adds layers of cultural 
              and spiritual significance to these sacred sites.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
