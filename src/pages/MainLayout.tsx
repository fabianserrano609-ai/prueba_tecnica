import { Footer } from "@/components/own/Footer/footer";
import { Header } from "@/components/own/Header/Header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
