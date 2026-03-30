function Kurikulum() {
  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Kurikulum Pembelajaran
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Kurikulum AndroKidz dirancang bertahap sesuai usia untuk membangun
          kreativitas, logika, dan kemampuan teknologi anak sejak dini.
        </p>

        {/* CARD SECTION */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* YOUNG ENGINEER */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Young Engineer
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              TK (mulai umur 4 tahun)
            </p>
            <p className="text-gray-700 leading-relaxed">
              Anak diperkenalkan dengan berbagai alat dasar dan mulai belajar
              merakit sederhana. Fokus utama adalah melatih motorik halus,
              kreativitas, dan imajinasi melalui aktivitas yang menyenangkan.
            </p>
          </div>

          {/* TEENAGER */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Teenager
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              SD
            </p>
            <p className="text-gray-700 leading-relaxed">
              Anak mulai belajar bagaimana mengendalikan sesuatu agar dapat
              bergerak. Mereka memahami konsep dasar mekanik dan logika sederhana
              dalam sistem robotik.
            </p>
          </div>

          {/* JUNIOR */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Junior
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              SMP
            </p>
            <p className="text-gray-700 leading-relaxed">
              Siswa mulai belajar coding untuk mengendalikan robot. Fokus pada
              logika pemrograman, problem solving, dan bagaimana membuat robot
              dapat bergerak secara otomatis.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Kurikulum;