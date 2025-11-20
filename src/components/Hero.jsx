import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224F56]/10 text-[#224F56] text-sm font-medium">
              Empowering Sukuk Financing
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              We pick from the best emerging companies
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              A modern platform to invest in Sharia-compliant Sukuk and enable businesses to grow with transparent, data-driven financing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#224F56] text-white font-semibold shadow-lg shadow-[#224F56]/20 hover:shadow-[#224F56]/30 transition-shadow">
                Start investing
                <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#224F56] font-semibold border border-[#224F56]/20 hover:bg-[#224F56]/5 transition-colors">
                Request a loan
              </a>
            </div>
          </div>

          <div className="h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-slate-200/60 bg-white/40 backdrop-blur-xl shadow-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
