import supportImg1 from "../../../assets/live-tracking.png";
import supportImg2 from "../../../assets/safe-delivery.png";

export default function Support() {
  const data = [
    {
      img: supportImg1,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      img: supportImg2,
      title: "100% Secure Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: supportImg2,
      title: "24/7 Customer Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section className="w-full  mx-auto py-12 md:px-0 px-8">
      {/* List Container */}
      <div className="flex flex-col gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-primary rounded-2xl  shadow-sm flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8"
          >
            {/* Left Side: Image Container (Takes ~25%-30% width on desktop) */}
            <div className="w-full md:w-[28%] flex justify-center items-center shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
              />
            </div>

            {/* Center: Vertical Dotted Border Line (Hidden on mobile, vertical line on desktop) */}
            <div className="hidden md:block h-24 border-l-2 border-dotted border-secondary border-opacity-30 shrink-0" />

            {/* Right Side: Title & Description Column Layout */}
            <div className="w-full md:flex-1 flex flex-col justify-center text-center md:text-left gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-secondary">
                {item.title}
              </h3>
              <p className="text-neutral text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
