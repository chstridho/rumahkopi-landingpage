'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/barista.jpg"
              alt="Barista profesional di Kopi Rumah"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6 text-balance">
              Tentang Kopi Rumah
            </h2>
            
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Kopi Rumah bukan sekadar tempat untuk meminum kopi. Ini adalah sanctuary yang kami dirancang dengan penuh kasih sayang untuk menciptakan pengalaman yang tak terlupakan.
            </p>

            <p className="text-muted leading-relaxed mb-6 text-lg">
              Kami percaya bahwa kopi yang baik dimulai dari biji pilihan, diproses dengan skill tinggi, dan disajikan dengan hati. Setiap barista kami adalah craftsman yang passion-nya adalah menciptakan momen istimewa untuk Anda.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Biji Kopi Premium</h3>
                  <p className="text-muted">Dipilih langsung dari petani terbaik di berbagai belahan dunia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Barista Bersertifikat</h3>
                  <p className="text-muted">Tim ahli yang passionate dalam setiap cangkir yang kami sajikan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Ambience Cozy</h3>
                  <p className="text-muted">Desain premium dengan sentuhan hangat untuk kenyamanan Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
