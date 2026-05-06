'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-muted text-lg">Your privacy is important to us</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8 text-foreground">
              <div>
                <p className="text-sm text-muted italic">Last Updated: May 2026</p>
              </div>

              <div>
                <p className="text-lg text-white mb-6">Welcome to OsamHills.</p>
                <p className="text-foreground leading-relaxed mb-6">
                  Your privacy is important to us. This Privacy Policy explains how we collect and use information when you use our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-foreground mb-3">We may collect:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact information</li>
                  <li>Device and browser information</li>
                  <li>Website usage data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
                <p className="text-foreground mb-3">We use collected information to:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Improve website experience</li>
                  <li>Respond to inquiries</li>
                  <li>Provide tourism-related information</li>
                  <li>Monitor website performance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cookies</h2>
                <p className="text-foreground leading-relaxed">
                  Our website may use cookies to improve user experience and analyze website traffic.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
                <p className="text-foreground mb-3">We may use third-party services such as:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Google Maps</li>
                  <li>Analytics tools</li>
                  <li>Social media platforms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Changes to This Policy</h2>
                <p className="text-foreground leading-relaxed">
                  We may update this Privacy Policy at any time without prior notice.
                </p>
              </div>

              <div className="pt-8 border-t border-border/20">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <div className="space-y-2 text-foreground">
                  <p>
                    <span className="font-semibold text-white">Website:</span>{' '}
                    <a href="https://osamhills.vercel.app" className="text-accent hover:text-accent/80 transition-colors">
                      https://osamhills.vercel.app
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-white">Email:</span>{' '}
                    <a href="mailto:akshayshingala112@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                      akshayshingala112@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
