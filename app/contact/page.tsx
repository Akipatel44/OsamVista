'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, HelpCircle, X, Upload } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [filePreview, setFilePreview] = useState<{ file: File; preview: string }[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [showTooltip, setShowTooltip] = useState(false)

  const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'image/heic']
  const MAX_IMAGES = 10

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format'
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Invalid phone format'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear validation error for this field
    if (validationErrors[name]) {
      const newErrors = { ...validationErrors }
      delete newErrors[name]
      setValidationErrors(newErrors)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (!files) return

    const errors: Record<string, string> = {}
    const newFiles: File[] = []
    const newPreviews: { file: File; preview: string }[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Check file format
      if (!ALLOWED_FORMATS.includes(file.type)) {
        errors.files = 'Only JPG, PNG, and HEIC formats are allowed'
        break
      }

      // Check total files limit
      if (uploadedFiles.length + newFiles.length >= MAX_IMAGES) {
        errors.files = `Maximum ${MAX_IMAGES} images allowed`
        break
      }

      newFiles.push(file)

      // Create preview
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setFilePreview((prev) => [...prev, { file, preview: event.target?.result as string }])
        }
      }
      reader.readAsDataURL(file)
    }

    if (Object.keys(errors).length === 0) {
      setUploadedFiles([...uploadedFiles, ...newFiles])
    } else {
      setValidationErrors({ ...validationErrors, ...errors })
    }

    // Reset input
    e.currentTarget.value = ''
  }

  const removeImage = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
    setFilePreview((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      setError('Please fix the errors below')
      return
    }

    setLoading(true)
    setError('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('message', formData.message)

      // Append files
      uploadedFiles.forEach((file) => {
        formDataToSend.append('files', file)
      })

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setUploadedFiles([])
      setFilePreview([])
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 XXX XXX XXXX'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@osamhills.com'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Patanvav, Rajkot', 'Dhoraji Taluka, Gujarat'],
    },
    {
      icon: MessageCircle,
      title: 'Social Media',
      details: ['Facebook: Osam Hills', 'Instagram: @osamhills'],
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
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions? We&apos;d love to hear from you. Contact us for more information about visiting Osam Hills.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  className="rounded-2xl border border-border/20 bg-card/30 p-6 text-center hover:border-accent/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border/20 bg-card/50 p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-lg bg-background/40 border text-foreground placeholder-muted/50 focus:outline-none transition-colors ${
                      validationErrors.name ? 'border-red-400/40 focus:border-red-400/40' : 'border-border/20 focus:border-accent/40'
                    }`}
                  />
                  {validationErrors.name && (
                    <p className="text-red-400 text-xs mt-1">{validationErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-lg bg-background/40 border text-foreground placeholder-muted/50 focus:outline-none transition-colors ${
                      validationErrors.email ? 'border-red-400/40 focus:border-red-400/40' : 'border-border/20 focus:border-accent/40'
                    }`}
                  />
                  {validationErrors.email && (
                    <p className="text-red-400 text-xs mt-1">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 rounded-lg bg-background/40 border text-foreground placeholder-muted/50 focus:outline-none transition-colors ${
                    validationErrors.phone ? 'border-red-400/40 focus:border-red-400/40' : 'border-border/20 focus:border-accent/40'
                  }`}
                />
                {validationErrors.phone && (
                  <p className="text-red-400 text-xs mt-1">{validationErrors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-background/40 border text-foreground placeholder-muted/50 focus:outline-none transition-colors resize-none ${
                    validationErrors.message ? 'border-red-400/40 focus:border-red-400/40' : 'border-border/20 focus:border-accent/40'
                  }`}
                />
                {validationErrors.message && (
                  <p className="text-red-400 text-xs mt-1">{validationErrors.message}</p>
                )}
              </div>

              {/* Contribute Images */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label className="block text-sm font-medium text-foreground">
                    Contribute Images
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowTooltip(!showTooltip)}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <HelpCircle size={18} />
                    </button>
                    {showTooltip && (
                      <motion.div
                        className="absolute bottom-full mb-2 right-0 bg-accent text-background text-xs p-3 rounded-lg whitespace-nowrap shadow-lg z-10"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        If the uploaded images are appropriate, they may be displayed on the website with your name and credit.
                        <div className="absolute top-full right-3 -mt-1 w-2 h-2 bg-accent transform rotate-45"></div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="border-2 border-dashed border-border/40 rounded-lg p-8 text-center hover:border-accent/40 transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/heic"
                    onChange={handleFileUpload}
                    disabled={uploadedFiles.length >= MAX_IMAGES}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                    <Upload size={32} className="text-accent" />
                    <p className="text-sm text-foreground font-medium">
                      Drag and drop images or click to select
                    </p>
                    <p className="text-xs text-muted">
                      JPG, PNG, HEIC • Max {MAX_IMAGES} images ({uploadedFiles.length}/{MAX_IMAGES})
                    </p>
                  </label>
                </div>

                {validationErrors.files && (
                  <p className="text-red-400 text-xs mt-2">{validationErrors.files}</p>
                )}

                {/* Image Previews */}
                {filePreview.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {filePreview.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative group rounded-lg overflow-hidden border border-border/20 aspect-square"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <img
                          src={item.preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <motion.p
                  className="text-center text-red-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || submitted || !isFormValid}
                className="w-full px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!loading && !submitted && isFormValid ? { scale: 1.02 } : {}}
                whileTap={!loading && !submitted && isFormValid ? { scale: 0.98 } : {}}
              >
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.p
                  className="text-center text-accent text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you for your message. We&apos;ll get back to you soon!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border/20 overflow-hidden h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0524845656893!2d70.26304!3d21.614035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3955a7b8b0b0b0b%3A0x0!2sOsam%20Hills!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-muted">Have other questions? Check our FAQ section or contact us directly</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What is the best time to visit Osam Hill?', a: 'October to February is ideal for comfortable weather. Shravan Amavashya (Aug-Sept) is the festival season with large gatherings.' },
              { q: 'How long does the trek take?', a: 'The trek typically takes 1-2 hours depending on your fitness level and pace. Multiple rest stops are available on the way.' },
              { q: 'Are there accommodation options nearby?', a: 'Yes, budget to mid-range hotels are available in Dhoraji and guesthouses in Patanvav. Book in advance during peak season.' },
              { q: 'Is the site accessible for elderly or disabled visitors?', a: 'The trek involves climbing stone steps. Assistance may be needed for elderly visitors. Alternative viewing points are available at lower levels.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-border/20 bg-background/40 p-4 hover:border-accent/40 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-semibold text-accent mb-2">{item.q}</p>
                <p className="text-muted text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
