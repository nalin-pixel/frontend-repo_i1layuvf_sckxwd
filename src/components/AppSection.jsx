import React from 'react'
import { Download, HelpCircle } from 'lucide-react'

const AppSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">The app</h2>
          <p className="mt-2 text-slate-600">Invest and borrow on the go with our mobile app.</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#224F56] text-white font-semibold shadow-lg shadow-[#224F56]/20 hover:shadow-[#224F56]/30 transition-shadow">
              <Download size={18} />
              Download the app
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#224F56] font-semibold border border-[#224F56]/20 hover:bg-[#224F56]/5 transition-colors">
              <HelpCircle size={18} />
              hesitant?
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppSection
