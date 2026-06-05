function Kurikulum() {
  const programs = [
    {
      title: "Little Engineer",
      age: "4 - 6 Tahun",
      color: "orange",
      items: [
        "Motorik dan Logika Dasar",
        "Puzzle & Problem Solving",
        "Robotik Dasar",
        "Kreativitas dan Imajinasi",
        "Belajar Melalui Bermain",
      ],
    },
    {
      title: "Junior 1",
      age: "7 - 11 Tahun",
      color: "blue",
      items: [
        "Robotik dan Elektronika Dasar",
        "Computational Thinking",
        "Sensor dan Mekanik",
        "Project Based Learning",
        "Problem Solving Terstruktur",
      ],
    },
    {
      title: "Teenager",
      age: "12 - 15 Tahun",
      color: "orange",
      items: [
        "Coding Dasar",
        "Web Development",
        "Artificial Intelligence (AI)",
        "Project Digital Modern",
        "Persiapan Skill Masa Depan",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Program Pembelajaran
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Kurikulum AndroKidz dirancang secara bertahap sesuai usia anak
            agar proses belajar menjadi lebih efektif, menyenangkan, dan
            relevan dengan perkembangan teknologi masa depan.
          </p>
        </div>

        {/* Program */}
        <div className="grid md:grid-cols-3 gap-8">

          {programs.map((program, index) => (
            <div
              key={index}
              className={`
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                border-2
                ${
                  program.color === "orange"
                    ? "border-orange-400"
                    : "border-blue-900"
                }
              `}
            >
              <div className="p-8">

                <h2
                  className={`
                    text-2xl
                    font-bold
                    mb-2
                    ${
                      program.color === "orange"
                        ? "text-orange-500"
                        : "text-blue-900"
                    }
                  `}
                >
                  {program.title}
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                  Usia {program.age}
                </p>

                <ul className="space-y-3">
                  {program.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span
                        className={`
                          mt-1.5
                          w-2
                          h-2
                          rounded-full
                          ${
                            program.color === "orange"
                              ? "bg-orange-500"
                              : "bg-blue-900"
                          }
                        `}
                      ></span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>

        {/* Penjelasan Tambahan */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Metode Pembelajaran
          </h3>

          <p className="text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
            Seluruh program AndroKidz menggunakan metode
            <span className="font-semibold"> Project Based Learning </span>
            dan
            <span className="font-semibold"> Fun Learning </span>
            sehingga peserta didik tidak hanya memahami teori,
            tetapi juga mampu membuat proyek nyata, melatih kreativitas,
            berpikir kritis, kolaborasi, serta kemampuan problem solving
            yang dibutuhkan di masa depan.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Kurikulum;