import React from 'react'

const LegalSharia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 bg-white">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Sharia & Licensing</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Sharia Compliance</h3>
                  <p className="mt-2 text-slate-700">All financial and investment products at JYAD Financial comply with Islamic Sharia principles and are reviewed by an independent Sharia Board.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Regulatory License</h3>
                  <p className="mt-2 text-slate-700">JYAD Financial is licensed by the Capital Market Authority (CMA) to conduct Arranging Activities.</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 hover:bg-slate-50 transition">Sharia Certificate</button>
                <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 hover:bg-slate-50 transition">License Announcement</button>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white h-56 flex items-center justify-center text-slate-500">
              Certificates and documents coming soon
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalSharia
