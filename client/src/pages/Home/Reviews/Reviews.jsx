import { use } from "react";
import reviewCuote from "../../../assets/reviewQuote.png"
export default function Reviews({reviewsPromise}) {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
  <section>
    <div>

    </div>

    {/* Review box */}
    <div>
      <img src={reviewCuote} alt="" />
      <p>review</p>
      <span>dotted line</span>
      <div>
        <img src="" alt="profile" />
        <div>
          <h1>name</h1>
          <p>senior developer</p>
        </div>
      </div>
    </div>
    {/* Review paginator */}
    <div>
      <div>left btn rounded bg-primary text-secondary circle left arrow</div>
      <div>dot dot dot as paginator</div>
      <div>right btn rounded bg-accent text-secondary circle right  arrow</div>
    </div>
  </section>
  )
}
