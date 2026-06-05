import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function AdminGalery() {
  const [galery, setGalery] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    judul: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  // ==========================
  // FETCH DATA
  // ==========================
  const fetchGalery = async () => {
  const { data, error } = await supabase
    .from("galery")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("FETCH ERROR:", error);
    return;
  }

  setGalery(data || []);
};

  useEffect(() => {
    fetchGalery();
  }, []);

  // ==========================
  // UPLOAD IMAGE
  // ==========================
  const handleImageChange = async (e) => {
  const file = e.target.files[0];

  if (!file) return;

  try {
    setLoading(true);

    console.log("File dipilih:", file);

    const fileExt = file.name.split(".").pop();

    const fileName =
      Date.now() +
      "-" +
      Math.random().toString(36).substring(2) +
      "." +
      fileExt;

    console.log("Nama file:", fileName);

    const { data: uploadData, error: uploadError } =
      await supabase.storage
        .from("androkidz")
        .upload(fileName, file);

    console.log("Upload Data:", uploadData);
    console.log("Upload Error:", uploadError);

    if (uploadError) {
      alert("ERROR: " + uploadError.message);
      return;
    }

    const { data: publicData } =
      supabase.storage
        .from("androkidz")
        .getPublicUrl(fileName);

    console.log("Public URL:", publicData.publicUrl);

    setForm((prev) => ({
      ...prev,
      image: publicData.publicUrl,
    }));

    alert("Upload berhasil");
  } catch (err) {
    console.error("FULL ERROR:", err);

    alert(
      err?.message ||
      JSON.stringify(err) ||
      "Unknown Error"
    );
  } finally {
    setLoading(false);
  }
};

  // ==========================
  // SUBMIT
  // ==========================
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.judul || !form.image) {
    alert("Lengkapi data terlebih dahulu");
    return;
  }

  try {
    if (editId) {
      const { error } = await supabase
        .from("galery")
        .update({
          judul: form.judul,
          image: form.image,
        })
        .eq("id", editId);

      if (error) throw error;

      alert("Galery berhasil diupdate");
    } else {
      const { data, error } = await supabase
        .from("galery")
        .insert([
          {
            judul: form.judul,
            image: form.image,
          },
        ])
        .select();

      console.log("INSERT DATA:", data);
      console.log("INSERT ERROR:", error);

      if (error) throw error;

      alert("Galery berhasil ditambahkan");
    }

    setForm({
      judul: "",
      image: "",
    });

    setEditId(null);

    fetchGalery();
  } catch (err) {
    console.error("SUBMIT ERROR:", err);

    alert(
      err?.message ||
      JSON.stringify(err) ||
      "Terjadi kesalahan"
    );
  }
};

  // ==========================
  // DELETE
  // ==========================
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Yakin ingin menghapus data?"
  );

  if (!confirmDelete) return;

  try {
    const item = galery.find((g) => g.id === id);

    if (!item) return;

    if (
      item.image.includes(
        "/storage/v1/object/public/androkidz/"
      )
    ) {
      const imagePath = item.image.split(
        "/storage/v1/object/public/androkidz/"
      )[1];

      if (imagePath) {
        await supabase.storage
          .from("androkidz")
          .remove([imagePath]);
      }
    }

    const { error } = await supabase
      .from("galery")
      .delete()
      .eq("id", id);

    if (error) throw error;

    fetchGalery();

    alert("Data berhasil dihapus");
  } catch (err) {
    console.error("DELETE ERROR:", err);

    alert(
      err?.message ||
      JSON.stringify(err) ||
      "Gagal menghapus data"
    );
  }
};

  // ==========================
  // EDIT
  // ==========================
  const handleEdit = (item) => {
    setForm({
      judul: item.judul,
      image: item.image,
    });

    setEditId(item.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          {/* IMAGE */}
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

          {/* LOADING */}
          {loading && (
            <p className="text-blue-600">
              Uploading gambar...
            </p>
          )}

          {/* PREVIEW */}
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
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            {editId
              ? "Update Galery"
              : "Tambah Galery"}
          </button>
        </form>
      </div>

      {/* LIST */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galery.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-500">
            Belum ada data galery
          </div>
        ) : (
          galery.map((item) => (
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
                    onClick={() =>
                      handleEdit(item)
                    }
                    className="flex-1 bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminGalery; 