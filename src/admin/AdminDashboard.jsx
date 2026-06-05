import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalGuru: 0,
    totalGalery: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();

    const guruChannel = supabase
      .channel("guru-dashboard")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "guru",
        },
        () => {
          fetchDashboard();
        }
      )
      .subscribe();

    const galeryChannel = supabase
      .channel("galery-dashboard")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "galery",
        },
        () => {
          fetchDashboard();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(guruChannel);
      supabase.removeChannel(galeryChannel);
    };
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const [
        guruResult,
        galeryResult,
      ] = await Promise.all([
        supabase
          .from("guru")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("galery")
          .select("*", {
            count: "exact",
            head: true,
          }),
      ]);

      setStats({
        totalGuru:
          guruResult.count || 0,

        totalGalery:
          galeryResult.count || 0,
      });
    } catch (err) {
      console.error(
        "Dashboard Error:",
        err
      );
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      label: "Total Guru",
      value: stats.totalGuru,
    },
    {
      label: "Total Galery",
      value: stats.totalGalery,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard
      </h1>

      {/* CARD STATISTIK */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-5"
          >
            <p className="text-sm text-gray-500">
              {item.label}
            </p>

            <h3 className="text-3xl font-bold text-blue-700 mt-2">
              {loading
                ? "..."
                : item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* WELCOME */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-3">
          Selamat Datang Admin
        </h2>

        <p className="text-gray-600 mb-4">
          Dashboard ini terhubung langsung
          dengan database Supabase dan
          akan memperbarui data secara
          otomatis.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Total Guru Terdaftar
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mt-2">
              {stats.totalGuru}
            </h3>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">
              Total Foto Galery
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mt-2">
              {stats.totalGalery}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;