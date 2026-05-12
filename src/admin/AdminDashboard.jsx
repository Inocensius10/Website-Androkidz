function AdminDashboard() {
  const stats = [
    { label: "Total Guru", value: "12" },
    { label: "Galery Upload", value: "48" },
    { label: "Pesan Masuk", value: "7" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {stats.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-5">
            <p className="text-sm text-gray-500">{item.label}</p>
            <h3 className="text-3xl font-bold text-blue-700 mt-2">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-3">Selamat datang, Admin</h2>
        <p className="text-gray-600">
          Gunakan halaman ini untuk mengelola data guru, galeri, dan konten website Androkidz.
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;