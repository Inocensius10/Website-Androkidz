import { useState } from "react";

function AdminGalery() {

  const [galery, setGalery] = useState([
    {
      id: 1,
      judul: "Kelas Coding",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      judul: "Aktivitas Anak",
      image: "https://via.placeholder.com/300x200",
    },
  ]);

  const [form, setForm] = useState({
    judul: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  // HANDLE IMAGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setForm({
        ...form,
        image: imageUrl,
      });
    }
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.judul || !form.image) return;

    // EDIT
    if (editId !== null) {

      const updatedGalery = galery.map((item) =>
        item.id === editId
          ? {
              ...item,
              judul: form.judul,
              image: form.image,
            }
          : item
      );

      setGalery(updatedGalery);
      setEditId(null);
    }

    // TAMBAH
    else {

      const newGalery = {
        id: Date.now(),
        judul: form.judul,
        image: form.image,
      };

      setGalery([...galery, newGalery]);
    }

    // RESET
    setForm({
      judul: "",
      image: "",
    });
  };

  // DELETE
  const handleDelete = (id) => {
    setGalery(galery.filter((item) => item.id !== id));
  };

  // EDIT
  const handleEdit = (item) => {
    setForm({
      judul: item.judul,
      image: item.image,
    });

    setEditId(item.id);
  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Kelola Galery
      </h1>

      {/* FORM */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          {editId ? "Edit Galery" : "Tambah Galery"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* INPUT IMAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Gambar
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* PREVIEW IMAGE */}
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="w-full max-w-xs h-52 object-cover rounded-xl border"
            />
          )}

          {/* JUDUL */}
          <input
            type="text"
            placeholder="Judul kegiatan"
            value={form.judul}
            onChange={(e) =>
              setForm({
                ...form,
                judul: e.target.value,
              })
            }
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* BUTTON */}
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
            {editId ? "Update Galery" : "Tambah Galery"}
          </button>

        </form>
      </div>

      {/* LIST GALERY */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {galery.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow overflow-hidden"
          >

            <img
              src={item.image}
              alt={item.judul}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold text-lg mb-4">
                {item.judul}
              </h3>

              <div className="flex gap-2">

                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Hapus
                </button>

              </div>
            </div>
          </div>

        ))}

      </div>
    </div>
  );
}

export default AdminGalery;