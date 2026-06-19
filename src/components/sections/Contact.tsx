import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ActionWord } from '@/components/ui/ComicPanel'
import { useLanguage } from '@/context/LanguageContext'
import { useState } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()
  const c = t.contact

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-rm-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 sunburst-red opacity-10 rounded-tr-full" />
      <div className="absolute top-0 right-0 w-48 h-48 halftone opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ActionWord word={c.badgeLabel} color="yellow" rotate={-1} className="text-4xl sm:text-5xl mb-6 inline-block" />
          <h2 className="font-comic text-5xl sm:text-7xl text-rm-white leading-none mt-4">
            {c.headline1}<br />
            <span className="text-rm-yellow">{c.headline2}</span><br />
            {c.headline3}!
          </h2>
          <p className="mt-6 font-sans text-rm-gray-light text-lg max-w-xl mx-auto">{c.sub}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 border-4 border-rm-yellow" style={{ boxShadow: '8px 8px 0px #FFD600' }}>
          <div className="lg:col-span-2 bg-rm-yellow border-r-4 border-rm-black p-8 flex flex-col gap-6">
            <h3 className="font-comic text-2xl text-rm-black">{c.infoTitle}</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: c.emailLabel, value: 'info@rackmasters.nl' },
                { icon: Phone, label: c.phoneLabel, value: c.phoneValue },
                { icon: MapPin, label: c.locationLabel, value: c.locationValue },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-rm-black border-2 border-rm-black flex items-center justify-center shrink-0" style={{ boxShadow: '2px 2px 0px #0A0A0A' }}>
                    <Icon className="w-4 h-4 text-rm-yellow" />
                  </div>
                  <div>
                    <p className="font-comic text-rm-black text-sm">{label}</p>
                    <p className="font-sans text-rm-black text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <ActionWord word="INTERNATIONAAL!" color="blue" rotate={-3} className="text-lg" />
            </div>
          </div>

          <div className="lg:col-span-3 bg-rm-white p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-12">
                <ActionWord word="ZAP!" color="yellow" rotate={-3} className="text-5xl" />
                <h3 className="font-comic text-3xl text-rm-black">{c.successTitle}</h3>
                <p className="font-sans text-rm-gray">{c.successText}</p>
                <Button variant="secondary" onClick={() => setSent(false)}>{c.newMessageBtn}</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-comic text-2xl text-rm-black mb-6">{c.formTitle}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-comic text-rm-black text-sm block mb-1">{c.nameLabel}</label>
                    <input required type="text" placeholder={c.namePlaceholder} className="w-full border-2 border-rm-black px-3 py-2 font-sans text-sm focus:outline-none focus:border-rm-blue bg-rm-white" style={{ boxShadow: '2px 2px 0px #0A0A0A' }} />
                  </div>
                  <div>
                    <label className="font-comic text-rm-black text-sm block mb-1">{c.companyLabel}</label>
                    <input type="text" placeholder={c.companyPlaceholder} className="w-full border-2 border-rm-black px-3 py-2 font-sans text-sm focus:outline-none focus:border-rm-blue bg-rm-white" style={{ boxShadow: '2px 2px 0px #0A0A0A' }} />
                  </div>
                </div>
                <div>
                  <label className="font-comic text-rm-black text-sm block mb-1">{c.emailFieldLabel}</label>
                  <input required type="email" placeholder={c.emailPlaceholder} className="w-full border-2 border-rm-black px-3 py-2 font-sans text-sm focus:outline-none focus:border-rm-blue bg-rm-white" style={{ boxShadow: '2px 2px 0px #0A0A0A' }} />
                </div>
                <div>
                  <label className="font-comic text-rm-black text-sm block mb-1">{c.messageLabel}</label>
                  <textarea required rows={5} placeholder={c.messagePlaceholder} className="w-full border-2 border-rm-black px-3 py-2 font-sans text-sm focus:outline-none focus:border-rm-blue bg-rm-white resize-none" style={{ boxShadow: '2px 2px 0px #0A0A0A' }} />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  {c.submitBtn}
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
