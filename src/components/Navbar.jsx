import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brandText from "../assets/images/Androkidz.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = scrolled
    ? "bg-white/70 backdrop-blur-md shadow-md"
    : "bg-white shadow-sm";

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${navStyle}`}>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/">
          <img 
            src={brandText} 
            alt="AndroKidz"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
          <li><Link to="/kurikulum" className="hover:text-blue-600 transition">Kurikulum</Link></li>
          <li><Link to="/galery" className="hover:text-blue-600 transition">Galery</Link></li>
          <li><Link to="/kontak" className="hover:text-blue-600 transition">Kontak</Link></li>
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <button className="border border-blue-700 text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Coba Kelas
          </button>
        </div>

        {/* HAMBURGER MINIMAL */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${navStyle}`}
      >
        <div className="px-6 pb-6 space-y-4">
          
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            About Us
          </Link>

          <Link to="/kurikulum" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Kurikulum
          </Link>

          <Link to="/galery" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Galery
          </Link>

          <Link to="/kontak" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Kontak
          </Link>

          <button className="w-full border border-blue-700 text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Coba Kelas
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;