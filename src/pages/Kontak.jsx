function Kontak() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Hubungi Kami
        </h1>

        <p className="text-gray-600 mb-12">
          Hubungi kami untuk informasi lebih lanjut mengenai kelas dan program AndroKidz.
        </p>

        {/* KONTAK */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

        {/* TELEPON */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-full">
            📞
            </div>

            <div className="text-left">
            <p className="text-gray-500 text-sm">Nomor Telepon</p>
            <p className="text-lg font-semibold text-blue-900">
                Alvaro
            </p>
            <p className="text-gray-700">
                +62 812-XXXX-XXXX
            </p>
            </div>
        </div>

        {/* ALAMAT */}
        <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
            <div className="bg-yellow-100 p-4 rounded-full">
            📍
            </div>

            <div className="text-left">
            <p className="text-gray-500 text-sm">Alamat</p>
            <p className="text-gray-700 leading-relaxed">
                Blok G1 No C 12 Perum Legok Permai, Kec. Legok, 
                Kab. Tangerang, Prov. Banten
            </p>
            </div>
        </div>

        </div>

        {/* MAP */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4182.702040934043!2d106.58516467522841!3d-6.287219193701746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd94e4c11719%3A0x25125b96caf85494!2sTK.%20Qolbu%20Insani!5e1!3m2!1sid!2sid!4v1774847814813!5m2!1sid!2sid"
            className="w-full h-[400px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Kontak;