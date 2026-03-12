import { useState, useEffect } from "react";
import brandText from "../assets/images/Androkidz.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT SIDE - LOGO + MENU */}
        <div className="flex items-center gap-12">
          
          <img 
            src={brandText} 
            alt="AndroKidz"
            className="h-10 w-auto object-contain"
          />

          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-600 cursor-pointer transition">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer transition">Kurikulum</li>
            <li className="hover:text-blue-600 cursor-pointer transition">Galery</li>
            <li className="hover:text-blue-600 cursor-pointer transition">Kontak</li>
          </ul>
        </div>

        {/* RIGHT SIDE - BUTTON */}
        <div className="hidden md:block">
          <button className="border border-blue-700 text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Coba Kelas
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
