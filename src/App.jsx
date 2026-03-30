import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kurikulum from "./pages/Kurikulum";
import Galery from "./pages/Galery";
import Kontak from "./pages/Kontak";

function App() {
  return (
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
  );
}

export default App;