'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  isBestSeller?: boolean
  isSignature?: boolean
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Espresso Signature',
    description: 'Espresso murni dengan crema yang sempurna, shot ganda untuk rasa yang intens',
    price: 'Rp 35.000',
    image: '/espresso.jpg',
    isSignature: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Cappuccino Creamy',
    description: 'Perpaduan sempurna antara espresso dan microfoam susu yang halus',
    price: 'Rp 45.000',
    image: '/cappuccino.jpg',
    isBestSeller: true,
  },
  {
    id: 3,
    name: 'Cold Brew Refresh',
    description: 'Cold brew yang diseduh lambat selama 24 jam dengan rasa smooth dan body yang kaya',
    price: 'Rp 48.000',
    image: '/cold-brew.jpg',
  },
  {
    id: 4,
    name: 'Pastry Selection',
    description: 'Pilihan pastry segar setiap hari dari bakery partner terpercaya kami',
    price: 'Rp 25.000 - 45.000',
    image: '/pastry.jpg',
    isBestSeller: true,
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
            Menu Kami
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Koleksi minuman dan makanan pilihan yang dirancang untuk memanjakan selera Anda
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-secondary transition-colors">
            Semua Menu
          </button>
          <button className="px-6 py-2 bg-background text-primary rounded-full font-semibold hover:bg-card transition-colors border border-primary">
            Signature Menu
          </button>
          <button className="px-6 py-2 bg-background text-primary rounded-full font-semibold hover:bg-card transition-colors border border-primary">
            Best Seller
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="card-product group relative">
              {/* Badge */}
              {(item.isBestSeller || item.isSignature) && (
                <div className="absolute top-4 right-4 z-10">
                  {item.isSignature && (
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                      Signature Menu
                    </div>
                  )}
                  {item.isBestSeller && (
                    <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold inline-block flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      Best Seller
                    </div>
                  )}
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-accent text-lg">{item.price}</span>
                  <button className="btn-cta text-xs px-4 py-2 hover:scale-105 transition-transform">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3 hover:scale-105 transition-transform">
            Lihat Menu Lengkap
          </button>
        </div>
      </div>
    </section>
  )
}
