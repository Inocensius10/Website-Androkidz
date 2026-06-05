import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import logoAsli from "../assets/images/logoasli.png";

function About() {
  const [guru, setGuru] = useState([]);

  useEffect(() => {
    fetchGuru();
  }, []);

  const fetchGuru = async () => {
    try {
      const { data, error } = await supabase
        .from("guru")
        .select("*")
        .order("id", { ascending: false });

      if (error) throw error;

      setGuru(data || []);
    } catch (err) {
      console.error("GURU ERROR:", err);
    }
  };

  return (
    <div className="pt-28 bg-white min-h-screen">

      {/* HERO */}
<section className="px-6 pb-20">
  <div className="max-w-6xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LOGO */}
      <div className="flex justify-center">
        <img
          src={logoAsli}
          alt="AndroKidz"
          className="
            w-64
            md:w-80
            lg:w-[420px]
            object-contain
          "
        />
      </div>

      {/* CONTENT */}
      <div>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Tentang AndroKidz
        </h1>

        <p className="text-xl text-orange-500 font-semibold mb-6">
          Fun Learning • Robotics • Coding • Future Skills
        </p>

        <div className="space-y-5 text-gray-700 leading-relaxed text-lg">

          <p>
            Dunia sedang bergerak menuju era digital yang dipenuhi oleh
            Artificial Intelligence (AI), robotika, automasi, dan berbagai
            teknologi canggih yang akan menjadi bagian dari kehidupan
            sehari-hari. Anak-anak saat ini adalah generasi yang akan hidup,
            bekerja, dan berinovasi di tengah perkembangan teknologi tersebut.
          </p>

          <p>
            AndroKidz hadir untuk membantu mempersiapkan generasi muda agar
            tidak hanya menjadi pengguna teknologi, tetapi juga mampu menjadi
            pencipta teknologi. Kami percaya bahwa setiap anak memiliki potensi
            untuk berpikir kreatif, memecahkan masalah, dan menghasilkan ide-ide
            luar biasa yang dapat membawa perubahan positif bagi masa depan.
          </p>

          <p>
            Melalui pembelajaran robotika, coding, dan teknologi digital,
            peserta didik dilatih untuk mengembangkan kemampuan logika,
            kreativitas, komunikasi, kolaborasi, serta kemampuan berpikir
            kritis yang sangat dibutuhkan di abad ke-21.
          </p>

          <p>
            Dengan pendekatan yang menyenangkan dan berbasis proyek nyata,
            setiap anak dapat belajar sambil bereksplorasi, berimajinasi,
            menciptakan karya, dan membangun rasa percaya diri dalam
            menghadapi tantangan masa depan yang terus berkembang.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* TENTANG */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
            Siapa Kami?
          </h2>

          <div className="space-y-6 text-center text-gray-700 leading-relaxed text-lg">

            <p>
              Kami percaya bahwa teknologi bukan hanya untuk digunakan,
              tetapi juga untuk dipahami dan diciptakan.
            </p>

            <p>
              AndroKidz menghadirkan pengalaman belajar yang dirancang
              khusus untuk anak-anak dan remaja agar mampu memahami
              teknologi sejak dini melalui aktivitas yang kreatif,
              menyenangkan, dan sesuai dengan usia mereka.
            </p>

            <p>
              Melalui metode Project Based Learning, peserta tidak hanya
              belajar teori tetapi juga membuat proyek nyata seperti robot,
              website, aplikasi sederhana, dan pengenalan Artificial
              Intelligence (AI).
            </p>

          </div>

        </div>
      </section>

      {/* VISI MISI */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white border-2 border-blue-900 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Visi
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Menjadi pusat pembelajaran teknologi anak dan remaja yang
                mampu membentuk generasi kreatif, inovatif, dan siap
                menghadapi tantangan era digital.
              </p>
            </div>

            <div className="bg-white border-2 border-orange-400 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Misi
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>• Mengembangkan kemampuan logika dan kreativitas.</li>
                <li>• Mengenalkan teknologi secara menyenangkan.</li>
                <li>• Mendorong inovasi melalui project nyata.</li>
                <li>• Mempersiapkan skill masa depan sejak dini.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Mengapa Memilih AndroKidz?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                Fun Learning
              </h3>

              <p className="text-sm text-gray-600">
                Belajar teknologi melalui metode yang menyenangkan dan interaktif.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                Project Based
              </h3>

              <p className="text-sm text-gray-600">
                Setiap peserta membuat proyek nyata selama proses belajar.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                Future Skills
              </h3>

              <p className="text-sm text-gray-600">
                Mempersiapkan keterampilan digital yang dibutuhkan di masa depan.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">
                Mentor Berpengalaman
              </h3>

              <p className="text-sm text-gray-600">
                Dibimbing oleh mentor yang ramah, profesional, dan inspiratif.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TEACHER */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            My Teacher
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Belajar bersama mentor yang berpengalaman dan menyenangkan.
          </p>

          {guru.length === 0 ? (
            <div className="text-center text-gray-500">
              Belum ada data guru.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

              {guru.map((item) => (
                <div
                  key={item.id}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">

                    <img
                      src={item.foto}
                      alt={item.nama}
                      className="
                        w-32
                        h-32
                        md:w-40
                        md:h-40
                        object-cover
                        rounded-full
                        border-4
                        border-blue-900
                        shadow-lg
                      "
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300";
                      }}
                    />

                  </div>

                  <h3 className="font-bold text-lg text-gray-800">
                    {item.nama}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.kelas}
                  </p>

                </div>
              ))}

            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default About;