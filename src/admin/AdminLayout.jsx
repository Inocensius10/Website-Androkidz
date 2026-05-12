import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLayout() {
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">
          Admin Panel
        </h2>

        <nav className="space-y-3 flex-1">
          <Link
            to="/admin"
            className="block px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/guru"
            className="block px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            Kelola Guru
          </Link>

          <Link
            to="/admin/galery"
            className="block px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            Kelola Galery
          </Link>
        </nav>

        <button
          onClick={() => setShowLogoutModal(true)}
          className="mt-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Log Out
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">

        {/* MOBILE HEADER */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between md:hidden">
          <h2 className="font-bold text-blue-700">
            Admin Panel
          </h2>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Log Out
          </button>
        </header>

        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm animate-fadeIn">

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Konfirmasi Logout
            </h2>

            <p className="text-gray-600 mb-6">
              Yakin ingin keluar dari halaman admin?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Tidak
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Ya, Keluar
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminLayout;