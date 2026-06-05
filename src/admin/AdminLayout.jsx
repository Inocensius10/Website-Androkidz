import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLayout() {
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR DESKTOP */}
      <aside
        className="
          w-64
          bg-white
          shadow-md
          hidden
          md:flex
          flex-col
          p-6
        "
      >
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
          onClick={() =>
            setShowLogoutModal(true)
          }
          className="
            mt-auto
            bg-red-600
            text-white
            px-4
            py-2
            rounded-lg
            hover:bg-red-700
          "
        >
          Log Out
        </button>
      </aside>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-full
          w-64
          bg-white
          shadow-xl
          z-50
          transform
          transition-transform
          duration-300
          md:hidden
          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="p-6 flex flex-col h-full">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-blue-700">
              Admin Panel
            </h2>

            <button
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-3 flex-1">

            <Link
              to="/admin"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="block px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/guru"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="block px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Kelola Guru
            </Link>

            <Link
              to="/admin/galery"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="block px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Kelola Galery
            </Link>

          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setShowLogoutModal(true);
            }}
            className="
              bg-red-600
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-red-700
            "
          >
            Log Out
          </button>

        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">

        {/* MOBILE HEADER */}
        <header
          className="
            bg-white
            shadow-sm
            p-4
            flex
            items-center
            justify-between
            md:hidden
          "
        >
          <button
            onClick={() =>
              setMobileMenuOpen(true)
            }
            className="text-2xl"
          >
            ☰
          </button>

          <h2 className="font-bold text-blue-700">
            Admin Panel
          </h2>

          <button
            onClick={() =>
              setShowLogoutModal(true)
            }
            className="
              bg-red-600
              text-white
              px-3
              py-2
              rounded-lg
              text-sm
            "
          >
            Logout
          </button>
        </header>

        <div className="p-4 md:p-6">
          <Outlet />
        </div>

      </main>

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-[100]
            px-4
          "
        >
          <div
            className="
              bg-white
              rounded-2xl
              shadow-xl
              p-6
              w-full
              max-w-sm
            "
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Konfirmasi Logout
            </h2>

            <p className="text-gray-600 mb-6">
              Yakin ingin keluar dari halaman admin?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() =>
                  setShowLogoutModal(false)
                }
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-gray-300
                  hover:bg-gray-100
                "
              >
                Tidak
              </button>

              <button
                onClick={handleLogout}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-red-600
                  text-white
                  hover:bg-red-700
                "
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