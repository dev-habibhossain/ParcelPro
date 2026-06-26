import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

export default function RootLayout() {
  return (
    <section className="bg-[#EAECED]">

      <div className="max-w-[1600px] mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </section>
  );
}
