import gambar1 from "../assets/images/galeri/gambar1.jpeg";
import gambar2 from "../assets/images/galeri/gambar2.jpeg";
import gambar3 from "../assets/images/galeri/gambar3.jpeg";
import gambar4 from "../assets/images/galeri/gambar4.jpeg";
import gambar5 from "../assets/images/galeri/gambar5.jpeg";
import gambar6 from "../assets/images/galeri/gambar6.jpeg";
import gambar7 from "../assets/images/galeri/gambar7.jpeg";
import gambar8 from "../assets/images/galeri/gambar8.jpeg";
import gambar9 from "../assets/images/galeri/gambar9.jpeg";

function Galery() {
  const images = [
    gambar1, gambar2, gambar3, gambar4, gambar5,
    gambar6, gambar7, gambar8, gambar9
  ];

  const borderColors = [
    "border-blue-900",
    "border-yellow-400",
    "border-orange-400"
  ];

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Galeri Kegiatan
        </h1>

        <p className="text-gray-600 mb-12">
          Dokumentasi kegiatan belajar, kreativitas, dan keseruan anak-anak di AndroKidz.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className={`border-4 ${
                borderColors[index % borderColors.length]
              } rounded-2xl overflow-hidden shadow hover:shadow-lg transition`}
            >
              <img
                src={img}
                alt={`Galeri ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Galery;