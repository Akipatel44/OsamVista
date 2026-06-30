'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Download, X } from 'lucide-react'

type GalleryImage = {
  id: number
  src: string
  category: string
  title: string
}

const galleryImages: GalleryImage[] = [
  // Temples
  { id: 1, src: '/images/Tapkeshwar_Temple.jpg', category: 'Temples', title: 'Tapkeshwar Temple' },
  { id: 2, src: '/images/Tapkeshwar_mahadev_shivling.jpg', category: 'Temples', title: 'Tapkeshwar Shivling' },
  { id: 3, src: '/images/tapkeswar_temple_outside_view.jpg', category: 'Temples', title: 'Temple Exterior' },
  { id: 4, src: '/images/MatriMatajiTemple.jpg', category: 'Temples', title: 'Matrimataji Temple' },
  { id: 5, src: '/images/bhimnath_mahadev_temple.jpg', category: 'Temples', title: 'Bhimnath Mahadev Temple' },
  { id: 6, src: '/images/above_temple.jpg', category: 'Temples', title: 'Temple Above' },
  { id: 7, src: '/images/above_hill_from_matrimataji_temple.jpg', category: 'Temples', title: 'Matrimataji Temple Heights' },
  { id: 8, src: '/images/above_tapkeshjwar_view.jpg', category: 'Temples', title: 'Tapkeshwar Temple View' },
  { id: 9, src: '/images/from_below_view_of_matrimataji_temple.jpg', category: 'Temples', title: 'Matrimataji Temple Below' },
  { id: 10, src: '/images/From_Below_View_of_temple.jpg', category: 'Temples', title: 'Temple Below View' },
  { id: 11, src: '/images/From_Tapkeshwar.jpg', category: 'Temples', title: 'View from Tapkeshwar' },
  { id: 12, src: '/images/matrimataji_temple_to_tapkeshwar_temple_view.jpg', category: 'Temples', title: 'Temple Trail View' },
  { id: 13, src: '/images/walking_way_towards_tapkeshwar_temple.jpg', category: 'Temples', title: 'Path to Tapkeshwar' },
  { id: 14, src: '/images/way_to_matrimataji_temple.jpg', category: 'Temples', title: 'Way to Matrimataji' },
  { id: 15, src: '/images/way_to_matrimataji_temple_2.jpg', category: 'Temples', title: 'Matrimataji Temple Path' },
  { id: 16, src: '/images/way_from_tapkeshwar_Temple%20_TO_Matrimataji_Temple.jpg', category: 'Temples', title: 'Temple to Temple Path' },

  // Nature
  { id: 17, src: '/images/tapkeshwar_waterfall.jpg', category: 'Nature', title: 'Tapkeshwar Waterfall' },
  { id: 18, src: '/images/slow_waterfalls.jpg', category: 'Nature', title: 'Waterfall Trail' },
  { id: 19, src: '/images/Monsoon_Slow_WaterFlow.png', category: 'Nature', title: 'Slow Water Flow' },
  { id: 20, src: '/images/Monsoon_scenery.jpg', category: 'Nature', title: 'Monsoon Landscape' },
  { id: 21, src: '/images/Monshoon_scenery_2.jpg', category: 'Nature', title: 'Monsoon Scenery' },
  { id: 22, src: '/images/after_rain_view.jpg', category: 'Nature', title: 'After Monsoon' },
  { id: 23, src: '/images/after_rain.jpg', category: 'Nature', title: 'Post-Rain Fresh' },
  { id: 24, src: '/images/lake_above_matrimataji_temple.jpg', category: 'Nature', title: 'Lake Above Temple' },
  { id: 25, src: '/images/lake_above_temple.jpg', category: 'Nature', title: 'Temple Lake' },
  { id: 26, src: '/images/lake_2.jpg', category: 'Nature', title: 'Lake View' },
  { id: 27, src: '/images/greenary_ground.jpg', category: 'Nature', title: 'Green Valley' },
  { id: 28, src: '/images/hill_stones_greenery2.jpg', category: 'Nature', title: 'Hill Greenery' },
  { id: 29, src: '/images/karen_flower_in_between_tapkeshwar_way.jpg', category: 'Nature', title: 'Karen Flowers on Trail' },
  { id: 30, src: '/images/close_shot_of_karen_flower.jpg', category: 'Nature', title: 'Karen Flower Close-up' },
  { id: 31, src: '/images/close_shot_of_karen_flowe_leaves.jpg', category: 'Nature', title: 'Karen Flower Leaves' },
  { id: 32, src: '/images/yellow_karen_flowersInhill.jpg', category: 'Nature', title: 'Yellow Karen Flowers' },
  { id: 33, src: '/images/SKY_WITH_LEAVES.jpg', category: 'Nature', title: 'Sky with Leaves' },
  { id: 34, src: '/images/SKY_WITH_LEAVES_2.jpg', category: 'Nature', title: 'Leaves and Sky' },
  { id: 35, src: '/images/Clear_SKY_With_Leaves.jpg', category: 'Nature', title: 'Clear Sky Through Leaves' },
  { id: 36, src: '/images/clear_sky_with_leaves_2.jpg', category: 'Nature', title: 'Open Sky Through Leaves' },
  { id: 37, src: '/images/sky_between_leaves.jpg', category: 'Nature', title: 'Sky Between Leaves' },
  { id: 38, src: '/images/SKY_WITH_CLOUD_AND_TFREE.jpg', category: 'Nature', title: 'Cloudy Sky with Trees' },
  { id: 39, src: '/images/sky_with_trees.jpg', category: 'Nature', title: 'Trees and Sky' },
  { id: 40, src: '/images/Random_Tree_With_SKY.jpg', category: 'Nature', title: 'Tree Against Sky' },
  { id: 41, src: '/images/trees.jpg', category: 'Nature', title: 'Forest Trees' },
  { id: 42, src: '/images/old_trees.jpg', category: 'Nature', title: 'Ancient Trees' },
  { id: 43, src: '/images/tree_sky_view_2.jpg', category: 'Nature', title: 'Tree Sky View' },
  { id: 44, src: '/images/tree_sky_view_3.jpg', category: 'Nature', title: 'Looking Up Through Trees' },
  { id: 45, src: '/images/above_tree_sky_farm_view.jpg', category: 'Nature', title: 'Tree Sky Farm View' },
  { id: 46, src: '/images/stairs_between_nature.jpg', category: 'Nature', title: 'Nature Stairs' },
  { id: 47, src: '/images/stairs_between_nature1.jpg', category: 'Nature', title: 'Nature Trail Steps' },
  { id: 48, src: '/images/View_From_Above%20the%20Tapkeshwar%20waterfall%20when%20water%20is%20not%20come%20in%20waterfall.jpg', category: 'Nature', title: 'Dry Tapkeshwar Falls View' },
  { id: 49, src: '/images/Vachellia%20nilotica_tree_close_shot.jpg', category: 'Nature', title: 'Vachellia Tree Close Shot' },
  { id: 50, src: '/images/Vachellia%20nilotica,_tree.jpg', category: 'Nature', title: 'Vachellia Nilotica Tree' },

  // Landscape
  { id: 51, src: '/images/from_above_view.jpg', category: 'Landscape', title: 'Aerial View' },
  { id: 52, src: '/images/above_view_from_osam.jpg', category: 'Landscape', title: 'Osam Hills Vista' },
  { id: 53, src: '/images/Osam_Hills_From_Ground.jpg', category: 'Landscape', title: 'Osam Hills from Ground' },
  { id: 54, src: '/images/Osam_Hills_From_Ground_2.jpg', category: 'Landscape', title: 'Osam Hills Ground View' },
  { id: 55, src: '/images/back_side_image_of_osam_hill.jpg', category: 'Landscape', title: 'Osam Hills Back Side' },
  { id: 56, src: '/images/top_view.jpg', category: 'Landscape', title: 'Hilltop Panorama' },
  { id: 57, src: '/images/farm_view_from_top_of_Hill.jpg', category: 'Landscape', title: 'Farm Valley View' },
  { id: 58, src: '/images/chichod_village_view_this_moutain_is_called_Bhatvaryu.png', category: 'Landscape', title: 'Bhatvaryu Mountain' },
  { id: 59, src: '/images/from_below_view_4.jpg', category: 'Landscape', title: 'Below View' },
  { id: 60, src: '/images/From_Below_View5.jpg', category: 'Landscape', title: 'Hill from Below' },
  { id: 61, src: '/images/from_below_view5%281%29.jpg', category: 'Landscape', title: 'Hill Below Angle' },
  { id: 62, src: '/images/from_below_View_7.jpg', category: 'Landscape', title: 'Looking Up the Hill' },
  { id: 63, src: '/images/view_from_random_big_stones.jpg', category: 'Landscape', title: 'View from Big Stones' },
  { id: 64, src: '/images/Straigh_Way_With_Silence_and_peace.jpg', category: 'Landscape', title: 'Peaceful Path' },
  { id: 65, src: '/images/summer_view.jpg', category: 'Landscape', title: 'Summer Vista' },
  { id: 66, src: '/images/winter_view.jpg', category: 'Landscape', title: 'Winter Landscape' },
  { id: 67, src: '/images/Sunset_From_Farm.jpg', category: 'Landscape', title: 'Sunset Over Farm' },
  { id: 68, src: '/images/Sunset_from_Farm_2.jpg', category: 'Landscape', title: 'Farm Sunset' },
  { id: 69, src: '/images/Sunset_From_Chichod.jpg', category: 'Landscape', title: 'Sunset from Chichod' },

  // Architecture
  { id: 70, src: '/images/above_hill_straight_way.jpg', category: 'Architecture', title: 'Hill Path' },
  { id: 71, src: '/images/HIll_Entry_Gate_2.jpg', category: 'Architecture', title: 'Hill Entry Gate' },
  { id: 72, src: '/images/stairs_between_monsoon.jpg', category: 'Architecture', title: 'Monsoon Stairs' },
  { id: 73, src: '/images/stairs_way_to_tapkeshwar.jpg', category: 'Architecture', title: 'Stairs to Tapkeshwar' },
  { id: 74, src: '/images/stairs_view_with_trees.jpg', category: 'Architecture', title: 'Stair View with Trees' },
  { id: 75, src: '/images/below_to_above_inside_view.jpg', category: 'Architecture', title: 'Looking Up Inside' },

  // Festivals
  { id: 76, src: '/images/Cricket_And_Mela_Groud_Under_Osam_HIlls.jpg', category: 'Festivals', title: 'Cricket & Mela Ground' },
  { id: 77, src: '/images/sunset.jpg', category: 'Festivals', title: 'Festival Sunset' },
  { id: 78, src: '/images/sunset_from_above.jpg', category: 'Festivals', title: 'Sunset Peak' },

  // Culture
  { id: 79, src: '/images/In_Ground_Big_Mahadev_Statue.jpg', category: 'Culture', title: 'Mahadev Statue' },
  { id: 80, src: '/images/Mahadev_statue_in_ground_of_osamHill.jpg', category: 'Culture', title: 'Mahadev at Osam Hill' },
  { id: 81, src: '/images/mahadev_statue_in_ground_of_osamhill2.jpg', category: 'Culture', title: 'Mahadev Statue Ground' },
  { id: 82, src: '/images/hill_stones_greenery.jpg', category: 'Culture', title: 'Stone Steps' },
  { id: 83, src: '/images/Cricket_Pitch_UnderHills.jpg', category: 'Culture', title: 'Cricket Pitch Under Hills' },
  { id: 84, src: '/images/undiscover_caves.jpg', category: 'Culture', title: 'Undiscovered Caves' },
]

