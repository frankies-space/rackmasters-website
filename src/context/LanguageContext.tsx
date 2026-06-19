import { createContext, useContext, useState, type ReactNode } from 'react'
import { nl } from '@/i18n/nl'
import { en } from '@/i18n/en'
import type { Lang } from '@/i18n'

// Widen literal types while preserving readonly modifiers
type Widen<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> }

export type Translations = Widen<typeof nl>

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const nlWide = nl as unknown as Translations
const enWide = en as unknown as Translations

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('nl')
  const t = lang === 'nl' ? nlWide : enWide
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
