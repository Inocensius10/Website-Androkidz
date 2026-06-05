import { useEffect, useState } from "react";
import heroImage from "../assets/images/elementweb.png";
import { supabase } from "../lib/supabase";


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

  const heroSlides = [
    {
      title: "Belajar Teknologi Jadi Lebih Seru",
      description:
        "Fun with LEGO, learning with AI, Data Science, Machine Learning, Robotics & Coding dalam suasana yang menyenangkan.",
    },
    {
      title: "Membangun Kreativitas Anak Sejak Dini",
      description:
        "AndroKidz membantu anak berkembang lewat pembelajaran aktif, eksploratif, dan berbasis proyek.",
    },
    {
      title: "Siap Hadapi Dunia Digital",
      description:
        "Program pembelajaran dirancang untuk melatih logika, problem solving, dan keberanian mencoba hal baru.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
  fetchGallery();
}, []);

const fetchGallery = async () => {
  try {
    const { data, error } = await supabase
      .from("galery")
      .select("*")
      .order("id", { ascending: false });

    if (error) throw error;

    setGalleryImages(data || []);
  } catch (err) {
    console.error("Gallery Error:", err);
  }
};

  const [galleryImages, setGalleryImages] = useState([]);;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

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

    const message = `Halo, saya ingin mendaftarkan anak saya ke AndroKidz:

Nama Anak: ${form.namaAnak}
Nama Orang Tua: ${form.namaOrtu}
No HP: ${form.noHp}
Umur: ${form.umur}
Kelas: ${form.kelas}
Kategori: ${form.kategori}
Asal Sekolah: ${form.sekolah}`;

    const url = `https://wa.me/628211023108?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* HERO CAROUSEL */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Tomorrow’s Innovators Start Here
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Fun with LEGO, learning with AI, Data Science, Machine Learning,
              Robotics & Coding—all in one place.
            </p>

            <button className="bg-white text-orange-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-orange-100 transition">
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

      {/* VISI DAN MISI */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Visi dan Misi
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">
                Visi
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi lembaga pembelajaran teknologi anak yang unggul, kreatif,
                dan menyenangkan dalam membentuk generasi muda yang siap
                menghadapi era digital.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">
                Misi
              </h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                <li>Menyediakan pembelajaran teknologi yang interaktif dan mudah dipahami.</li>
                <li>Mendorong kreativitas, logika, dan kemampuan problem solving anak.</li>
                <li>Menciptakan suasana belajar yang menyenangkan dan aman.</li>
                <li>Mengenalkan dunia coding, robotik, dan AI sejak usia dini.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERI SLIDER */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Galeri Kegiatan
          </h2>

          {galleryImages.length > 0 ? (
            <div className="overflow-hidden">

              <div
                className="flex w-max gap-5"
                style={{
                  animation:
                    "galleryScroll 40s linear infinite",
                }}
              >
                {[...galleryImages, ...galleryImages].map(
                  (item, index) => {
                    const borderColor =
                      index % 2 === 0
                        ? "border-orange-500"
                        : "border-blue-900";

                    return (
                      <div
                        key={index}
                        className={`
                          w-64
                          md:w-72
                          flex-shrink-0
                          rounded-3xl
                          overflow-hidden
                          shadow-lg
                          border-4
                          ${borderColor}
                          bg-white
                          hover:shadow-2xl
                          transition-all
                          duration-300
                        `}
                      >
                        <img
                          src={item.image}
                          alt="Galeri AndroKidz"
                          className="
                            w-full
                            h-48
                            md:h-56
                            object-cover
                            hover:scale-110
                            transition-transform
                            duration-700
                          "
                        />
                      </div>
                    );
                  }
                )}
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-500">
              Belum ada foto galeri.
            </div>
          )}
        </div>

        <style>{`
          @keyframes galleryScroll {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
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
              className="w-full border border-gray-300 p-3 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
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

            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition">
              Coba Kelas Sekarang
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;