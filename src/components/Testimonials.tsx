import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    
    {
      name: 'TSWY Playschool',
      role: 'Business Owner',
      image:
        'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
      rating: 5,
      text: "The Amenify team brought our Sriram Wonder Years Preschool to life exactly as we'd imagined, prioritizing safety and security for the children. Parents are amazed by our beautiful spaces, especially the multipurpose and role-play rooms. A massive thank you to Amenify for this wonderful transformation!",
      project: 'Corporate Office Design',
    },
    {
      name: 'Ayush',
      role: 'Interior Design Enthusiast',
      image:
        'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      rating: 5,
      text: "Turning my 3BHK into a peaceful home was my main goal, and Amenify nailed it. If you're looking for an end-to-end solution and want a team that truly brings your vision to life, you can blindly trust AMENIFY with your project.",
      project: 'Kitchen Renovation',
    },
    {
      name: 'Abhijnan ',
      role: 'Homeowner',
      image:
        'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      rating: 5,
      text: "Great workmanship – helped transform my apartment at Godrej Woods. Special thanks to Shashank Srivastava and Sameer Kumar for ensuring that everything fell into place. Highly recommended!",
      project: 'Modern Living Room Renovation',
    },
    {
      name: 'David Thompson',
      role: 'Real Estate Developer',
      image:
        'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
      rating: 5,
      text: 'Their expertise in luxury residential design helped us create stunning model homes that sell faster. The ROI on their design investment has been exceptional.',
      project: 'Luxury Home Staging',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customers Love Amenify
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <div className="flex mb-4 mt-3">
                  {renderStars(testimonial.rating)}
                </div>
  
                </div>
              </div>
              <div className="mb-6 mt-5">

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
