'use client'

import { motion, AnimatePresence } from 'framer-motion'
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
  { id: 9, src: '/images/after_rain_view.jpg', category: 'Nature', title: 'After Monsoon' },
  { id: 10, src: '/images/bhimnath_mahadev_temple.jpg', category: 'Temples', title: 'Bhimnath Temple' },
  { id: 11, src: '/images/farm_view_from_top_of_Hill.jpg', category: 'Landscape', title: 'Farm Valley View' },
  { id: 12, src: '/images/HIll_Entry_Gate_2.jpg', category: 'Architecture', title: 'Hill Entry Gate' },
  { id: 13, src: '/images/In_Ground_Big_Mahadev_Statue.jpg', category: 'Culture', title: 'Mahadev Statue' },
  { id: 14, src: '/images/MatriMatajiTemple.jpg', category: 'Temples', title: 'Matrimataji Temple' },
  { id: 15, src: '/images/stairs_between_monsoon.jpg', category: 'Architecture', title: 'Monsoon Stairs' },
  { id: 16, src: '/images/stairs_between_nature.jpg', category: 'Nature', title: 'Nature Stairs' },
  { id: 17, src: '/images/stairs_between_nature1.jpg', category: 'Nature', title: 'Nature Trail Steps' },
  { id: 18, src: '/images/summer_view.jpg', category: 'Landscape', title: 'Summer Vista' },
  { id: 19, src: '/images/sunset_from_above.jpg', category: 'Festivals', title: 'Sunset Peak' },
  { id: 20, src: '/images/tapkeshwar_waterfall.jpg', category: 'Nature', title: 'Tapkeshwar Waterfall' },
  { id: 21, src: '/images/top_view.jpg', category: 'Landscape', title: 'Hilltop Panorama' },
  { id: 22, src: '/images/undiscover_caves.jpg', category: 'Culture', title: 'Undiscovered Caves' },
  { id: 23, src: '/images/winter_view.jpg', category: 'Landscape', title: 'Winter Landscape' },
  { id: 24, src: '/images/after_rain.jpg', category: 'Nature', title: 'Post-Rain Fresh' },
]

const categories = ['All', 'Temples', 'Nature', 'Architecture', 'Landscape', 'Festivals', 'Culture']

// Lightbox Component
function Lightbox({ image, isOpen, onClose }: { image: GalleryImage | null; isOpen: boolean; onClose: () => void }) {
  const getDownloadName = (img: GalleryImage) => {
    const slug = img.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    return `osam-hills-${slug}.jpg`
  }

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[90vh] max-w-[95vw] sm:max-w-[90vw] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.title}
            width={1200}
            height={800}
            className="max-h-[60vh] sm:max-h-[85vh] w-auto rounded-lg object-contain"
            priority
          />
          <button
            onClick={onClose}
            className="absolute -right-1 sm:-right-2 -top-1 sm:-top-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background shadow-lg hover:bg-accent/90 active:scale-90 transition-all"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <div className="mt-3 sm:mt-4 text-center">
            <p className="text-base sm:text-lg font-semibold text-white">{image.title}</p>
            <p className="text-xs sm:text-sm text-accent mb-3 sm:mb-4">{image.category}</p>
            <a
              href={image.src}
              download={getDownloadName(image)}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent text-background rounded-lg font-medium text-sm sm:text-base hover:bg-accent/90 active:scale-95 transition-all"
            >
              <Download size={16} className="sm:size-4" />
              Download Original
            </a>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative Elements - Hidden on Mobile */}
      <motion.div
        className="hidden sm:block absolute top-40 right-20 w-40 sm:w-72 h-40 sm:h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 active:scale-95 ${
                selectedCategory === category
                  ? 'bg-accent text-background'
                  : 'bg-card border border-border/20 text-muted hover:border-accent/40 hover:text-accent active:border-accent/60'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${selectedCategory}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl"
              onClick={() => setLightboxImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={400 + (index % 3) * 100}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 duration-300">
                <div className="p-4 w-full">
                  <p className="text-sm font-medium text-white">{image.title}</p>
                  <p className="text-xs text-accent">{image.category}</p>
                </div>
              </div>

              {/* Zoom Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 duration-300">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox image={lightboxImage} isOpen={!!lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  )
}
