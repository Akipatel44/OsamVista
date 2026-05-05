'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users } from 'lucide-react'
import Image from 'next/image'

const attractions = [
  {
    id: 1,
    title: 'Ancient Temples',
    description: 'Centuries-old temples showcasing Gujarati architecture and spiritual heritage.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&h=400&fit=crop',
    category: 'Culture',
    visitors: '2.5K+',
    hours: '6 AM - 8 PM',
  },
  {
    id: 2,
    title: 'Natural Springs',
    description: 'Pristine natural water springs surrounded by lush hills and vegetation.',
    image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=400&fit=crop',
    category: 'Nature',
    visitors: '3K+',
    hours: '7 AM - 6 PM',
  },
  {
    id: 3,
    title: 'Cultural Villages',
    description: 'Traditional villages preserving centuries of Gujarati culture and crafts.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Community',
    visitors: '1.8K+',
    hours: 'Daylight Hours',
  },
  {
    id: 4,
    title: 'Scenic Viewpoint',
    description: 'Panoramic views of the surrounding landscape and valley vistas.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Landscape',
    visitors: '4K+',
    hours: '5 AM - 9 PM',
  },
]

const AttractionCard = ({ attraction, index }: { attraction: typeof attractions[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-card border border-border/20 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={attraction.image}
            alt={attraction.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <motion.span
            className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {attraction.category}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{attraction.title}</h3>
        <p className="text-muted text-sm mb-4 line-clamp-2">{attraction.description}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-accent" />
            <span className="text-muted text-xs">{attraction.hours}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users size={16} className="text-accent" />
            <span className="text-muted text-xs">{attraction.visitors} visitors</span>
          </div>
        </div>

        {/* Button */}
        <motion.button
          className="w-full px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors border border-accent/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}

export function Attractions() {
  return (
    <section id="attractions" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative Background */}
      <motion.div
        className="absolute -right-40 top-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0] }}
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
            Explore
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Top Attractions
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Discover the most iconic destinations and experiences that make Osam Hills unforgettable.
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <AttractionCard key={attraction.id} attraction={attraction} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
