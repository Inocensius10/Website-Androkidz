import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Galery() {
  const [galery, setGalery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalery();
  }, []);

  const fetchGalery = async () => {
    try {
      const { data, error } = await supabase
        .from("galery")
        .select("*")
        .order("id", { ascending: false });

      if (error) throw error;

      setGalery(data || []);
    } catch (err) {
      console.error("GALERY ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h1 className="text-center md:text-5xl font-bold text-blue-900 mb-4">
        Galery Kegiatan
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Dokumentasi kegiatan belajar robotics dan coding di AndroKidz.
      </p>

      {loading ? (
        <div className="text-center py-20">
          <p className="text-gray-500">
            Memuat galeri...
          </p>
        </div>
      ) : galery.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">
            Belum ada foto kegiatan.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galery.map((item, index) => {
            const borderColor =
              index % 2 === 0
                ? "border-orange-500"
                : "border-blue-900";

            return (
              <div
                key={item.id}
                className={`
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  border-4
                  ${borderColor}
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                `}
              >
                {/* FOTO */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.judul}
                    className="
                      w-full
                      h-72
                      sm:h-80
                      object-cover
                      hover:scale-110
                      transition-transform
                      duration-700
                    "
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=Image+Not+Found";
                    }}
                  />
                </div>

                {/* JUDUL DI BAWAH FOTO */}
                <div className="p-4">
                  <h3
                    className="
                      text-center
                      text-lg
                      md:text-xl
                      font-bold
                      text-gray-800
                    "
                  >
                    {item.judul}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Galery;