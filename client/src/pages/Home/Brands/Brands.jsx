import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import image1 from "../../../assets/brands/amazon.png";
import image2 from "../../../assets/brands/amazon_vector.png";
import image3 from "../../../assets/brands/casio.png";
import image4 from "../../../assets/brands/moonstar.png";
import image5 from "../../../assets/brands/randstad.png";
import image6 from "../../../assets/brands/star.png";
import image7 from "../../../assets/brands/start_people.png";

export default function Brands() {
  const images = [
    { alt: "Image 1", src: image1 },
    { alt: "Image 3", src: image3 },
    { alt: "Image 5", src: image5 },
    { alt: "Image 4", src: image4 },
    { alt: "Image 2", src: image2 },
    { alt: "Image 6", src: image6 },
    { alt: "Image 7", src: image7 },
  ];

  return (
    <div className="w-full py-8 overflow-hidden">
      <h1 className="text-secondary text-2xl font-bold text-center mb-8">
        We've helped thousands of sales teams
      </h1>

      <div className="w-full swiper-marquee-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          speed={8000} // Increased from 4000 to 8000 for a perfectly relaxed, standard marquee flow
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 6, spaceBetween: 60 },
          }}
          className="linear-swiper flex items-center"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center items-center h-12 w-24 md:w-32 ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Keeps the marquee flow continuous and steady */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .linear-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `,
        }}
      />
    </div>
  );
}
