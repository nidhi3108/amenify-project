import React from 'react';
import { Play, Clock, Users, CheckCircle } from 'lucide-react';

const ProjectWalkthrough = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with an in-depth discussion about your vision, lifestyle, and requirements.",
      duration: "1-2 hours"
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Our team creates detailed concepts, mood boards, and 3D visualizations.",
      duration: "1-2 weeks"
    },
    {
      number: "03",
      title: "Design Refinement",
      description: "We refine the design based on your feedback and finalize all specifications.",
      duration: "1 week"
    },
    {
      number: "04",
      title: "Implementation",
      description: "Our skilled craftsmen bring your vision to life with meticulous attention to detail.",
      duration: "4-12 weeks"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final installation, we follow a proven process 
            that ensures exceptional results every time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                alt="Design Process Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-colors">
                <button className="bg-green-600 rounded-full p-4 hover:bg-amber-700 transition-colors group-hover:scale-110 transform duration-300">
                  <Play size={32} className="text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Behind the Scenes</h3>
                <p className="text-gray-200">Watch our design process in action</p>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 mr-3">{step.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="mt-6 ml-6 h-8 w-px bg-gray-200"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-100 rounded-xl">
            <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Satisfaction</h3>
            <p className="text-gray-600">We ensure every detail meets your expectations</p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-xl">
            <Users className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600">Award-winning designers and skilled craftsmen</p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-xl">
            <Clock className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
            <p className="text-gray-600">Projects completed within agreed timelines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectWalkthrough;