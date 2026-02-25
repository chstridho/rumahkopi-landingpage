'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/coffee-ambience.jpg"
          alt="Coffee shop ambience"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          Selamat Datang di Kopi Rumah
        </h1>
        
        <p className="text-lg sm:text-xl mb-12 text-gray-100 text-balance max-w-2xl mx-auto">
          Sanctuary untuk pecinta kopi sejati. Dimana setiap tegukan cerita, dan setiap momen menjadi istimewa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-cta hover:scale-105 transition-transform">
            Lihat Menu
          </button>
          <button className="btn-secondary hover:scale-105 transition-transform">
            Order via WhatsApp
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  )
}
