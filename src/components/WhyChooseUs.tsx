
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Wallet,
  Clock,
  Group,
  IndianRupee,
  Sofa,
  Home,

  HandCoins,
  Star,
} from 'lucide-react';


const WhyChooseUs = () => {
  const reasons = [
    { icon: <ShieldCheck size={48} />, stats: '10 years warranty' },
    { icon: <BadgeCheck size={48} />, stats: 'Premium Quality Brands' },
    { icon: <Users size={48} />, stats: '24*7 Customer Support' },
    { icon: <Wallet size={48} />, stats: 'Easy EMI Options' },
    { icon: <Clock size={48} />, stats: 'On Time delivery' },
    { icon: <Group size={48} />, stats: '100K+ Clients since 2017' },
    { icon: <IndianRupee size={48} />, stats: 'Best Price Assurance' },
    { icon: <Sofa size={48} />, stats: 'Best Designs in the Industry' },
    { icon: <Home size={48} />, stats: 'Home Automation Tech' },

    { icon: <HandCoins size={48} />, stats: '$20 Million Capital Raised' },
    { icon: <Star size={48} />, stats: '80,000+ 5-star Reviews' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Amenify?</h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className=" rounded-xl px-2 py-4 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center "
            >
              <div className="text-green-600  mb-4 ">{reason.icon}</div>

              <div className="text-white  font-normal text-lg mb-4">
                {reason.stats}
              </div>
       
            </div>
          ))}
        </div>


     
      </div>
    </section>
  );
};

export default WhyChooseUs;
