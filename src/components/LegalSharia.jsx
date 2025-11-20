import React from 'react'

const LegalSharia = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Legal and Sharia governance</h2>
              <p className="mt-3 text-slate-600">Licensed by the Capital Markets Authority (CMA). Our Sharia Board oversees every structure and issuance.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="rounded-xl border border-slate-200 bg-white p-4">CMA License: Pending • Placeholder</div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">Sharia Board: Placeholder names</div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">Annual Sharia audit report</div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">Investor protection framework</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 h-56 flex items-center justify-center text-slate-500">
              Upload of licenses and certificates coming soon
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalSharia
