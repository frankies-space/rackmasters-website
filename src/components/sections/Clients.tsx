import { Building2, Globe2, Network, Rocket } from 'lucide-react'
import { ActionWord } from '@/components/ui/ComicPanel'
import { useLanguage } from '@/context/LanguageContext'

const icons = [Globe2, Network, Building2, Rocket]
const badgeColors: Array<'blue' | 'red' | 'yellow' | 'blue'> = ['blue', 'red', 'yellow', 'blue']

export function Clients() {
  const { t } = useLanguage()
  const c = t.clients

  return (
    <section id="clients" className="py-24 bg-rm-yellow relative overflow-hidden">
      <div className="absolute inset-0 sunburst opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ActionWord word={c.badgeLabel} color="red" rotate={-2} className="text-2xl mb-4 inline-block" />
          <h2 className="font-comic text-5xl sm:text-6xl text-rm-black leading-none mt-4">{c.title}</h2>
          <p className="mt-4 font-sans text-rm-black text-lg max-w-2xl mx-auto">{c.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {c.items.map((client, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="bg-rm-white p-6 flex gap-5 relative" style={{ border: '3px solid #0A0A0A', boxShadow: '5px 5px 0px #0A0A0A' }}>
                <div className="w-14 h-14 bg-rm-black border-2 border-rm-black flex items-center justify-center shrink-0" style={{ boxShadow: '3px 3px 0px #FFD600' }}>
                  <Icon className="w-7 h-7 text-rm-yellow" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-comic text-xl text-rm-black leading-tight">{client.title}</h3>
                    <ActionWord word={client.badge} color={badgeColors[i]} className="text-xs shrink-0" />
                  </div>
                  <p className="text-sm text-rm-gray leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{client.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
