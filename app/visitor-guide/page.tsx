'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Car,
  Clock,
  MapPin,
  AlertCircle,
  Cloud,
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

export default function VisitorGuidePage() {
  const guides = [
    {
      icon: MapPin,
      title: 'How to Reach',
      items: [
        { label: 'By Road', detail: '110 km from Rajkot (2.5-3 hours), 22 km from Dhoraji (45 minutes), 13 km from Upleta (30 minutes)' },
        { label: 'Nearest Airport', detail: 'Rajkot Airport (110 km) - Connect with major cities like Ahmedabad, Delhi, Mumbai' },
        { label: 'Nearest Railway', detail: 'Dhoraji Railway Station on Rajkot-Jetalsar-Porbandar line (22 km away)' },
        { label: 'Route', detail: 'Well-maintained motorable road from Dhoraji to Patanvav through scenic routes' },
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
                    'Rajkot to Patanvav: 110 km',
                    'Dhoraji to Patanvav: 22 km',
                    'Upleta to Patanvav: 13 km',
                    'Junagadh (Girnar) to Patanvav: 26 km',
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
