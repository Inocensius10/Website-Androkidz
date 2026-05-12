import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function AdminGuru() {

  const [guru, setGuru] = useState([]);

  const [form, setForm] = useState({
    nama: "",
    kelas: "",
    foto: "",
  });

  const [editId, setEditId] = useState(null);

  const [loading, setLoading] = useState(false);

  // ================= FETCH DATA =================
  useEffect(() => {
    fetchGuru();
  }, []);

  const fetchGuru = async () => {

    const { data, error } = await supabase
      .from("guru")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setGuru(data);
    }
  };

  // ================= UPLOAD FOTO =================
  const handleImageChange = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setLoading(true);

    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("androkidz")
      .upload(fileName, file);

    if (uploadError) {
      console.log(uploadError);
      setLoading(false);
      return;
    }

    const { data } = supabase.storage
      .from("androkidz")
      .getPublicUrl(fileName);

    setForm({
      ...form,
      foto: data.publicUrl,
    });

    setLoading(false);
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.nama || !form.kelas || !form.foto) {
      alert("Semua field wajib diisi");
      return;
    }

    setLoading(true);

    // ================= EDIT =================
    if (editId) {

      const { error } = await supabase
        .from("guru")
        .update({
          nama: form.nama,
          kelas: form.kelas,
          foto: form.foto,
        })
        .eq("id", editId);

      if (error) {
        console.log(error);
      } else {
        alert("Data guru berhasil diupdate");
      }

      setEditId(null);
    }

    // ================= TAMBAH =================
    else {

      const { error } = await supabase
        .from("guru")
        .insert([
          {
            nama: form.nama,
            kelas: form.kelas,
            foto: form.foto,
          },
        ]);

      if (error) {
        console.log(error);
      } else {
        alert("Guru berhasil ditambahkan");
      }
    }

    // RESET
    setForm({
      nama: "",
      kelas: "",
      foto: "",
    });

    await fetchGuru();

    setLoading(false);
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {

    const confirmDelete = confirm(
      "Yakin ingin menghapus guru ini?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("guru")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
    } else {
      fetchGuru();
    }
  };

  // ================= EDIT =================
  const handleEdit = (item) => {

    setForm({
      nama: item.nama,
      kelas: item.kelas,
      foto: item.foto,
    });

    setEditId(item.id);
  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Kelola Guru
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            {editId ? "Edit Guru" : "Tambah Guru"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* FOTO */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto Guru
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* PREVIEW */}
            {form.foto && (
              <img
                src={form.foto}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full border"
              />
            )}

            {/* NAMA */}
            <input
              type="text"
              placeholder="Nama guru"
              value={form.nama}
              onChange={(e) =>
                setForm({
                  ...form,
                  nama: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* KELAS */}
            <input
              type="text"
              placeholder="Kelas Mengajar"
              value={form.kelas}
              onChange={(e) =>
                setForm({
                  ...form,
                  kelas: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* BUTTON */}
            <button
              disabled={loading}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
            >
              {loading
                ? "Loading..."
                : editId
                ? "Update Guru"
                : "Simpan Guru"}
            </button>

          </form>
        </div>

        {/* LIST */}
        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Daftar Guru
          </h2>

          <div className="space-y-4">

            {guru.map((item) => (

              <div
                key={item.id}
                className="border rounded-xl p-4 flex items-center justify-between gap-4"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={item.foto}
                    alt={item.nama}
                    className="w-16 h-16 object-cover rounded-full"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.nama}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.kelas}
                    </p>
                  </div>
                </div>

                {/* ACTION */}
                <div className="flex gap-2">

                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    Hapus
                  </button>

                </div>
              </div>

            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminGuru;