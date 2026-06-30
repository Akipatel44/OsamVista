'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface AttractionCard {
  title: string
  category: string
  description: string
  image: string
  delay: number
}

export function Attractions() {
  const router = useRouter()

  const attractions: AttractionCard[] = [
    {
      title: 'Ancient Temples',
      category: 'Spiritual',
      description: 'Four sacred temples steeped in mythology and devotion, each with unique spiritual significance',
      image: '/images/Tapkeshwar_Temple.jpg',
      delay: 0,
    },
    {
      title: 'Scenic Trekking Routes',
      category: 'Adventure',
      description: 'Challenging trails through lush greenery with panoramic views of the Rajkot landscape',
      image: '/images/stairs_way_to_tapkeshwar.jpg',
      delay: 0.15,
    },
    {
      title: 'Natural Beauty',
      category: 'Nature',
      description: 'Breathtaking vistas, seasonal waterfalls, and pristine natural landscapes throughout the year',
      image: '/images/Monsoon_scenery.jpg',
      delay: 0.3,
    },
    {
      title: 'Mahabharata Heritage',
      category: 'History',
      description: 'Walk the legendary paths where the Pandavas spent their exile during the epic times',
      image: '/images/undiscover_caves.jpg',
      delay: 0.45,
    },
    {
      title: 'Hill Entry Gate',
      category: 'Landmark',
      description: 'Impressive entrance featuring traditional architecture welcoming visitors to the sacred site',
      image: '/images/HIll_Entry_Gate_2.jpg',
      delay: 0.6,
    },
    {
      title: 'Mahadev Statue',
      category: 'Art',
      description: 'Magnificent stone statue depicting the divine, an iconic landmark of Osam Hills',
      image: '/images/Mahadev_statue_in_ground_of_osamHill.jpg',
      delay: 0.75,
    },
  ]

  const handleViewAll = () => {
    router.push('/attractions')
  }

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
              Top Attractions
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Explore Osam Hills
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Immerse yourself in the perfect blend of spirituality, nature, and adventure
            </p>
          </div>

          <motion.button
            onClick={handleViewAll}
            className="group px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            title="View all attractions"
          >
            View All
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <motion.div
              key={attraction.title}
              className="group relative overflow-hidden rounded-2xl border border-border/20 bg-background/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: attraction.delay, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(79, 209, 197, 0.1)' }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm">
                  <span className="text-accent text-xs font-semibold">{attraction.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 pb-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {attraction.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {attraction.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent w-0 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
