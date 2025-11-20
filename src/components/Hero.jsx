import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-12 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224F56]/10 text-[#224F56] text-sm font-medium">
              Institutional-grade screening
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              We select exceptional investment opportunities from the most promising companies
            </h1>
            <p className="mt-4 text-slate-700 text-lg max-w-2xl">
              We are not a platform for everyone — we are a destination for those who see capital as a way to create real impact.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#224F56] text-white font-semibold shadow-lg shadow-[#224F56]/20 hover:shadow-[#224F56]/30 transition-shadow">
                Request Funding
                <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#224F56] font-semibold border border-[#224F56]/20 hover:bg-[#224F56]/5 transition-colors">
                Start Investing
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white/80 flex items-center justify-center text-slate-500">
              Future hero visual placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
