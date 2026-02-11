import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";
import heroImage from "../assets/images/elementweb.png";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Tomorrow’s Innovators Start Here
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Fun with LEGO, learning with AI, Data Science, Machine Learning,
              Robotics & Coding—all in one place.
            </p>

            <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition">
              Coba Kelas Gratis
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Hero AndroKidz"
              className="w-full max-w-md md:max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* FORM PENDAFTARAN */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-xl font-semibold text-center mb-6">
          Yuk mulai! Isi form dan dapatkan detail kelas, jadwal, serta trial
          gratis dari AndroKidz.
        </h2>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nama Wali Murid"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            placeholder="No WhatsApp"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Nama Siswa"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Kelas Siswa"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Asal Sekolah"
            className="w-full border p-3 rounded"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Coba kelas sekarang
          </button>
        </form>
      </section>

      {/* WHY ANDROKIDZ */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Kenapa harus belajar Coding & Robotics di AndroKidz?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          AndroKidz menghadirkan pembelajaran berbasis teknologi masa depan
          dengan metode fun learning, hands-on project, dan pendekatan logika
          yang membantu anak berpikir kritis, kreatif, dan percaya diri.
        </p>
      </section>

      {/* PROGRAM */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Pilihan Program Kami
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ProgramCard
            title="Kelas Robotics"
            description="Belajar robotik menggunakan LEGO dan perangkat interaktif untuk melatih logika, kreativitas, dan problem solving anak."
          />

          <ProgramCard
            title="Kelas Coding"
            description="Mengenal dunia pemrograman, AI, Data Science, dan Machine Learning dengan pendekatan yang mudah dan menyenangkan."
          />
        </div>
      </section>

      {/* FORM PENDAFTARAN KEDUA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-center mb-6">
            Daftarkan anak Anda sekarang dan dapatkan trial gratis
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Wali Murid"
              className="w-full border p-3 rounded"
            />
            <input
              type="text"
              placeholder="No WhatsApp"
              className="w-full border p-3 rounded"
            />
            <input
              type="text"
              placeholder="Nama Siswa"
              className="w-full border p-3 rounded"
            />
            <input
              type="text"
              placeholder="Kelas Siswa"
              className="w-full border p-3 rounded"
            />
            <input
              type="text"
              placeholder="Asal Sekolah"
              className="w-full border p-3 rounded"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Coba kelas sekarang
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
