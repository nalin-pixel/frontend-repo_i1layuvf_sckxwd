import React from 'react'

const DueDiligence = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Complete transparency on our due diligence</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            We evaluate every company with rigorous financial models, cash-flow analysis, and proprietary credit scoring.
            Investors gain access to concise due diligence snapshots for each opportunity.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200 bg-white p-4">• Financial statements parsing</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">• Revenue and margin trends</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">• Balance sheet strength</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">• Cash conversion cycles</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">• Sector benchmark comparison</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">• Credit and fraud checks</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DueDiligence
