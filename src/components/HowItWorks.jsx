import React from 'react'
import { ShieldCheck, LineChart, Star } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Complete transparency',
    desc: 'Clear terms, visible fees, and continuous reporting on every Sukuk issuance.'
  },
  {
    icon: LineChart,
    title: 'Detailed project analysis',
    desc: 'In-depth financial models and credit scoring on each financed company.'
  },
  {
    icon: Star,
    title: 'Cherry picked from the top',
    desc: 'Only high-potential, Sharia-compliant companies make it to our marketplace.'
  },
]

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">How do we work</h2>
        <p className="mt-2 text-slate-600">Our approach blends technology, data and Sharia governance to deliver trust and performance.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#224F56]/10 text-[#224F56] flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
