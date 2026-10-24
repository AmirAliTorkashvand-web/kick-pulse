import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";

function MainLayout() {
  const [isMenuopen, setIsMenuopen] = useState(false);

  useEffect(() => {
    if (!isMenuopen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuopen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuopen]);

  return (
    <div className="min-h-screen bg-(--color-bg-secondary) p-3 sm:p-4">
      <div className="mx-auto min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-2rem)]">
        <Header setIsMenuopen={setIsMenuopen} />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <aside className="hidden lg:col-span-2 lg:block">
            <Navbar showTitle={true} />
          </aside>
          <div
            onClick={() => setIsMenuopen(false)}
            className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
              isMenuopen
                ? "visible opacity-100"
                : "invisible opacity-0 pointer-events-none"
            }`}
          />

          <aside
            className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] overflow-y-auto border-r border-(--color-border) bg-(--color-bg-secondary) p-4 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
              isMenuopen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsMenuopen(false)}
                aria-label="Close navigation"
                className="rounded-lg p-2 text-white hover:bg-(--color-surface)"
              >
                ✕
              </button>
            </div>

            <Navbar showTitle={true} onNavigate={() => setIsMenuopen(false)} />
          </aside>

          <main className="min-w-0 lg:col-span-10 lg:pl-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
