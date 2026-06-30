'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Car,
  Clock,
  MapPin,
  AlertCircle,
  Utensils,
  Footprints,
  Droplets,
  Sun,
  Backpack,
  Smartphone,
  Map,
  HeartPulse,
  Camera,
} from 'lucide-react'
import { routesToOsamHill, formatRouteDistance } from '@/lib/routes'

export default function VisitorGuidePage() {
  const guides = [
    {
      icon: MapPin,
      title: 'How to Reach',
      items: [
        { label: 'By Road', detail: 'Well-maintained motorable roads connect Osam Hill to Rajkot (114 km), Gondal (71.2 km), Virpur (54 km), Jetpur (41.2 km), and Dhoraji (23.4 km)' },
        { label: 'Nearest Airport', detail: 'Rajkot Airport (114 km) — connect with major cities like Ahmedabad, Delhi, and Mumbai' },
        { label: 'Nearest Railway', detail: 'Dhoraji Railway Station on the Rajkot-Jetalsar-Porbandar line (23.4 km away)' },
        { label: 'Main Route', detail: 'From Rajkot, the route passes through Gondal, Virpur, Jetpur, and Dhoraji before reaching Osam Hill at Patanvav' },
      ],
    },
    {
      icon: Clock,
      title: 'Best Time to Visit',
      items: [
        { label: 'Ideal Season', detail: 'October to February - Pleasant weather, clear skies, perfect for trekking' },
        { label: 'Monsoon', detail: 'July to September - Lush greenery, waterfalls, scenic beauty (trekking challenging)' },
        { label: 'Summer', detail: 'March to June - Hot weather, but fewer crowds and clear panoramic views' },
        { label: 'Festival Time', detail: 'Shravan Amavashya (Aug-Sept) - Massive gathering, book accommodation early' },
      ],
    },
    {
      icon: Utensils,
      title: 'Food & Accommodation',
      items: [
        { label: 'Local Food', detail: 'Authentic Gujarati cuisine available in Dhoraji and Patanvav village' },
        { label: 'Accommodation', detail: 'Budget to mid-range hotels in Dhoraji; homestays and guesthouses in Patanvav' },
        { label: 'Restaurants', detail: 'Basic vegetarian food options in the area; carry snacks for the trek' },
        { label: 'Recommendations', detail: 'Book accommodations in advance, especially during festival season' },
      ],
    },
    {
      icon: AlertCircle,
      title: 'Safety & Etiquette',
      items: [
        { label: 'Temple Rules', detail: 'Remove footwear before entering temples, dress modestly, respect rituals' },
        { label: 'Safety', detail: 'Trek during daylight, carry water, wear proper shoes, inform someone of your plans' },
        { label: 'Local Customs', detail: 'Photography inside temples may be restricted; ask permission before photographing' },
        { label: 'Emergency', detail: 'Basic medical facilities in Dhoraji; larger hospitals in Rajkot city' },
      ],
    },
  ]

  const essentials = [
    { icon: Footprints, text: 'Comfortable trekking shoes' },
    { icon: Droplets, text: 'Sufficient water bottles' },
    { icon: Sun, text: 'Hat or cap for sun protection' },
    { icon: Backpack, text: 'Backpack with essentials' },
    { icon: Smartphone, text: 'Charged mobile phone' },
    { icon: Map, text: 'Map or GPS navigation' },
    { icon: HeartPulse, text: 'Basic first aid kit' },
    { icon: Camera, text: 'Camera for memories' },
  ]

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
            Visitor Guide
          </motion.h1>
          <motion.p
            className="text-xl text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to know to plan your visit to Osam Hills
          </motion.p>
        </div>
      </section>

      {/* Scenic Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative h-72 rounded-2xl overflow-hidden border border-border/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/images/Straigh_Way_With_Silence_and_peace.jpg"
              alt="Peaceful walking path at Osam Hills"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <p className="text-accent text-sm font-medium mb-2 uppercase tracking-wider">Plan Your Visit</p>
                <h2 className="text-3xl font-bold text-white max-w-sm leading-snug">
                  Your Complete Guide to Osam Hills
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasons at Osam Hills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-3">
              When to Visit
            </span>
            <h2 className="text-3xl font-bold text-white">Osam Hills Through the Seasons</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: 'Winter', months: 'Oct – Feb', note: 'Best for trekking', image: '/images/winter_view.jpg' },
              { label: 'Monsoon', months: 'Jul – Sep', note: 'Waterfalls & greenery', image: '/images/Monsoon_scenery.jpg' },
              { label: 'Summer', months: 'Mar – Jun', note: 'Clear panoramic views', image: '/images/summer_view.jpg' },
              { label: 'Festival', months: 'Shravan Amavashya', note: 'Lok-Mela pilgrimage', image: '/images/Cricket_And_Mela_Groud_Under_Osam_HIlls.jpg' },
            ].map((season, index) => (
              <motion.div
                key={season.label}
                className="group relative overflow-hidden rounded-2xl border border-border/20 hover:border-accent/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={season.image}
                    alt={`${season.label} at Osam Hills`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="p-4 bg-card/30">
                  <h3 className="text-lg font-bold text-white">{season.label}</h3>
                  <p className="text-accent text-sm font-medium">{season.months}</p>
                  <p className="text-muted text-sm mt-1">{season.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {guides.map((guide, guideIndex) => {
            const Icon = guide.icon
            return (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{guide.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {guide.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.label}
                      className="rounded-2xl border border-border/20 bg-card/30 p-6 hover:border-accent/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <h3 className="text-lg font-semibold text-accent mb-2">{item.label}</h3>
                      <p className="text-muted leading-relaxed">{item.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Routes to Osam Hill */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                <Car size={28} className="text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-white">Routes to Osam Hill</h2>
            </div>
            <p className="text-muted mb-8 max-w-2xl">
              Driving distances and approximate travel times from nearby towns
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {routesToOsamHill.map((route, index) => (
                <motion.div
                  key={route.from}
                  className="rounded-2xl border border-border/20 bg-background/40 p-6 hover:border-accent/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-accent mb-2">
                    {route.from} to Osam Hill
                  </h3>
                  <p className="text-muted leading-relaxed mb-3">
                    {formatRouteDistance(route)}
                  </p>
                  {route.via && (
                    <p className="text-sm text-muted/80">
                      Via {route.via.join(', ')}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packing Essentials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Packing Essentials</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Make sure you have these items for a comfortable and safe visit
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {essentials.map((item, index) => {
              const EssentialIcon = item.icon

              return (
                <motion.div
                  key={item.text}
                  className="rounded-xl border border-border/20 bg-background/40 p-4 text-center hover:border-accent/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="mb-2 flex justify-center">
                    <EssentialIcon size={30} className="text-accent" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border/20 bg-card/50 p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Quick Facts</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Distances</h3>
                <ul className="space-y-2">
                  {[
                    ...routesToOsamHill.map((route) => `${route.from} to Osam Hill: ${formatRouteDistance(route)}`),
                    'Upleta to Osam Hill: 13 km',
                    'Junagadh (Girnar) to Osam Hill: 26 km',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Highlights</h3>
                <ul className="space-y-2">
                  {[
                    'Only Perlite source in India',
                    'Holy Aum-shaped hill',
                    'Mahabharata connection',
                    '4 Ancient temples',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Help Planning Your Visit?</h2>
            <p className="text-muted text-lg mb-8">
              Contact us for personalized assistance and travel recommendations
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
