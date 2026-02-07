import logo from "../assets/images/hero.png"; // ganti dengan logo asli nanti

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="AndroKidz Logo" className="h-8" />
          <span className="font-bold text-xl">AndroKidz</span>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Event</li>
          <li className="hover:text-blue-600 cursor-pointer">Kurikulum</li>
          <li className="hover:text-blue-600 cursor-pointer">Kursus</li>
          <li className="hover:text-blue-600 cursor-pointer">Lokasi</li>
          <li className="hover:text-blue-600 cursor-pointer">Tentang Kami</li>
          <li className="hover:text-blue-600 cursor-pointer">Galeri</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
