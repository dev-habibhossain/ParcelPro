import ServicesImg from "../../../assets/service.png";

export default function OurServices() {
  // Array containing data for all 6 cards to keep code DRY and clean
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Delivery (COD)",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <section className="w-full rounded-4xl max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      {/* Optional: Section Title Area */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-primary text-lg max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From <br /> personal packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>

      {/* Grid Container: 3 columns on large screens, automatically wraps into rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-stretch px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full bg-primary rounded-2xl border border-opacity-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center p-6 sm:p-8 hover:bg-accent "
          >
            <div className="flex flex-col items-center gap-4">
              {/* Image Container */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-linear-to-b from-[#EEEDFC] to-transparent p-2">
                <img
                  src={ServicesImg}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-secondary mt-2">
                {service.title}
              </h3>

              {/* Card Description */}
              <p className="text-neutral text-base leading-relaxed mt-1">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
