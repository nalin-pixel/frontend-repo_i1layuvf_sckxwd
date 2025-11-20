import React from 'react'
import { ShieldCheck, LineChart, Star } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Complete Clarity',
    desc: 'We clearly explain why we approve each investment opportunity — your funding is our responsibility and your investment is our investment.'
  },
  {
    icon: LineChart,
    title: 'Comprehensive Analysis',
    desc: 'We thoroughly analyze every project and publish it only after it proves strong fundamentals and real growth potential.'
  },
  {
    icon: Star,
    title: 'Careful Selection',
    desc: 'We do not finance every company — only those that truly qualify as real investment opportunities.'
  },
]

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">How We Work</h2>
        <p className="mt-2 text-slate-600">A methodology grounded in transparency, deep analysis, and governance.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
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
