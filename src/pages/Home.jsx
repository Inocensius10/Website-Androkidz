import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";
import heroImage from "../assets/images/elementweb.png";
import logoAsli from "../assets/images/logoasli.png";

function Home() {
  const [form, setForm] = useState({
    namaAnak: "",
    namaOrtu: "",
    noHp: "",
    umur: "",
    kelas: "",
    kategori: "",
    sekolah: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let kategori = form.kategori;

    if (name === "kelas") {
      if (value === "TKA" || value === "TKB") {
        kategori = "Young Engineer";
      } else if (value.includes("SD")) {
        kategori = "Teenager";
      } else if (value.includes("SMP")) {
        kategori = "Junior";
      } else if (value.includes("SMA")) {
        kategori = "Senior";
      }
    }

    setForm({
      ...form,
      [name]: value,
      kategori,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Halo, saya ingin mendaftarkan anak saya:

Nama Anak: ${form.namaAnak}
Nama Orang Tua: ${form.namaOrtu}
No HP: ${form.noHp}
Umur: ${form.umur}
Kelas: ${form.kelas}
Kategori: ${form.kategori}
Asal Sekolah: ${form.sekolah}`;

    const url = `https://wa.me/6281774851939?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Tomorrow’s Innovators Start Here
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Fun with LEGO, learning with AI, Data Science, Machine Learning,
              Robotics & Coding—all in one place.
            </p>

            <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition">
              Coba Kelas Gratis
            </button>
          </div>

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
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-center mb-6">
            Daftarkan anak Anda sekarang dan dapatkan trial gratis
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="namaAnak"
              placeholder="Nama Lengkap Anak"
              className="w-full border p-3 rounded"
              onChange={handleChange}
            />

            <input
              type="text"
              name="namaOrtu"
              placeholder="Nama Orang Tua"
              className="w-full border p-3 rounded"
              onChange={handleChange}
            />

            <input
              type="text"
              name="noHp"
              placeholder="Nomor Telepon Orang Tua"
              className="w-full border p-3 rounded"
              onChange={handleChange}
            />

            <input
              type="number"
              name="umur"
              placeholder="Umur Anak"
              className="w-full border p-3 rounded"
              onChange={handleChange}
            />

            <select
              name="kelas"
              className="w-full border border-gray-300 p-3 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              <option value="">Pilih Kelas</option>
              <option value="TKA">TKA</option>
              <option value="TKB">TKB</option>
              <option value="1 SD">1 SD</option>
              <option value="2 SD">2 SD</option>
              <option value="3 SD">3 SD</option>
              <option value="4 SD">4 SD</option>
              <option value="5 SD">5 SD</option>
              <option value="6 SD">6 SD</option>
              <option value="7 SMP">7 SMP</option>
              <option value="8 SMP">8 SMP</option>
              <option value="9 SMP">9 SMP</option>
              <option value="10 SMA">10 SMA</option>
              <option value="11 SMA">11 SMA</option>
              <option value="12 SMA">12 SMA</option>
            </select>

            <input
              type="text"
              name="kategori"
              value={form.kategori}
              placeholder="Kategori"
              className="w-full border p-3 rounded bg-gray-100"
              readOnly
            />

            <input
              type="text"
              name="sekolah"
              placeholder="Asal Sekolah"
              className="w-full border p-3 rounded"
              onChange={handleChange}
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Coba Kelas Sekarang
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;