import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { ComicShowcase } from '@/components/sections/ComicShowcase'
import { MissionVision } from '@/components/sections/MissionVision'
import { Approach } from '@/components/sections/Approach'
import { Clients } from '@/components/sections/Clients'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <ComicShowcase />
          <MissionVision />
          <Approach />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
