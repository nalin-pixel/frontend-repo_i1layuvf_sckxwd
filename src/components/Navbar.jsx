import React from 'react'
import { Globe } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-[#224F56]' : 'text-slate-700 hover:text-[#224F56]'}`

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo (click returns Home) */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#224F56] flex items-center justify-center text-white font-bold shadow-lg shadow-[#224F56]/20">J</div>
          <span className="sr-only">Go to Home</span>
        </Link>

        {/* Center: Required navigation order */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Language (default Arabic) */}
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
            <Globe size={16} />
            <span className="text-sm">Arabic</span>
          </button>

          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/invest" className={linkClass}>Invest</NavLink>
          <NavLink to="/borrow" className={linkClass}>Finance</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>

          {/* Brand text as required item in order */}
          <NavLink to="/" className={({ isActive }) => `font-semibold ${isActive ? 'text-[#224F56]' : 'text-slate-900 hover:text-[#224F56]'} `}>
            JYAD Financial
          </NavLink>
        </nav>

        {/* Mobile: condensed right controls */}
        <div className="md:hidden">
          <Link to="/" className="text-sm font-medium text-slate-900">JYAD Financial</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
