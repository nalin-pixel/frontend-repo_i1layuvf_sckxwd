import React from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-[#224F56]' : 'text-slate-700 hover:text-[#224F56]'}`

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-9 h-9 rounded-xl bg-[#224F56] flex items-center justify-center text-white font-bold shadow-lg shadow-[#224F56]/20">ج</Link>
          <Link to="/" className="text-slate-900 font-semibold text-lg tracking-tight">جياد المالية</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/about" className={linkClass}>من نحن</NavLink>
          <NavLink to="/invest" className={linkClass}>الاستثمار</NavLink>
          <NavLink to="/borrow" className={linkClass}>التمويل</NavLink>
          <NavLink to="/blog" className={linkClass}>المدونة</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
            <Globe size={16} />
            <span className="text-sm">العربية</span>
            <ChevronDown size={14} className="opacity-70" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
