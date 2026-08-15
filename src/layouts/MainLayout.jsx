import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-(--color-bg-secondary) p-4">
      <div className="container mx-auto min-h-[calc(100vh-2rem)]">
        <Header />

        <div className="grid grid-cols-12">
          <aside className="col-span-2">
            <Navbar />
          </aside>

          <main className="col-span-10 pl-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
