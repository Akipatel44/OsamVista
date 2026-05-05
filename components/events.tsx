'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, MapPin } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Spring Festival',
    date: 'March 15-20',
    description: 'Celebrate the season with traditional music, dance, and local cuisine.',
    attendees: '2,000+',
    location: 'Main Temple Grounds',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 2,
    title: 'Monsoon Pilgrimage',
    date: 'July 10-18',
    description: 'Experience spiritual renewal during the sacred monsoon season.',
    attendees: '3,500+',
    location: 'Hilltop Shrines',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 3,
    title: 'Harvest Celebration',
    date: 'October 5-12',
    description: 'Join the community in giving thanks for a bountiful harvest.',
    attendees: '4,000+',
    location: 'Village Squares',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 4,
    title: 'Winter Lights Festival',
    date: 'December 20-27',
    description: 'Witness the hills illuminated with thousands of traditional lamps.',
    attendees: '5,000+',
    location: 'Entire Osam Hills',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/30',
  },
]

export function Events() {
  return (
    <section id="events" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute -left-40 bottom-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            Calendar
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cultural Events
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Experience the vibrant celebrations and spiritual events that define Osam Hills throughout the year.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20" />

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute top-6 left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-accent border-4 border-background"
                    whileInView={{ scale: [1, 1.3, 1] }}
                    transition={{ delay: 0.3 }}
                  />
                </div>

                {/* Event Card */}
                <motion.div
                  className={`relative group p-6 rounded-xl border ${event.borderColor} bg-gradient-to-br ${event.color} backdrop-blur-sm hover:border-accent/50 transition-all duration-300`}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  {/* Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-3 border border-accent/40">
                    {event.date}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-muted text-sm mb-4">{event.description}</p>

                  {/* Info Grid */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-accent flex-shrink-0" />
                      <span className="text-foreground">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-accent flex-shrink-0" />
                      <span className="text-foreground">{event.attendees} expected</span>
                    </div>
                  </div>

                  {/* Button */}
                  <motion.button
                    className="mt-4 px-4 py-2 bg-accent/20 text-accent rounded-lg text-sm font-medium hover:bg-accent/30 transition-colors border border-accent/40"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
