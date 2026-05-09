const NavItem = ({ label, items = [] }) => (
  <div className="group relative px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm border-r border-gray-300 last:border-0">
    <span className="flex items-center capitalize">{label} {items.length > 0 && '▾'}</span>
    {items.length > 0 && (
      <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white border shadow-lg z-50">
        {items.map(item => (
          <div key={item} className="px-4 py-2 hover:bg-uba-red hover:text-white text-xs border-b last:border-0">
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);

export const Navbar = ({ username }) => {
  return (
    <nav className="w-full">
      <div className="bg-uba-red text-white p-3 flex justify-between items-center italic">
        <span className="text-lg">You are logged in as, <span className="font-bold uppercase">{username}</span></span>
        <span className="text-2xl font-black not-italic">UBA</span>
      </div>
      <div className="bg-gray-100 flex border-b border-gray-300">
        <NavItem label="Home" />
        <NavItem label="Facilities" items={["Review Facility Status", "Review and approve", "Reassign Valuation"]} />
        <NavItem label="Manage" items={["Manage Approved Assets", "Manage Valuers", "Valuation Process"]} />
        <NavItem label="Report" items={["Performance Review", "Valuation Report", "Payment Report"]} />
        <NavItem label="Log Out" />
      </div>
    </nav>
  );
}