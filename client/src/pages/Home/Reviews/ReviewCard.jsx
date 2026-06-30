import reviewCuote from "../../../assets/reviewQuote.png";

export default function ReviewCard({ review, isActive }) {
  const { userName, review: testimonial, user_photoURL, user_email } = review;

  return (
    <div
      className={`max-w-sm bg-base-100 rounded-xl p-6 border mx-auto transition-all duration-300 ease-in-out ${
        isActive
          ? "opacity-100 border-gray-200" // 👈 Fully visible, clean border, no heavy shadow overlays
          : "opacity-30 border-transparent shadow-none" // 👈 Zero shadow when low opacity
      }`}
    >
      <img
        src={reviewCuote}
        className="text-secondary text-2xl mb-4"
        alt="quote"
      />
      <p className="text-neutral leading-relaxed mb-4">{testimonial}</p>
      <div className="border-t border-dashed border-secondary pb-4"></div>

      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full bg-primary"
          src={user_photoURL}
          alt=""
        />

        <div>
          <h3 className="font-semibold text-lg">{userName}</h3>
          <p className="text-sm text-neutral">{user_email}</p>
        </div>
      </div>
    </div>
  );
}