const categories = ['All', 'Temples', 'Nature', 'Architecture', 'Landscape', 'Festivals', 'Culture']
const PAGE_SIZE = 18

// Gallery Card with skeleton
function GalleryCard({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false)
  const height = 400 + (index % 3) * 100

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: Math.min(index % PAGE_SIZE, 8) * 0.05 }}
      className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl"
      onClick={onClick}
    >
      {/* Skeleton overlay — fades out once image loads */}
      <div
        className={`absolute inset-0 z-10 rounded-xl bg-card transition-opacity duration-500 ${
          loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-card via-white/5 to-card" />
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <div className="h-3 w-2/3 rounded animate-pulse bg-white/10" />
          <div className="h-2 w-1/3 rounded animate-pulse bg-white/5" />
        </div>
      </div>

      <Image
        src={image.src}
        alt={image.title}
        width={600}
        height={height}
        className={`w-full object-cover transition-all duration-500 group-hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onLoad={() => setLoaded(true)}
      />

      {/* Hover gradient */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 duration-300">
        <div className="p-4 w-full">
          <p className="text-sm font-medium text-white">{image.title}</p>
          <p className="text-xs text-accent">{image.category}</p>
        </div>
      </div>

      {/* Zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 duration-300">
        <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

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
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <button
              onClick={onClose}
              className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background shadow-lg hover:bg-accent/90 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-white">{image.title}</p>
              <p className="text-sm text-accent mb-4">{image.category}</p>
              <a
                href={image.src}
                download={getDownloadName(image)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                <Download size={18} />
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
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [isLoading, setIsLoading] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const filteredImages = useMemo(() =>
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory),
    [selectedCategory]
  )

  const visibleImages = filteredImages.slice(0, visibleCount)
  const hasMore = visibleCount < filteredImages.length

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setVisibleCount(PAGE_SIZE)
  }

  useEffect(() => {
    if (!sentinelRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && hasMore && !isLoading) {
          setIsLoading(true)
          setTimeout(() => {
            setVisibleCount(prev => prev + PAGE_SIZE)
            setIsLoading(false)
          }, 800)
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [hasMore, isLoading])

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
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
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

        {/* Masonry Gallery Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visibleImages.map((image, index) => (
            <GalleryCard
              key={`${image.id}-${selectedCategory}`}
              image={image}
              index={index}
              onClick={() => setLightboxImage(image)}
            />
          ))}
        </div>

        {/* Infinite scroll sentinel + spinner */}
        <div ref={sentinelRef} className="mt-12 flex justify-center items-center h-16">
          {isLoading && (
            <motion.div
              className="w-10 h-10 rounded-full border-4 border-accent/20 border-t-accent"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>

        {!hasMore && filteredImages.length > PAGE_SIZE && (
          <p className="text-center text-muted text-sm -mt-8">
            All {filteredImages.length} photos loaded
          </p>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox image={lightboxImage} isOpen={!!lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  )
}
