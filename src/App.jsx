import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DueDiligence from './components/DueDiligence'
import LegalSharia from './components/LegalSharia'
import Partners from './components/Partners'
import AppSection from './components/AppSection'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(85%_85%_at_50%_0%,#E6F0F2_0%,#ffffff_60%)] text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DueDiligence />
        <LegalSharia />
        <Partners />
        <AppSection />
      </main>
      <footer className="py-10 text-center text-slate-500">
        © {new Date().getFullYear()} JyadCapital. All rights reserved.
      </footer>
    </div>
  )
}

export default App
