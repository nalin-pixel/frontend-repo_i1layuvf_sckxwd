import React from 'react'

const partners = [
  'Bayan', 'Elm', 'Absher', 'ANB', 'SIMAH', 'Watheq'
]

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Partners and Data Sources</h2>
        <p className="mt-2 text-slate-600">We rely on a strong network of trusted partners to ensure the highest standards of reliability and transparency.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {partners.map(name => (
            <div key={name} className="rounded-xl border border-slate-200 bg-white p-4 text-center text-[#224F56] font-semibold">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
