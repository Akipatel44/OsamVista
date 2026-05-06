'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function TermsAndConditions() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-muted text-lg">Please read carefully before using our website</p>
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
                  By accessing and using this website, you agree to the following Terms and Conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Website Purpose</h2>
                <p className="text-foreground leading-relaxed">
                  OsamHills provides tourism and travel-related informational content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use of Website</h2>
                <p className="text-foreground leading-relaxed">
                  You agree to use this website only for lawful purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Content Accuracy</h2>
                <p className="text-foreground leading-relaxed">
                  We try to keep all information accurate and updated. However, tourism details such as timings, routes, prices, and availability may change.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <p className="text-foreground leading-relaxed">
                  All logos, designs, graphics, text, and website content belong to OsamHills unless otherwise stated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. User Restrictions</h2>
                <p className="text-foreground mb-3">Users must not:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Attempt unauthorized access</li>
                  <li>Damage the website</li>
                  <li>Copy website content without permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-foreground mb-3">OsamHills is not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Travel losses</li>
                  <li>Delays</li>
                  <li>Accidents</li>
                  <li>Third-party information inaccuracies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
                <p className="text-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time.
                </p>
              </div>

              <div className="pt-8 border-t border-border/20">
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
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
