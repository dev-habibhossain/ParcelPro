import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

export default function RootLayout() {
  return (
    
      <div className="max-w-7xl mx-auto my-4"> 
        <Navbar />
        <Outlet />
        <Footer />
      </div>
  );
}
