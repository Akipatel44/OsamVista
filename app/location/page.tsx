'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { MapPin, ArrowLeft, Car } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { routesToOsamHill, formatRouteDistance } from '@/lib/routes'

export default function LocationPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-background flex items-center">
        <motion.button
          onClick={() => router.back()}
          className="absolute top-28 left-4 sm:left-6 lg:left-8 flex items-center gap-2 px-4 py-2 text-accent hover:text-accent/80 transition-colors z-20"
          whileHover={{ x: -4 }}
          title="Go back to previous page"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </motion.button>

        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin size={32} className="text-accent" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Osam Hills Location
              </h1>
            </div>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Located in Patanvav, Dhoraji Taluka, Rajkot District, Gujarat — 114 km from Rajkot City
            </p>
          </motion.div>

          {/* Map Container */}
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13424.483822709897!2d70.2763889!3d21.63916635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957f04df8ddefb5%3A0x8cc7b77a14fdd4e0!2sOsam%20Hill!5e1!3m2!1sen!2sin!4v1778132976568!5m2!1sen!2sin&layer=t"
                width="100%"
                height="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <Car size={22} className="text-accent" />
                <h3 className="text-lg font-semibold text-accent">Routes to Osam Hill</h3>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-muted">
                {routesToOsamHill.map((route) => (
                  <li key={route.from}>
                    <span className="font-medium text-foreground">{route.from}</span>
                    {' — '}
                    {formatRouteDistance(route)}
                    {route.via && (
                      <span className="block text-sm text-muted/80 mt-0.5">
                        Via {route.via.join(', ')}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-accent mb-2">Other Distances</h3>
              <ul className="space-y-2 text-muted">
                <li>Bhavnagar: 80 km</li>
                <li>Upleta: 13 km</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-accent mb-2">Location Details</h3>
              <ul className="space-y-2 text-muted">
                <li>Taluka: Dhoraji</li>
                <li>District: Rajkot</li>
                <li>State: Gujarat</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-accent mb-2">Coordinates</h3>
              <ul className="space-y-2 text-muted">
                <li>Latitude: 21.6392°</li>
                <li>Longitude: 70.2764°</li>
                <li>
                  <a
                    href="https://maps.google.com/?q=21.63916635,70.2763889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors underline"
                  >
                    Open in Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
