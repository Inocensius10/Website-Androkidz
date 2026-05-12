import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Kurikulum from "./pages/Kurikulum";
import Galery from "./pages/Galery";
import Kontak from "./pages/Kontak";

// ADMIN
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminGuru from "./admin/AdminGuru";
import AdminGalery from "./admin/AdminGalery";

// PROTECTED ROUTE
function ProtectedAdminRoute({ children }) {
  const isAuth = localStorage.getItem("adminAuth") === "true";

  return isAuth ? children : <Navigate to="/admin/login" replace />;
}

function App() {
  return (
    <Routes>

      {/* ================= USER WEBSITE ================= */}
      <Route
        path="*"
        element={
          <div className="font-sans">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/kurikulum" element={<Kurikulum />} />
              <Route path="/galery" element={<Galery />} />
              <Route path="/kontak" element={<Kontak />} />
            </Routes>

            <Footer />
          </div>
        }
      />

      {/* ================= LOGIN ADMIN ================= */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ================= ADMIN PANEL ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="guru" element={<AdminGuru />} />
        <Route path="galery" element={<AdminGalery />} />
      </Route>

    </Routes>
  );
}

export default App;