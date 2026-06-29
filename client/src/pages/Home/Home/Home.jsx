import HowItWorks from "../../HowItWorks/HowItWorks";
import Banner from "../Banner/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-285 mx-auto py-20">
        <HowItWorks />
      </div>
    </div>
  )
}
