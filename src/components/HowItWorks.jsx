import React from 'react'
import { ShieldCheck, LineChart, Star } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'وضوح تام',
    desc: 'نوضح أسباب الموافقة على كل فرصة، لأن تمويلك مسؤوليتنا واستثمارك هو استثمارنا.'
  },
  {
    icon: LineChart,
    title: 'تحليل شامل',
    desc: 'ندرس كل مشروع بدقة ولا نطرحه إلا إذا أثبت جدواه وقدرته على تحقيق نمو حقيقي.'
  },
  {
    icon: Star,
    title: 'انتقاء بعناية',
    desc: 'لسنا نمول كل شركة، بل نمول فقط ما يستحق أن يُسمى استثمارًا.'
  },
]

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">كيف نعمل؟</h2>
        <p className="mt-2 text-slate-600">منهجية تعتمد على الشفافية والتحليل العميق والحوكمة الشرعية.</p>

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
