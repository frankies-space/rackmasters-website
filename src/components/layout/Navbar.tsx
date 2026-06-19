import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.approach, href: '#approach' },
    { label: t.nav.clients, href: '#clients' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-rm-black border-b-4 border-rm-yellow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-rm-yellow border-2 border-rm-black flex items-center justify-center" style={{ boxShadow: '2px 2px 0px #FFD600' }}>
              <Zap className="w-5 h-5 text-rm-black fill-rm-black" />
            </div>
            <span className="font-comic text-rm-yellow text-2xl tracking-wide leading-none">
              RACK<span className="text-rm-white">MASTERS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-comic text-rm-white hover:text-rm-yellow px-4 py-2 text-lg tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center border-2 border-rm-yellow overflow-hidden" style={{ boxShadow: '2px 2px 0px #FFD600' }}>
              <button
                onClick={() => setLang('nl')}
                className={`font-comic text-sm px-3 py-1 transition-colors ${
                  lang === 'nl'
                    ? 'bg-rm-yellow text-rm-black'
                    : 'bg-transparent text-rm-yellow hover:bg-rm-yellow hover:text-rm-black'
                }`}
              >
                NL
              </button>
              <div className="w-px h-5 bg-rm-yellow" />
              <button
                onClick={() => setLang('en')}
                className={`font-comic text-sm px-3 py-1 transition-colors ${
                  lang === 'en'
                    ? 'bg-rm-yellow text-rm-black'
                    : 'bg-transparent text-rm-yellow hover:bg-rm-yellow hover:text-rm-black'
                }`}
              >
                EN
              </button>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center border-2 border-rm-yellow overflow-hidden">
              <button
                onClick={() => setLang('nl')}
                className={`font-comic text-xs px-2 py-0.5 transition-colors ${
                  lang === 'nl' ? 'bg-rm-yellow text-rm-black' : 'bg-transparent text-rm-yellow'
                }`}
              >
                NL
              </button>
              <div className="w-px h-4 bg-rm-yellow" />
              <button
                onClick={() => setLang('en')}
                className={`font-comic text-xs px-2 py-0.5 transition-colors ${
                  lang === 'en' ? 'bg-rm-yellow text-rm-black' : 'bg-transparent text-rm-yellow'
                }`}
              >
                EN
              </button>
            </div>
            <button
              className="text-rm-white hover:text-rm-yellow p-1"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t-2 border-rm-yellow py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-comic text-rm-white hover:text-rm-yellow px-2 py-2 text-xl tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="mt-2 self-start"
              onClick={() => {
                setOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t.nav.cta}
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
