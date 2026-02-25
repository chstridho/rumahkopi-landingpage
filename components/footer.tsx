'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Tentang', href: '#about' },
    { label: 'Kontak', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/kopirumah', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/kopirumah', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/kopirumah', label: 'Twitter' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-lg font-bold">☕</span>
              </div>
              <span className="font-serif text-2xl font-bold">Kopi Rumah</span>
            </div>
            <p className="text-primary-foreground/80">
              Sanctuary untuk pecinta kopi sejati dengan ambience cozy dan kopi premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Lokasi</h4>
            <div className="flex gap-2 text-primary-foreground/80">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p>Jl. Gatot Subroto No. 123</p>
                <p>Jakarta Selatan, 12960</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {currentYear} Kopi Rumah. Semua hak dilindungi.
            </p>
            <div className="flex gap-6 text-primary-foreground/60 text-sm">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
