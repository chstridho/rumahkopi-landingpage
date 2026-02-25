'use client'

import { useState } from 'react'
import { MessageCircle, Instagram, Mail, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
            Hubungi Kami
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Ada pertanyaan atau ingin berbagi feedback? Kami siap mendengarkan dan melayani Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Cara Menghubungi Kami
            </h3>

            {/* WhatsApp */}
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-6 rounded-xl bg-background hover:bg-muted transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-lg mb-1">WhatsApp</h4>
                <p className="text-muted">
                  Chat langsung dengan tim kami untuk order atau pertanyaan
                </p>
                <p className="text-accent font-semibold mt-2">+62 812-3456-7890</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/kopirumah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-6 rounded-xl bg-background hover:bg-muted transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Instagram size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-lg mb-1">Instagram</h4>
                <p className="text-muted">
                  Follow akun kami untuk update menu dan special moments
                </p>
                <p className="text-pink-500 font-semibold mt-2">@kopirumah</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@kopirumah.id"
              className="flex gap-4 p-6 rounded-xl bg-background hover:bg-muted transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-lg mb-1">Email</h4>
                <p className="text-muted">
                  Kirim pesan untuk corporate inquiries atau partnership
                </p>
                <p className="text-blue-500 font-semibold mt-2">hello@kopirumah.id</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Kirim Pesan
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-white" />
                </div>
                <h4 className="font-semibold text-primary text-lg mb-2">Terima kasih!</h4>
                <p className="text-muted">
                  Pesan Anda telah terkirim. Kami akan merespon dalam waktu 24 jam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card text-primary border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Anda"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card text-primary border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card text-primary border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cta w-full hover:scale-105 transition-transform"
                >
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
