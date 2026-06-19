import { cn } from '@/lib/utils'

interface ComicPanelProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'yellow' | 'blue' | 'red' | 'dark'
  thick?: boolean
}

export function ComicPanel({
  children,
  className,
  variant = 'default',
  thick = false,
}: ComicPanelProps) {
  const bgMap = {
    default: 'bg-rm-white',
    yellow: 'bg-rm-yellow',
    blue: 'bg-rm-blue',
    red: 'bg-rm-red',
    dark: 'bg-rm-black',
  }

  return (
    <div
      className={cn(
        thick ? 'panel-thick' : 'panel',
        bgMap[variant],
        className
      )}
    >
      {children}
    </div>
  )
}

interface ActionWordProps {
  word: string
  className?: string
  color?: 'yellow' | 'red' | 'blue'
  rotate?: number
}

export function ActionWord({ word, className, color = 'yellow', rotate = -2 }: ActionWordProps) {
  const colorMap = {
    yellow: 'action-badge',
    red: 'action-badge action-badge-red',
    blue: 'action-badge action-badge-blue',
  }

  return (
    <span
      className={cn(colorMap[color], className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {word}
    </span>
  )
}
