import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ActionWord } from '@/components/ui/ComicPanel'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative overflow-hidden bg-rm-yellow min-h-[92vh] flex items-center">
      <div className="absolute inset-0 sunburst opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 halftone opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-2 bg-rm-red" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ActionWord word="POW!" color="red" rotate={-3} />
              <span className="font-comic text-rm-black text-lg tracking-wide">{h.kicker}</span>
            </div>

            <h1 className="font-comic leading-none text-rm-black">
              <span className="block text-6xl sm:text-7xl lg:text-8xl" style={{ WebkitTextStroke: '2px #0A0A0A' }}>
                {h.headline1}
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl text-rm-blue" style={{ WebkitTextStroke: '2px #0A0A0A' }}>
                {h.headline2}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 bg-rm-black text-rm-yellow px-3 py-1 inline-block" style={{ boxShadow: '4px 4px 0 #1B3FBE' }}>
                {h.headline3}
              </span>
            </h1>

            <p className="text-rm-black text-lg font-medium max-w-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {h.sub}
            </p>

            <div className="flex items-center gap-2 font-comic text-rm-black text-lg tracking-wider">
              <Star className="w-4 h-4 fill-rm-black" />
              <span>{h.tagline}</span>
              <Star className="w-4 h-4 fill-rm-black" />
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {h.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {h.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg" style={{ aspectRatio: '4/3' }}>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/images/comic/hero_team_diverse2.png"
                  alt="Diverse IT superhero team"
                  className="absolute inset-0 w-full h-full object-contain object-bottom"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-rm-red border-2 border-rm-black px-3 py-1 z-10" style={{ boxShadow: '2px 2px 0px #0A0A0A' }}>
                <span className="font-comic text-white text-sm">{h.panelLabel}</span>
              </div>
              <div className="absolute -bottom-5 -right-5 z-10">
                <ActionWord word="BOOM!" color="blue" rotate={3} className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 zigzag-divider" />
    </section>
  )
}
