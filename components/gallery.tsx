'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Download, X } from 'lucide-react'

type GalleryImage = {
  id: number
  src: string
  category: string
  title: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/above_temple.jpg', category: 'Temples', title: 'Temple View' },
  { id: 2, src: '/images/slow_waterfalls.jpg', category: 'Nature', title: 'Waterfall Trail' },
  { id: 3, src: '/images/above_hill_straight_way.jpg', category: 'Architecture', title: 'Hill Path' },
  { id: 4, src: '/images/from_above_view.jpg', category: 'Landscape', title: 'Aerial View' },
  { id: 5, src: '/images/sunset.jpg', category: 'Festivals', title: 'Festival Sunset' },
  { id: 6, src: '/images/greenary_ground.jpg', category: 'Nature', title: 'Green Valley' },
  { id: 7, src: '/images/hill_stones_greenery.jpg', category: 'Culture', title: 'Stone Steps' },
  { id: 8, src: '/images/hill_stones_greenery2.jpg', category: 'Temples', title: 'Sacred Stones' },
]

const categories = ['All', 'Temples', 'Nature', 'Architecture', 'Landscape', 'Festivals', 'Culture']

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const getDownloadName = (image: GalleryImage) => {
    const slug = image.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    return `osam-hills-${slug}.jpg`
  }

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Visual Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Immerse yourself in the visual beauty and cultural richness of Osam Hills.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-background'
                  : 'bg-card border border-border/20 text-muted hover:border-accent/40 hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={`Gallery ${image.id}`}
                fill
                className="object-cover"
              />
              
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div>
                  <p className="text-white font-semibold">{image.title}</p>
                  <p className="text-muted text-sm">Click to preview</p>
                </div>

                <a
                  href={image.src}
                  download={getDownloadName(image)}
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-xs font-semibold text-background hover:bg-accent/90 transition-colors"
                  aria-label={`Download ${image.title}`}
                >
                  <Download size={14} />
                  Download
                </a>
              </motion.div>

              {/* Border on Hover */}
              <motion.div
                className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt="Gallery full view"
              fill
              className="object-cover"
            />
            
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
              <p className="text-accent font-semibold">{selectedImage.title}</p>
              <p className="text-muted text-sm">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
