import { Target, Eye } from 'lucide-react'
import { ActionWord } from '@/components/ui/ComicPanel'
import { useLanguage } from '@/context/LanguageContext'

export function MissionVision() {
  const { t } = useLanguage()
  const m = t.missionVision

  return (
    <section className="py-24 bg-rm-offwhite relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 halftone opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-comic text-5xl sm:text-6xl text-rm-black leading-none">{m.title}</h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-1 w-16 bg-rm-red border border-rm-black" />
            <ActionWord word={m.badgeLabel} color="yellow" rotate={0} className="text-base" />
            <div className="h-1 w-16 bg-rm-blue border border-rm-black" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-4 border-rm-black" style={{ boxShadow: '10px 10px 0px #0A0A0A' }}>
          {/* Mission */}
          <div className="bg-rm-blue p-10 pb-0 relative border-r-4 border-rm-black flex flex-col">
            <div className="absolute top-0 left-0 w-32 h-32 sunburst-blue opacity-30 rounded-br-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-rm-yellow border-2 border-rm-black flex items-center justify-center shrink-0" style={{ boxShadow: '3px 3px 0px #0A0A0A' }}>
                  <Target className="w-6 h-6 text-rm-black" />
                </div>
                <ActionWord word={m.missionBadge} color="yellow" rotate={-2} className="text-xl" />
              </div>
              <h3 className="font-comic text-3xl text-rm-yellow leading-tight mb-5">{m.missionTitle}</h3>
              <p className="text-rm-white leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {m.missionText} <strong className="text-rm-yellow">{m.missionTextBold}</strong> {m.missionTextRest}
              </p>
              <blockquote className="mt-6 border-l-4 border-rm-yellow pl-4 font-comic text-rm-yellow text-lg italic">{m.missionQuote}</blockquote>
            </div>
            <img
              src="/images/comic/mission_cables.webp"
              alt="Precision cable work"
              className="mt-auto w-full object-contain object-bottom"
              style={{ maxHeight: '208px' }}
            />
          </div>

          {/* Vision */}
          <div className="bg-rm-yellow p-10 pb-0 relative flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 sunburst opacity-40 rounded-bl-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-rm-red border-2 border-rm-black flex items-center justify-center shrink-0" style={{ boxShadow: '3px 3px 0px #0A0A0A' }}>
                  <Eye className="w-6 h-6 text-rm-white" />
                </div>
                <ActionWord word={m.visionBadge} color="red" rotate={2} className="text-xl" />
              </div>
              <h3 className="font-comic text-3xl text-rm-black leading-tight mb-5">{m.visionTitle}</h3>
              <p className="text-rm-black leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {m.visionText} <strong>{m.visionTextBold}</strong>{m.visionTextRest}
              </p>
              <blockquote className="mt-6 border-l-4 border-rm-black pl-4 font-comic text-rm-black text-lg italic">{m.visionQuote}</blockquote>
            </div>
            <img
              src="/images/comic/vision_woman_global.webp"
              alt="Global network vision"
              className="mt-auto w-full object-contain object-bottom"
              style={{ maxHeight: '208px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
