import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import cutomerTop from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviewsPromise }) {
  const reviews = use(reviewsPromise);
  return (
    <div className="mb-24 px-4">
      {" "}
      {/* Added horizontal padding for mobile screen edges */}
      <div className="text-center mb-24">
        <div className="flex justify-center">
          <img src={cutomerTop} alt="customer-top" />
        </div>
        <h3 className="text-3xl text-center text-secondary font-bold py-4">
          What our customers are sayings
        </h3>
        <p className="text-neutral text-sm max-w-xl mx-auto">
          {" "}
          {/* Added layout constraint for cleaner text breaks */}
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 1,
          slideShadows: false, // 👈 Completely turned off Swiper overlay shadows
        }}
        autoplay={{
          delay: 2000, // 👈 Left exactly at your original timing
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          // On mobile screens, display one centered card
          320: {
            slidesPerView: 1,
          },
          // On tablets and desktops, display your preferred 2 slides
          768: {
            slidesPerView: 2,
          },
        }}
        className="pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            {/* Pass down the isActive property safely to the card */}
            {({ isActive }) => (
              <ReviewCard review={review} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
