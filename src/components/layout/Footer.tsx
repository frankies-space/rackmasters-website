import { Zap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-rm-black border-t-4 border-rm-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rm-yellow border-2 border-rm-black flex items-center justify-center">
              <Zap className="w-4 h-4 text-rm-black fill-rm-black" />
            </div>
            <span className="font-comic text-rm-yellow text-xl tracking-wide">
              RACK<span className="text-rm-white">MASTERS</span>
            </span>
          </div>
          <p className="font-comic text-rm-gray text-sm tracking-widest text-center">{t.footer.tagline}</p>
          <p className="font-sans text-rm-gray text-xs">© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
