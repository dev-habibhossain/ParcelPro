import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import Support from "../Support/Support";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-285 mx-auto py-20">
        <HowItWorks />
      </div>
      <OurServices />
      <div className="max-w-285 mx-auto py-20">
        <Brands />
        <div className="border-dotted border-neutral border-b-2 "></div>
        <Support />
        <div className="border-dotted border-neutral border-b-2"></div>
        
      </div>
    </div>
  );
}
