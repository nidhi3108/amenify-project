import {
  Home,
  Briefcase,
  Twitch as Kitchen,
} from 'lucide-react';
import Service1 from '../images/services1.png'; 
import Service2 from '../images/servuces2.jpg'; 
import Service3 from '../images/services3.jpg'; 

const Services = () => {
  const services = [
    {
      image: Service1,
      icon: <Home size={40} />,
      title: 'Home Interior & Furnishing',

      features: [
        'Space Planning',
        'Color Consultation',
        'Furniture Selection',
        'Lighting Design',
      ],
    },
    {
       image: Service2,
      icon: <Briefcase size={40} />,
      title: 'Office Interior & Furnishing',

      features: [
        'Office Layout',
        'Brand Integration',
        'Ergonomic Solutions',
        'Professional Aesthetics',
      ],
    },
    {
       image: Service3, 
      icon: <Kitchen size={40} />,
      title: 'Modular Furniture',

      features: [
        'Custom Cabinetry',
        'Countertop Selection',
        'Plumbing Fixtures',
        'Storage Solutions',
      ],
    },

  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >

              <div className="h-48 w-full">
                <img
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-green-600 font-semibold hover:text-amber-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
