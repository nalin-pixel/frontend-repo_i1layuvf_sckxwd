import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DueDiligence from './components/DueDiligence'
import LegalSharia from './components/LegalSharia'
import Partners from './components/Partners'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DueDiligence />
        <LegalSharia />
        <Partners />
      </main>
      <footer className="py-10 text-center text-slate-500">
        © {new Date().getFullYear()} JYAD Financial. All rights reserved.
      </footer>
    </div>
  )
}

export default App
