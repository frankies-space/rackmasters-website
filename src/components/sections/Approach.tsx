import { ActionWord } from '@/components/ui/ComicPanel'
import { useLanguage } from '@/context/LanguageContext'

const stepColors = [
  { bg: 'bg-rm-yellow', actionColor: 'yellow' as const, textColor: 'text-rm-black', descColor: 'text-rm-gray' },
  { bg: 'bg-rm-blue',   actionColor: 'blue' as const,   textColor: 'text-rm-white', descColor: 'text-rm-gray-light' },
  { bg: 'bg-rm-red',    actionColor: 'red' as const,    textColor: 'text-rm-white', descColor: 'text-rm-gray-light' },
  { bg: 'bg-rm-black',  actionColor: 'yellow' as const, textColor: 'text-rm-white', descColor: 'text-rm-gray-light' },
]
const stepNumbers = ['01', '02', '03', '04']
const stepImages = [
  { src: '/images/comic/approach_planner_man.png', alt: 'Planning and assessment' },
  { src: '/images/comic/config_blackman_monitors.png', alt: 'System design and configuration' },
  { src: '/images/comic/teamwork_trio.png', alt: 'Implementation team' },
  { src: '/images/comic/teamwork_highfive.png', alt: 'Successful delivery' },
]

export function Approach() {
  const { t } = useLanguage()
  const ap = t.approach

  return (
    <section id="approach" className="py-24 bg-rm-white relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-96 halftone-red opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ActionWord word={ap.badgeLabel} color="blue" rotate={1} className="text-2xl mb-4 inline-block" />
          <h2 className="font-comic text-5xl sm:text-6xl text-rm-black leading-none mt-4">{ap.title}</h2>
          <div className="w-24 h-1.5 bg-rm-red mx-auto mt-4 border border-rm-black" />
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-rm-black" style={{ boxShadow: '8px 8px 0px #0A0A0A' }}>
            {ap.steps.map((step, i) => {
              const c = stepColors[i]
              return (
                <div key={i} className={`${c.bg} p-6 pb-0 relative border-r-2 border-rm-black last:border-r-0 flex flex-col gap-4 overflow-hidden`}>
                  <span className="font-comic text-8xl leading-none absolute top-2 right-3 select-none" style={{ opacity: 0.22, color: i % 2 === 0 ? '#0A0A0A' : '#FAFAFA' }}>
                    {stepNumbers[i]}
                  </span>
                  <div className="self-start">
                    <ActionWord word={step.action} color={c.actionColor} />
                  </div>
                  <h3 className={`font-comic text-xl leading-tight relative z-10 ${c.textColor}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed relative z-10 ${c.descColor}`} style={{ fontFamily: 'Inter, sans-serif' }}>{step.description}</p>
                  <img
                    src={stepImages[i].src}
                    alt={stepImages[i].alt}
                    className="w-full mt-auto object-contain object-bottom block"
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              )
            })}
          </div>
          {/* Arrows rendered outside overflow-hidden cards */}
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="hidden lg:block absolute z-10"
              style={{ left: `${(i / 4) * 100}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-10 h-10 bg-rm-yellow border-2 border-rm-black flex items-center justify-center font-comic text-rm-black text-lg" style={{ boxShadow: '2px 2px 0px #0A0A0A' }}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
