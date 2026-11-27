import { Link } from "react-router-dom";

const menu = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const services = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Sistem Informasi",
];

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-[0.15em]">
              DOULYRA<span className="text-gray-500">.</span>
            </Link>

            <p className="text-gray-400 text-sm mt-5 leading-relaxed max-w-xs">
              Perusahaan teknologi yang membangun website, aplikasi, dan sistem
              informasi yang cepat, aman, dan mudah digunakan.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold">Menu</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {menu.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold">Layanan</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Kontak</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>hello@doulyra.com</li>
              <li>@doulyra</li>
              <li>Technology & Software Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Doulyra. All rights reserved.</p>
          <p className="tracking-widest">SMART TECHNOLOGY SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
