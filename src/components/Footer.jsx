function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* LOGO */}
        <div>
          <h2 className="text-black text-xl font-bold mb-2">
            AndroKidz
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            Belajar Coding & Robotics dengan cara yang fun dan relevan
            untuk masa depan anak.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-black font-semibold mb-3">
            Menu
          </h3>

          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-orange-500 transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              About Us
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Kurikulum
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Kontak
            </li>
          </ul>
        </div>

        {/* KONTAK */}
        <div>
          <h3 className="text-black font-semibold mb-3">
            Kontak
          </h3>

          <div className="space-y-2 text-sm text-gray-700">
            <p>WhatsApp: 08211023108</p>
            <p>Email: androkidzrobotics@gmail.com</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-100 pt-6">
        © 2026 AndroKidz. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;