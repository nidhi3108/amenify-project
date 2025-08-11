import  { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo1 from "../images/logo1.jpg";
import Logo2 from "../images/logo2.jpg";
import Logo3 from "../images/logo3.jpg";
import Logo4 from "../images/logo4.jpg";
import Logo5 from "../images/logo5.jpg";
import Logo6 from "../images/logo6.jpg";


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:shadow-lg z-10"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:shadow-lg z-10"
  >
    <ChevronRight size={20} />
  </button>
);

export default function RecognitionCarousel() {
  const items = [
    { id: 1, logo: Logo1, title: "Silicon India", link: "#" },
    { id: 2, logo: Logo2, title: "The Tribune", link: "#" },
    { id: 3, logo: Logo3, title: "Hindustan Times", link: "#" },
    { id: 4, logo: Logo4, title: "The Print", link: "#" },
    { id: 5, logo: Logo5, title: "The Print", link: "#" },
    { id: 6, logo: Logo6, title: "The Print", link: "#" },
  ];

  const [slidesToShow, setSlidesToShow] = useState(4);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const update = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1200;

      if (w <= 640) {
        setSlidesToShow(2);   
        setShowArrows(false); 
      } else if (w <= 1024) {
        setSlidesToShow(2);  
        setShowArrows(true);
      } else {
        setSlidesToShow(4);   
        setShowArrows(true);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5, 
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1536, 
      settings: { slidesToShow: 4, arrows: true },
    },
    {
      breakpoint: 1280, 
      settings: { slidesToShow: 4, arrows: true },
    },
    {
      breakpoint: 1024, 
      settings: { slidesToShow: 3, arrows: true },
    },
    {
      breakpoint: 640,  
      settings: { slidesToShow: 2, arrows: true },
    },
  ],
};



  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-10">Recognized By</h2>

        <div className="relative">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="px-2 sm:px-4">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="h-20 sm:h-24 object-contain mb-3 sm:mb-4"
                  />
                  <h3 className="text-base sm:text-lg font-medium">{item.title}</h3>
                  <a href={item.link} className="text-green-700 hover:underline mt-1 sm:mt-2 text-xs sm:text-sm">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
