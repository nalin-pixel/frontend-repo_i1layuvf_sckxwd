import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-10 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224F56]/10 text-[#224F56] text-sm font-medium">
              نمكّن تمويل الصكوك
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              ننتقي الفرص الاستثمارية من الشركات الواعدة
            </h1>
            <p className="mt-4 text-slate-700 text-lg max-w-3xl">
              لسنا منصة للجميع بل وجهة لمن يرى في المال وسيلة لصناعة أثر
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#224F56] text-white font-semibold shadow-lg shadow-[#224F56]/20 hover:shadow-[#224F56]/30 transition-shadow">
                ابدأ الاستثمار
                <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#224F56] font-semibold border border-[#224F56]/20 hover:bg-[#224F56]/5 transition-colors">
                اطلب تمويل
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
