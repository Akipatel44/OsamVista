'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users } from 'lucide-react'
import Image from 'next/image'

const attractions = [
  {
    id: 1,
    title: 'Ancient Temples',
    description: 'Centuries-old temples showcasing Gujarati architecture and spiritual heritage.',
    image: '/images/MatriMatajiTemple.jpg',
    category: 'Culture',
    visitors: '2.5K+',
    hours: '6 AM - 8 PM',
  },
  {
    id: 2,
    title: 'Natural Springs',
    description: 'Pristine natural water springs surrounded by lush hills and vegetation.',
    image: '/images/tapkeshwar_waterfall.jpg',
    category: 'Nature',
    visitors: '3K+',
    hours: '7 AM - 6 PM',
  },
  {
    id: 3,
    title: 'Cultural Villages',
    description: 'Traditional villages preserving centuries of Gujarati culture and crafts.',
    image: '/images/farm_view_from_top_of_Hill.jpg',
    category: 'Community',
    visitors: '1.8K+',
    hours: 'Daylight Hours',
  },
  {
    id: 4,
    title: 'Scenic Viewpoint',
    description: 'Panoramic views of the surrounding landscape and valley vistas.',
    image: '/images/top_view.jpg',
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
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group bg-card border border-border/20 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 active:border-accent/60"
    >
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={attraction.image}
            alt={attraction.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <motion.span
            className="px-2 sm:px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {attraction.category}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{attraction.title}</h3>
        <p className="text-muted text-xs sm:text-sm mb-4 line-clamp-2">{attraction.description}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Clock size={14} className="sm:size-4 text-accent flex-shrink-0" />
            <span className="text-muted text-xs">{attraction.hours}</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Users size={14} className="sm:size-4 text-accent flex-shrink-0" />
            <span className="text-muted text-xs">{attraction.visitors} visitors</span>
          </div>
        </div>

        {/* Button */}
        <motion.button
          className="w-full px-4 py-2 bg-accent/10 text-accent rounded-lg text-xs sm:text-sm font-medium hover:bg-accent/20 active:bg-accent/30 transition-colors border border-accent/30 active:scale-95"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
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
      {/* Decorative Background - Hidden on Mobile */}
      <motion.div
        className="hidden sm:block absolute -right-40 top-20 w-60 sm:w-80 h-60 sm:h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {attractions.map((attraction, index) => (
            <AttractionCard key={attraction.id} attraction={attraction} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
