import { FaWarehouse } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdCorporateFare } from "react-icons/md";
import { SiCashapp } from "react-icons/si";

export default function HowItWorks() {
  return (
    <section className="px-4 md:px-0">
      <h1 className="text-2xl text-secondary pb-6 font-bold ">How It Works</h1>
      {/* Changed flex to flex-wrap for responsiveness */}
      <div className="flex flex-wrap md:flex-nowrap gap-3 justify-center items-center">
        {/* Box 1 - Booking Pick & Drop */}
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-full sm:w-[calc(50%-12px)] lg:w-1/4 h-48">
          <div className="text-secondary text-4xl font-bold">
            <FaTruckFast />
          </div>
          <h3 className="font-bold text-secondary text-xl">
            Booking Pick & Drop
          </h3>
          <p className="text-neutral font-semibold">
            Schedule a pickup and drop-off for your packages with ease.
          </p>
        </div>

        {/* Box-2 - Cash On Delivery */}
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-full sm:w-[calc(50%-12px)] lg:w-1/4 h-48">
          <div className="text-secondary text-4xl font-bold">
            <SiCashapp />
          </div>
          <h3 className="font-bold text-secondary text-xl">Cash On Delivery</h3>
          <p className="text-neutral font-semibold">
            Pay for your deliveries conveniently upon receiving your packages.
          </p>
        </div>

        {/* Box-3 - Delivery Hub */}
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-full sm:w-[calc(50%-12px)] lg:w-1/4 h-48">
          <div className="text-secondary text-4xl font-bold">
            <FaWarehouse />
          </div>
          <h3 className="font-bold text-secondary text-xl">Delivery Hub</h3>
          <p className="text-neutral font-semibold">
            Your packages are processed and sorted at our central delivery hub.
          </p>
        </div>

        {/* Box-4 - Booking SME & Corporate */}
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-full sm:w-[calc(50%-12px)] lg:w-1/4 h-48">
          <div className="text-secondary text-4xl font-bold">
            <MdCorporateFare />
          </div>
          <h3 className="font-bold text-secondary text-xl">
            Booking SME & Corporate
          </h3>
          <p className="text-neutral font-semibold">
            Maintain all your business deliveries in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
