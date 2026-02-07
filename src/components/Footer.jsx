function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* LOGO */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">AndroKidz</h2>
          <p className="text-sm">
            Belajar Coding & Robotics dengan cara yang fun dan relevan
            untuk masa depan anak.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-white font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Event</li>
            <li>Kurikulum</li>
            <li>Kursus</li>
            <li>Tentang Kami</li>
          </ul>
        </div>

        {/* KONTAK */}
        <div>
          <h3 className="text-white font-semibold mb-3">Kontak</h3>
          <p className="text-sm">WhatsApp: 08xxxxxxxxxx</p>
          <p className="text-sm">Email: info@androkidz.id</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © 2026 AndroKidz
      </div>
    </footer>
  );
}

export default Footer;
