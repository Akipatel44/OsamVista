'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out to plan your perfect visit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 XXXX XXX XXXX',
                color: 'from-blue-500/20 to-cyan-500/20',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'info@osamhills.com',
                color: 'from-purple-500/20 to-pink-500/20',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Patanvav, Bhavnagar, Gujarat',
                color: 'from-green-500/20 to-emerald-500/20',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className={`p-6 rounded-xl border border-border/20 bg-gradient-to-br ${item.color} backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-muted text-sm">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 p-8 rounded-xl border border-border/20 bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/20 text-foreground placeholder-muted focus:border-accent/50 focus:outline-none transition-colors"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/20 text-foreground placeholder-muted focus:border-accent/50 focus:outline-none transition-colors"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXX XXXX XX"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/20 text-foreground placeholder-muted focus:border-accent/50 focus:outline-none transition-colors"
                    {...register('phone')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Your inquiry subject"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/20 text-foreground placeholder-muted focus:border-accent/50 focus:outline-none transition-colors"
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/20 text-foreground placeholder-muted focus:border-accent/50 focus:outline-none transition-colors resize-none"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="p-4 rounded-lg bg-accent/20 border border-accent/40 text-accent text-sm font-medium text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
