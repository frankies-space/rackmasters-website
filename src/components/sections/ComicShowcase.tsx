import { ActionWord } from '@/components/ui/ComicPanel'

const showcaseImages = [
  { src: '/images/comic/hero_woman_cables.webp', alt: 'Superhero with network cables', label: 'ZAP!' as const },
  { src: '/images/comic/config_blackman_happy.webp', alt: 'Network configuration success', label: 'YES!' as const },
  { src: '/images/comic/inside_server_man_happy.webp', alt: 'Server hardware expert', label: 'POW!' as const },
  { src: '/images/comic/hero_blackwoman_racking.webp', alt: 'Racking specialist superhero', label: 'RACK!' as const },
  { src: '/images/comic/fiber_man_happy.webp', alt: 'Fiber optic cable laying', label: 'ZOOM!' as const },
  { src: '/images/comic/hero_duo_cabling.webp', alt: 'Duo cabling team', label: 'SNAP!' as const },
]

const actionColors: Array<'yellow' | 'red' | 'blue'> = ['yellow', 'red', 'blue', 'yellow', 'red', 'blue']

export function ComicShowcase() {
  return (
    <section className="py-0 bg-rm-black overflow-hidden border-y-4 border-rm-black">
      <div className="flex">
        {showcaseImages.map((img, i) => (
          <div
            key={i}
            className="relative flex-1 min-w-0 overflow-hidden border-r-2 border-rm-black last:border-r-0 group"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ActionWord word={img.label} color={actionColors[i % 3]} rotate={i % 2 === 0 ? -3 : 3} className="text-sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
