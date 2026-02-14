import { useState } from 'react'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { ToolBox } from './components/Toolbox'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Layout } from './components/Layout'



export default function App() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <Layout isMuted={isMuted} onToggleMute={() => setIsMuted((prev) => !prev)}>
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero isMuted={isMuted} />
        </section>
        <section id="portfolio" aria-label="Portfolio section">
          <Portfolio />
        </section>
        <section id="toolbox" aria-label="Toolbox section">
          <ToolBox />
        </section>
        <section id="about" aria-label="About section">
          <About />
        </section>
        <section id="services" aria-label="Services section">
          <Services />
        </section>
        <section
          id="team"
          aria-label="Team section"
          style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}
        >
          <Team />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </Layout>
  )
}