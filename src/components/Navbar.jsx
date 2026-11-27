import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition ${
      isActive ? "text-black font-semibold" : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold tracking-[0.15em]">
          DOULYRA<span className="text-gray-400">.</span>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-5 md:gap-10">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
