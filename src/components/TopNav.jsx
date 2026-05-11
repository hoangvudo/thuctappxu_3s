import { NavLink, Link } from 'react-router-dom'
import logoImg from '../assets/fashion_brand_logo.png'
import { menuItems } from '../data/catalog.js'

function TopNav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant transition-all duration-300 ease-in-out">
      <nav className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <button className="flex-1 flex items-center gap-md md:hidden" type="button" aria-label="Open menu">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>

        <div className="flex-1 hidden md:flex items-center gap-lg">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `font-label-sm text-label-sm uppercase tracking-[0.1em] pb-1 hover:text-primary transition-colors duration-300 ${
                  isActive ? 'text-primary border-b border-primary' : 'text-on-surface-variant'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link to="/" className="flex-none flex items-center justify-center">
          <img src={logoImg} alt="AÉRA Logo" className="h-12 w-auto object-contain" />
        </Link>

        <div className="flex-1 flex justify-end items-center gap-md">
          <div className="hidden lg:flex items-center border-b border-outline-variant px-xs py-xs mr-md">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant w-32 placeholder-on-surface-variant"
              placeholder="SEARCH"
              type="text"
            />
          </div>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-on-surface-variant transition-colors duration-300">person</span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-on-surface-variant transition-colors duration-300">shopping_bag</span>
        </div>
      </nav>
    </header>
  )
}

export default TopNav
