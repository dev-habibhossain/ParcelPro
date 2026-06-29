import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Prove from "../ProveSection/Prove";
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
        <Prove />
        <div className="border-dotted border-neutral border-b-2 "></div>
        <Support />
        <div className="border-dotted border-neutral border-b-2"></div>
        
      </div>
    </div>
  );
}
