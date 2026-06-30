import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import cutomerTop from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
export default function Reviews({ reviewsPromise }) {
  const reviews = use(reviewsPromise);
  return (
    <div className="mb-24">
      <div className="text-center mb-24">
        <div className="flex justify-center">
          <img src={cutomerTop} alt="customer-top" />
        </div>
        <h3 className="text-3xl text-center text-secondary font-bold py-4">
          What our customers are sayings
        </h3>
        <p className="text-neutral text-sm ">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>

      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
