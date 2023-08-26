import { Carousel } from "@material-tailwind/react";
import baner1 from "../images/banner/banner_1_1.webp";
import baner2 from "../images/banner/banner_1_2.webp";
import baner3 from "../images/banner/banner_1_3.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CarouselCustomNavigation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Carousel
      // autoplay={true}
      loop={true}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className=" relative">
        <div className=" absolute flex flex-col my-auto top-1/2 -translate-y-1/2 ml-16 overflow-hidden">
          <span
            data-aos="fade-right"
            className=" text-yellow-600 font-semibold text-sm "
          >
            Top Trending
          </span>
          <span data-aos="fade-left" className=" text-white font-bold text-lg ">
            Your Favorite Choice
          </span>
          <span
            data-aos="fade-right"
            className=" text-red-500 font-bold text-lg "
          >
            Buy Now
          </span>
        </div>

        <img
          src={baner1}
          alt="banner 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <img
          src={baner2}
          alt="banner 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <img
          src={baner3}
          alt="banner 3"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
}
