import { FaWarehouse } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdCorporateFare } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
export default function HowItWorks() {
  return (
    <section>
      <h1 className="text-2xl text-secondary pb-6 font-bold ">How It Works</h1>
      <div className="flex gap-3 justify-center items-center">
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-1/4 h-48">
          {/* Box 1 - Booking Pick & Drop */}
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
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-1/4 h-48">
          {/* Box-2 - Cash On Delivery */}
          <div className="text-secondary text-4xl font-bold">
            <SiCashapp />
          </div>
          <h3 className="font-bold text-secondary text-xl">Cash On Delivery</h3>
          <p className="text-neutral font-semibold">
            Pay for your deliveries conveniently upon receiving your packages.
          </p>
        </div>
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-1/4 h-48">
          {/* Box-3 - Delivery Hub */}
          <div className="text-secondary text-4xl font-bold">
            <FaWarehouse />
          </div>
          <h3 className="font-bold text-secondary text-xl">Delivery Hub</h3>
          <p className="text-neutral font-semibold">
            Your packages are processed and sorted at our central delivery hub.
          </p>
        </div>
        <div className="rounded-2xl bg-primary flex flex-col justify-center items-start p-6 w-1/4 h-48">
          {/* Box-4 - Booking SME & Corporate */}
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
