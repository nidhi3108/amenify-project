import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team2 from "../images/team2.jpg";
import Team5 from "../images/team5.jpg";

// Custom arrow components
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



const Team = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [showArrows, setShowArrows] = useState(true);

  const teamMembers = [
    { name: "Shivam", image: Team5 },
    { name: "Aparna", image: Team2 },
    { name: "James Lee", image: Team5 },
    { name: "Elena Rodriguez", image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg" },
    { name: "Marcus Thompson", image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" },
    { name: "Sophie Chen", image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg" },
    { name: "David Park", image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" },
    { name: "Olivia Carter", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
    { name: "James Lee", image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
  ];


  useEffect(() => {
    const update = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1200;

      if (w <= 640) {
        setSlidesToShow(2); 
        setShowArrows(true); 
      } else if (w <= 1024) {
        setSlidesToShow(2); 
        setShowArrows(true);
      } else {
        setSlidesToShow(5); 
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
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: showArrows,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
        </div>
        <div className="relative">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-3">
                <div className="flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 object-cover rounded-full shadow-lg"
                  />
                  <p className="mt-3 text-lg font-semibold text-gray-800">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Team;
