import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Highlights } from '@/components/highlights'
import { Attractions } from '@/components/attractions'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Attractions />
      <CTA />
      <Footer />
    </main>
  )
}
