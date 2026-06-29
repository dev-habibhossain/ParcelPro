import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="carousel my-6">
      <Carousel>
        <div className="relative">
          <img src={bannerImg1} alt="Banner 1" className="w-full h-auto" />
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6 md:bottom-12 md:left-12 lg:bottom-22 lg:left-22 flex flex-col sm:flex-row gap-1.5 sm:gap-2 items-start sm:items-center">
            <button className="btn btn-sm sm:btn-md btn-primary rounded-4xl bg-accent text-black font-bold whitespace-nowrap">
              Track Your Parcel
            </button>
            <div className="flex gap-1.5">
              <button className="btn btn-sm sm:btn-md rounded-full bg-black text-accent font-bold">
                <FaArrowUpRightFromSquare />
              </button>
              <button className="btn btn-sm sm:btn-md bg-white text-black rounded-lg font-bold whitespace-nowrap">
                Be a Rider
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg2} alt="Banner 1" className="w-full h-auto" />
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6 md:bottom-12 md:left-12 lg:bottom-22 lg:left-22 flex flex-col sm:flex-row gap-1.5 sm:gap-2 items-start sm:items-center">
            <button className="btn btn-sm sm:btn-md btn-primary rounded-4xl bg-accent text-black font-bold whitespace-nowrap">
              Track Your Parcel
            </button>
            <div className="flex gap-1.5">
              <button className="btn btn-sm sm:btn-md rounded-full bg-black text-accent font-bold">
                <FaArrowUpRightFromSquare />
              </button>
              <button className="btn btn-sm sm:btn-md bg-white text-black rounded-lg font-bold whitespace-nowrap">
                Be a Rider
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg3} alt="Banner 1" className="w-full h-auto" />
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6 md:bottom-12 md:left-12 lg:bottom-22 lg:left-22 flex flex-col sm:flex-row gap-1.5 sm:gap-2 items-start sm:items-center">
            <button className="btn btn-sm sm:btn-md btn-primary rounded-4xl bg-accent text-black font-bold whitespace-nowrap">
              Track Your Parcel
            </button>
            <div className="flex gap-1.5">
              <button className="btn btn-sm sm:btn-md rounded-full bg-black text-accent font-bold">
                <FaArrowUpRightFromSquare />
              </button>
              <button className="btn btn-sm sm:btn-md bg-white text-black rounded-lg font-bold whitespace-nowrap">
                Be a Rider
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
