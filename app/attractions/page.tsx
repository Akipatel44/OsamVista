'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Map, Camera, Compass, Droplet } from 'lucide-react'

const attractions = [
  {
    title: 'Osam Hill Trek',
    description: 'Experience the thrilling trek up Osam Hill with winding stone steps and scenic viewpoints. The trail offers breathtaking panoramic views of the surrounding landscape and a sense of accomplishment at the hilltop.',
    image: '/images/above_hill_straight_way.jpg',
    icon: Compass,
    duration: '1-2 hours',
    difficulty: 'Moderate',
  },
  {
    title: 'Matrimataji Lake',
    description: 'A serene natural water body at the foothills of Osam Hill. The lake is surrounded by lush greenery and is a perfect spot for peaceful contemplation and photography, especially during the monsoon season.',
    image: '/images/slow_waterfalls.jpg',
    icon: Droplet,
    duration: 'Leisure Activity',
    difficulty: 'Easy',
  },
  {
    title: 'Bhim Ni Thali',
    description: 'A legendary natural rock formation believed to be a plate (thali) created by Bhima during the Mahabharata exile. The site offers stunning views and connects visitors to ancient mythology.',
    image: '/images/hill_stones_greenery.jpg',
    icon: Camera,
    duration: '30 minutes',
    difficulty: 'Easy',
  },
  {
    title: 'Osam Waterfall',
    description: 'During monsoon season, a beautiful waterfall appears on Mount Osam, creating a refreshing and picturesque spot. The cascading water through natural rock formations is a sight to behold.',
    image: '/images/after_rain.jpg',
    icon: Droplet,
    duration: '45 minutes',
    difficulty: 'Moderate',
  },
  {
    title: 'Patanvav Village Experience',
    description: 'Explore the well-planned village of Patanvav with its traditional architecture and warm community. Experience authentic Gujarati culture and hospitality in this peaceful rural setting.',
    image: '/images/greenary_ground.jpg',
    icon: Map,
    duration: 'Flexible',
    difficulty: 'Easy',
  },
  {
    title: 'Hilltop Panoramic Views',
    description: 'Reach the summit of Osam Hill to witness breathtaking 360-degree views of the surrounding hills, valleys, and the holy Aum-shaped landscape. Perfect for sunrise or sunset photography.',
    image: '/images/from_above_view.jpg',
    icon: Camera,
    duration: 'Best at dawn/dusk',
    difficulty: 'Moderate',
  },
]

export default function AttractionsPage() {
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
            Natural Attractions
          </motion.h1>
          <motion.p
            className="text-xl text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the natural wonders, scenic trails, and legendary sites of Osam Hills
          </motion.p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => {
              const Icon = attraction.icon
              return (
                <motion.div
                  key={attraction.title}
                  className="group relative h-full rounded-2xl border border-border/20 overflow-hidden bg-card/30 hover:border-accent/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={attraction.image}
                      alt={attraction.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                        <Icon size={20} className="text-accent" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {attraction.title}
                    </h3>

                    <p className="text-muted text-sm mb-4 flex-grow">
                      {attraction.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-border/20">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">Duration:</span>
                        <span className="text-accent">{attraction.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">Difficulty:</span>
                        <span className="text-accent">{attraction.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl font-bold text-accent mb-2">110 km</p>
            <p className="text-muted">From Rajkot City</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-4xl font-bold text-accent mb-2">22 km</p>
            <p className="text-muted">From Dhoraji Taluka</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-4xl font-bold text-accent mb-2">Unique</p>
            <p className="text-muted">Only Perlite Source in India</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
