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
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900">نوضح أسباب الموافقة على كل فرصة</h3>
              <p className="mt-2 text-slate-700">لأن تمويلك مسؤوليتنا واستثمارك هو استثمارنا</p>
              <p className="mt-2 text-slate-700">ندرس كل مشروع بدقة ولا نطرحه إلا إذا أثبت جدواه وقدرته على تحقيق نمو حقيقي</p>
              <p className="mt-2 text-slate-700">لسنا نمول كل شركة، بل نمول فقط ما يستحق أن يُسمى استثمارًا.</p>
            </div>
          </div>
        </section>
        <DueDiligence />
        <LegalSharia />
        <Partners />
        <AppSection />
      </main>
      <footer className="py-10 text-center text-slate-500">
        © {new Date().getFullYear()} جياد المالية. جميع الحقوق محفوظة.
      </footer>
    </div>
  )
}

export default App
