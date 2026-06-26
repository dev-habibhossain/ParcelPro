import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
export default function Footer() {
  return (
    <div className="m-4">
      <footer className="footer footer-center bg-[#0B0B0B] text-white rounded-xl p-10 flex flex-col gap-5">
        {/* 1st Line: Logo Name */}
        <aside className="w-full">
          <h2 className="text-3xl font-bold tracking-wider text-white">
            PercelPro
          </h2>
        </aside>

        {/* 2nd Line: Website Paragraph */}
        <div className="w-full my-1">
          <p className=" font-medium text-gray-300">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments —
            we deliver on time, every time.
          </p>
        </div>

        {/* 3rd Line: 6 Nav Items with Top and Bottom Borders & Margins */}
        <nav className="w-full border-t border-b border-gray-800 py-4 my-2">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href="#"
              className="link link-hover font-semibold text-gray-300 hover:text-white transition"
            >
              Services
            </a>
            <a
              href="#"
              className="link link-hover font-semibold text-gray-300 hover:text-white transition"
            >
              Coverage
            </a>
            <a
              href="#"
              className="link link-hover font-semibold text-gray-300 hover:text-white transition"
            >
              About US
            </a>
            <a
              href="#"
              className="link link-hover font-semibold text-gray-300 hover:text-white transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="link link-hover font-semibold text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* 4th Line: Social Icons */}
        <nav className="w-full">
          <div className="flex justify-center gap-5 text-gray-400">
            <Link className=" transition text-3xl text-[#1D80B9]">
              <FaLinkedin />
            </Link>
            <Link className=" transition text-3xl text-white">
              <FaXTwitter />
            </Link>
            <Link className=" transition text-3xl text-[#26A5FF]">
              <FaFacebook />
            </Link>
            <Link className=" transition text-3xl text-[#F70900]">
              <FaYoutube />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
