import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Factory1 from "../images/factory1.jpg";
import Factory2 from "../images/factory2.jpg";
import Factory3 from "../images/factory3.jpg";
import Factory4 from "../images/factory4.jpg";
import Factory6 from "../images/factory6.jpg";
import Area1 from "../images/area1.jpg";
import Area2 from "../images/area2.jpg";
import Area3 from "../images/are3.jpg";
import Area4 from "../images/area4.jpg";

const FactoryItems = [
  { id: 1, title: "Modular Kitchen", description: "Our kitchens feature HOMAG MDP with Mica finish, and Hettich hardware for style and durability.", image: Factory1 },
  { id: 2, title: "TV Units", description: "Built with BWR ply and Hettich hardware, our TV units offer style and durability.", image: Factory2 },
  { id: 3, title: "Beds", description: "Explore our chic beds with stylish headboards and side tables for a cozy, elegant bedroom.", image: Factory3 },
  { id: 4, title: "Factory Building", description: "Our in-house manufacturing facility with state-of-the-art machines.", image: Factory4 },
  { id: 5, title: "Press Machine", description: "Advanced pressing equipment for perfect finish and durability.", image: Factory6 },
];

const AreaItems = [
  { id: 1, title: "Modular Kitchen", description: "Our kitchens feature HOMAG MDP with Mica finish, and Hettich hardware for style and durability.", image: Area1 },
  { id: 2, title: "TV Units", description: "Built with BWR ply and Hettich hardware, our TV units offer style and durability.", image: Area2 },
  { id: 3, title: "Beds", description: "Explore our chic beds with stylish headboards and side tables for a cozy, elegant bedroom.", image: Area3 },
  { id: 4, title: "Factory Building", description: "Our in-house manufacturing facility with state-of-the-art machines.", image: Area4 },
];

const FactoryCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setSlidesToShow(1); 
        setShowArrows(false); 
      } else if (width <= 1024) {
        setSlidesToShow(2);
        setShowArrows(true);
      } else {
        setSlidesToShow(3); 
        setShowArrows(true);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: showArrows,
  };

  const renderCard = (item) => (
    <div key={item.id} className="px-3">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">
            Amenify's Furniture Factory
          </h2>
          <Slider {...settings}>
            {FactoryItems.map(renderCard)}
          </Slider>
        </div>
      </section>

 
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Slider {...settings}>
            {AreaItems.map(renderCard)}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default FactoryCarousel;
