'use client'

import { MapPin, Clock, Phone } from 'lucide-react'

export default function MapSection() {
  return (
    <section id="visit" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-16 text-center text-balance">
          Visit Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <div className="relative h-96 md:h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2660857453336!2d106.82502531087342!3d-6.175105893789841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e73cd6cd37%3A0x1234567890abcdef!2sKopi%20Rumah!5e0!3m2!1sid!2sid!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-8">
                Kunjungi Kami
              </h3>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-lg mb-1">Lokasi</h4>
                <p className="text-muted leading-relaxed">
                  Jl. Gatot Subroto No. 123<br />
                  Jakarta Selatan, 12960<br />
                  Indonesia
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-lg mb-1">Jam Operasional</h4>
                <p className="text-muted leading-relaxed">
                  Senin - Jumat: 07:00 - 21:00<br />
                  Sabtu - Minggu: 08:00 - 22:00<br />
                  Libur nasional: 09:00 - 20:00
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-lg mb-1">Hubungi Kami</h4>
                <p className="text-muted leading-relaxed">
                  WhatsApp: +62 812-3456-7890<br />
                  Telepon: (021) 1234-5678<br />
                  Email: hello@kopirumah.id
                </p>
              </div>
            </div>

            {/* CTA */}
            <button className="btn-cta w-full mt-4 hover:scale-105 transition-transform">
              Reservasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
