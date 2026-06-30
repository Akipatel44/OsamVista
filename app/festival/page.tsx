'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Calendar, Music, Heart } from 'lucide-react'

export default function FestivalPage() {
  const festivalDetails = [

    {
      icon: Calendar,
      title: 'When',
      description: 'Shravan Amavashya - The last day of the dark half of the Hindu lunar calendar (typically August-September)',
    },
    {
      icon: Users,
      title: 'Who Attends',
      description: 'Pilgrims from across Gujarat and neighboring states, reaching thousands during the festival',
    },
    {
      icon: Heart,
      title: 'Main Deity',
      description: 'Matrimataji (Amba Devi) - The presiding goddess of Osam Hill, honored through prayers and rituals',
    },
    {
      icon: Music,
      title: 'Celebrations',
      description: 'Traditional rituals, music, cultural performances, food stalls, and community gatherings',
    },
  ]

  const activities = [
    {
      title: 'Temple Rituals',
      description: 'Participate in sacred ceremonies and prayers at Matrimataji Temple with devotees from across the region.',
      image: '/images/Tapkeshwar_Temple.jpg',
    },
    {
      title: 'Pilgrimage Path',
      description: 'Walk the traditional pilgrimage route to the hilltop temples, experiencing the spiritual atmosphere.',
      image: '/images/stairs_way_to_tapkeshwar.jpg',
    },
    {
      title: 'Community Meals',
      description: 'Share traditional Gujarati food with the community as part of the festival celebration.',
      image: '/images/greenary_ground.jpg',
    },
    {
      title: 'Cultural Programs',
      description: 'Enjoy traditional music, dance, and cultural performances that showcase local heritage.',
      image: '/images/Cricket_Pitch_UnderHills.jpg',
    },
    {
      title: 'Night Illumination',
      description: 'Witness the beautiful illumination of temples and surroundings during the evening celebrations.',
      image: '/images/sunset.jpg',
    },
    {
      title: 'Darshan Queue',
      description: 'Experience the spiritual atmosphere as thousands gather for the sacred darshan of Matrimataji.',
      image: '/images/from_below_view_of_matrimataji_temple.jpg',
    },
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
            Lok-Mela Festival
          </motion.h1>
          <motion.p
            className="text-xl text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Annual celebration of faith, culture, and community at Matrimataji Temple
          </motion.p>
        </div>
      </section>

      {/* Festival Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden border border-border/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/Cricket_And_Mela_Groud_Under_Osam_HIlls.jpg"
              alt="Lok-Mela Festival celebration with pilgrims"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Festival Details Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {festivalDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={detail.title}
                  className="rounded-2xl border border-border/20 bg-card/30 p-6 hover:border-accent/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{detail.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{detail.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Festival Activities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Festival Activities</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Experience the vibrant celebrations and spiritual atmosphere of Lok-Mela
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                className="group relative overflow-hidden rounded-2xl border border-border/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="p-6 bg-card/30">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border/20 bg-card/50 p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">About Lok-Mela</h2>
            
            <div className="space-y-6 text-muted">
              <p className="text-lg leading-relaxed">
                Lok-Mela (literally &quot;People&apos;s Fair&quot;) is an annual festival held on Shravan Amavashya at the Matrimataji Temple on Osam Hill. 
                This sacred gathering attracts thousands of pilgrims who ascend the hill to offer prayers to the goddess Amba Devi (Matrimataji).
              </p>

              <p className="text-lg leading-relaxed">
                The festival has been a tradition for generations, representing the deep cultural and spiritual roots of the region. It serves as a 
                platform for the community to come together, celebrate their faith, and preserve their cultural heritage.
              </p>

              <p className="text-lg leading-relaxed">
                During the festival, the hill comes alive with devotional energy. The sight of thousands of pilgrims making the journey to the hilltop, 
                the sound of sacred chants, and the feeling of collective spirituality create an unforgettable experience that draws people year after year.
              </p>

              <p className="text-lg leading-relaxed">
                The festival is not just a religious event but a celebration of community values, hospitality, and the timeless spiritual connection 
                between the people and the sacred landscape of Osam Hill.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visitor Tips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border/20 bg-background/40 p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Visitor Tips</h2>
            
            <ul className="space-y-4">
              {[
                'Plan your visit well in advance as accommodation fills up quickly during the festival',
                'Wear comfortable walking shoes for the temple trek and hilly terrain',
                'Carry sufficient water and snacks for the journey',
                'Respect the religious sentiments and customs of the pilgrimage',
                'Bring a camera to capture the spiritual atmosphere and cultural moments',
                'Check the lunar calendar for exact festival dates',
                'Arrange transport from nearby towns like Dhoraji or Rajkot in advance',
              ].map((tip, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">{tip}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
