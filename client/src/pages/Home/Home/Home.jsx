import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-285 mx-auto py-20">
        <HowItWorks />
      </div>
      <OurServices />
    </div>
  )
}
