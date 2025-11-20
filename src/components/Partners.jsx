import React from 'react'

const partners = [
  'بيان', 'علم', 'أبشر', 'ANB', 'سِمَة', 'واثق'
]

const Partners = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">شركاؤنا ومصادر بياناتنا</h2>
        <p className="mt-2 text-slate-600">نعتمد على شبكة قوية من الشركاء الموثوقين لضمان أعلى معايير الموثوقية والشفافية.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {partners.map(name => (
            <div key={name} className="rounded-xl border border-slate-200/70 bg-white/60 backdrop-blur-xl p-4 text-center text-[#224F56] font-semibold">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
