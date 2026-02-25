'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Menu from '@/components/menu'
import MapSection from '@/components/map-section'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  )
}
