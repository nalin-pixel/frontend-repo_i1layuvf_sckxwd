import React from 'react'
import { Globe, ChevronDown } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#224F56] flex items-center justify-center text-white font-bold shadow-lg shadow-[#224F56]/20">J</div>
          <span className="text-slate-900 font-semibold text-lg tracking-tight">JyadCapital</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#" className="hover:text-[#224F56] transition-colors">About us</a>
          <a href="#" className="hover:text-[#224F56] transition-colors">Invest</a>
          <a href="#" className="hover:text-[#224F56] transition-colors">Borrow</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 text-slate-700 hover:bg-white transition-colors">
            <Globe size={16} />
            <span className="text-sm">English</span>
            <ChevronDown size={14} className="opacity-70" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
