import image1 from "../../../assets/brands/amazon.png";
import image2 from "../../../assets/brands/amazon_vector.png";
import image3 from "../../../assets/brands/casio.png";
import image4 from "../../../assets/brands/moonstar.png";
import image5 from "../../../assets/brands/randstad.png";
import image6 from "../../../assets/brands/star.png";
import image7 from "../../../assets/brands/start_people.png";

export default function Prove() {
  const images = [
    { alt: "Image 1", src: image1 },
    { alt: "Image 3", src: image3 },
    { alt: "Image 5", src: image5 },
    { alt: "Image 4", src: image4 },
    { alt: "Image 2", src: image2 },
    { alt: "Image 6", src: image6 },
    { alt: "Image 7", src: image7 },
  ];

  return (
    <div className="w-full py-8">
      <h1 className="text-secondary text-2xl font-bold text-center mb-8">
        We've helped thousands of sales teams
      </h1>

      {/* Flex container: Wraps on mobile, goes in a single line on large screens */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-8 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-12 w-24 md:w-32"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
