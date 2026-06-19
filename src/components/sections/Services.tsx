import { FolderKanban, Globe2, Wrench } from 'lucide-react'
import { ActionWord } from '@/components/ui/ComicPanel'
import { useLanguage } from '@/context/LanguageContext'

const icons = [FolderKanban, Globe2, Wrench]
const colors = [
  { bg: 'bg-rm-blue', textColor: 'text-rm-white', accentColor: 'text-rm-yellow', actionColor: 'yellow' as const },
  { bg: 'bg-rm-yellow', textColor: 'text-rm-black', accentColor: 'text-rm-blue', actionColor: 'red' as const },
  { bg: 'bg-rm-red', textColor: 'text-rm-white', accentColor: 'text-rm-yellow', actionColor: 'blue' as const },
]
const bottomAccents = ['bg-rm-yellow', 'bg-rm-red', 'bg-rm-blue']

export function Services() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="py-24 bg-rm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 halftone opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ActionWord word={s.badgeLabel} color="red" rotate={-1} className="text-3xl mb-4 inline-block" />
          <h2 className="font-comic text-5xl sm:text-6xl text-rm-black mt-4 leading-none">{s.title}</h2>
          <div className="w-24 h-1.5 bg-rm-blue mx-auto mt-4 border border-rm-black" />
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-2 border-rm-black" style={{ boxShadow: '8px 8px 0px #0A0A0A' }}>
          {s.items.map((service, i) => {
            const Icon = icons[i]
            const c = colors[i]
            return (
              <div key={i} className={`${c.bg} ${c.textColor} p-8 relative border-r-2 border-rm-black last:border-r-0 flex flex-col gap-5`}>
                <span className="absolute top-3 right-4 font-comic text-6xl opacity-10 leading-none select-none">{i + 1}</span>
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-rm-white border-2 border-rm-black flex items-center justify-center" style={{ boxShadow: '3px 3px 0px #0A0A0A' }}>
                    <Icon className={`w-7 h-7 ${c.accentColor}`} />
                  </div>
                  <ActionWord word={service.action} color={c.actionColor} className="text-lg" />
                </div>
                <h3 className={`font-comic text-2xl leading-tight ${c.accentColor}`}>{service.title}</h3>
                <p className="text-sm leading-relaxed opacity-90 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span key={tag} className="font-comic text-xs bg-rm-black text-rm-yellow px-2 py-0.5 border border-rm-black">{tag}</span>
                  ))}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${bottomAccents[i]}`} />
              </div>
            )
          })}
        </div>

        <p className="text-center mt-8 font-comic text-rm-gray text-lg tracking-wide">{s.footer}</p>
      </div>
    </section>
  )
}
