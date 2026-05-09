import { useState } from 'react';

const NavItem = ({ label, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="group relative border-b border-gray-300 md:border-b-0 md:border-r md:last:border-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 md:py-2 hover:bg-gray-200 cursor-pointer text-sm capitalize transition-colors"
      >
        <span>{label}</span>
        {items.length > 0 && (
          <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            ▾
          </span>
        )}
      </button>

      {items.length > 0 && (
        <div className={`
          ${isOpen ? 'block' : 'hidden'} 
          md:absolute md:left-0 md:top-full md:w-52 md:bg-white md:shadow-lg md:border md:z-50
          bg-gray-50 border-l-4 border-uba-red
        `}>
          {items.map(item => (
            <div key={item} className="px-6 py-2 md:px-4 hover:bg-uba-red hover:text-white text-xs border-b border-gray-100 last:border-0 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Navbar = ({ username = "ADEREMI ABIODUN" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md">
      {/* Top Banner (UBA Branding) */}
      <div className="bg-uba-red text-white p-3 flex justify-between items-center italic">
        <div className="flex flex-col md:flex-row md:items-center gap-1">
          <span className="text-xs opacity-95 not-italic">Logged in as:</span>
          <span className="text-sm md:text-base font-bold uppercase">{username}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-black not-italic">UBA</span>
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-black/10 rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`
        ${isMenuOpen ? 'block' : 'hidden'} 
        md:flex md:bg-gray-100 bg-white border-b border-gray-300
      `}>
        <NavItem label="Home" />
        <NavItem 
          label="Facilities" 
          items={["Review Facility Status", "Review and approve", "Reassign Valuation", "Valuer Payment", "Unapproved", "Approved"]} 
        />
        <NavItem 
          label="Manage" 
          items={["Manage Approved Assets", "Manage Valuers", "Valuation Process", "Valuation Completed"]} 
        />
        <NavItem 
          label="Report" 
          items={["Performance Review", "Valuation Report", "Payment Report", "Indemnity Template"]} 
        />
        <NavItem label="Log Out" />
      </div>
    </nav>
  );
}