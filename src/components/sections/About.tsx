import { CheckCircle2 } from 'lucide-react'
import { ActionWord } from '@/components/ui/ComicPanel'
import { useLanguage } from '@/context/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="bg-rm-black py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 halftone-yellow opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder spotlight */}
        <div className="mb-16 border-4 border-rm-yellow bg-rm-black flex flex-col sm:flex-row overflow-hidden" style={{ boxShadow: '8px 8px 0px #FFD600' }}>
          <div className="relative sm:w-48 shrink-0 bg-transparent">
            <img
              src="/images/mike_comic.png"
              alt="Mike F. Muller – Founder Rackmasters"
              className="w-full h-full object-contain object-bottom sm:h-56"
              style={{ display: 'block' }}
            />
            <div className="absolute top-2 left-2">
              <ActionWord word="FOUNDER!" color="yellow" rotate={-3} className="text-xs" />
            </div>
          </div>
          <div className="p-6 flex flex-col justify-center gap-3">
            <p className="font-comic text-rm-yellow text-2xl leading-tight">Mike F. Muller</p>
            <p className="font-sans text-rm-gray-light text-sm">Founder &amp; Lead Specialist – Rackmasters</p>
            <blockquote className="border-l-4 border-rm-yellow pl-4 font-sans text-rm-gray-light text-sm italic leading-relaxed">
              "We built Rackmasters because infrastructure deserves superhero-level precision. Every rack, every cable, every fiber run — done right the first time."
            </blockquote>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <ActionWord word={a.badgeLabel} color="yellow" rotate={-2} className="text-2xl mb-6 inline-block" />
            <h2 className="font-comic text-5xl sm:text-6xl text-rm-white leading-none mb-6">
              {a.title1}<br /><span className="text-rm-yellow">{a.title2}</span>
            </h2>
            <div className="space-y-4 text-rm-gray-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>{a.p1} <strong className="text-rm-white">{a.p1Bold}</strong>.</p>
              <p>{a.p2} <strong className="text-rm-yellow">{a.p2Bold}</strong>{a.p2Rest}</p>
              <p>{a.p3} <strong className="text-rm-white">{a.p3Bold}</strong>.</p>
            </div>
            <div className="mt-8 relative">
              <div className="relative overflow-hidden rounded-none" style={{ aspectRatio: '16/7' }}>
                <img
                  src="/images/comic/datacenter_scene1.png"
                  alt="IT engineers in datacenter"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-3 -right-3">
                <ActionWord word="SNAP!" color="blue" rotate={4} />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
              <img
                src="/images/comic/about_team1.png"
                alt="Diverse IT team collaboration"
                className="absolute inset-0 w-full h-full object-contain object-center"
              />
            </div>
            <div className="grid grid-cols-3 gap-0 border-2 border-rm-yellow" style={{ boxShadow: '5px 5px 0px #FFD600' }}>
              {a.stats.map((stat, i) => (
                <div key={i} className="border-r-2 border-rm-yellow last:border-r-0 p-5 text-center">
                  <p className={`font-comic text-3xl leading-none ${i === 0 ? 'text-rm-yellow' : i === 1 ? 'text-rm-red' : 'text-rm-blue'}`}>{stat.value}</p>
                  <p className="font-sans text-xs text-rm-gray-light mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="border-2 border-rm-white bg-rm-black" style={{ boxShadow: '5px 5px 0px #FFD600' }}>
              <div className="bg-rm-yellow px-5 py-3 border-b-2 border-rm-black">
                <p className="font-comic text-rm-black text-xl tracking-wide">{a.checklistTitle}</p>
              </div>
              <ul className="divide-y divide-rm-gray">
                {a.qualities.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 px-5 py-3">
                    <CheckCircle2 className="w-4 h-4 text-rm-yellow mt-0.5 shrink-0" />
                    <span className="text-rm-white text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
