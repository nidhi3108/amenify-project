import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        'What makes Amenify one of the best interior design companies in Delhi NCR?',
      answer: `Amenify is an innovative, tech-based and customer-focused company with the best value. Here is how we compare:
• See Your Home in 3D VR Previews: See your home before it is built using our patented VR technology.
• In-House Manufacturing: We own the furniture factory. This means you receive quality guaranteed and everything is done in one execution.
• Transparent Pricing + EMI Options: We offer best prices, price match guarantee and multiple easy payment plans.
• 10-Year Warranty: Long-term solutions you can trust for a decade.
• High-End Brands & Smart Home Tech: Top quality finishes that incorporate home automation smoothly into the design.
• On-Time Delivery & Ongoing Support: We always deliver as promised and we support you after the project is finished.
• 100k+ Satisfied Clients: Over 75,000 flat view services and $200M in funding is a pretty strong case.

Amenify helps combine innovation, craftsmanship, and service – so that we can help you get one step closer to building your dream home – without the hassle.`,
    },
    {
      question:
        'Do I need an interior designer near me, or can I work with Amenify online?',
      answer: `Amenify provides an on-site consultation and online interior design services. If you prefer to work with a local interior designer or have an interior designer collaborate with you remotely, with our online tools, we can communicate in real-time and create cost-efficient high-quality interior design services regardless of their geographic location.`,
    },
    {
      question:
        'What types of projects do Amenify handle—residential, commercial, or both?',
      answer: `Amenify specializes in complete end-to-end interior service for both residential and commercial. Amenify caters to both homeowners and commercial clients. Our team of top interior designers tailor each project to reflect the unique style, function, and branding needs of every client, whether it’s a cozy apartment or a modern office space.`,
    },
    {
      question:
        'How does Amenify ensure the best interior design for home projects?',
      answer: `We start with a detailed consultation to understand your taste, lifestyle, and budget. Our expert designers then combine global trends with practical solutions to create beautiful, comfortable, and functional spaces, just right for your daily life.`,
    },
    {
      question:
        'Looking for the best interior designer near you for a quick home renovation?',
      answer: `Yes! Amenify has top-notch interior designers and project managers together to turn your house or apartments’ best spots to do a quick room revamp, or a full-home renovation! Whether you want a mini kitchen remodel or a family room redo, our best designers will make sure it is fast to get started, a customized design, and totally stress-free when it comes time to install.`,
    },
    {
      question:
        'Can I get help with modern or traditional interior design ideas?',
      answer: `Absolutely! Whether you prefer a modern look or traditional Indian style, Amenify’s expert designers guide you with personalized ideas that match your taste and home vibe.`,
    },
    {
      question:
        'Is Amenify suitable for large-scale commercial interior design?',
      answer: `Yes, Amenify specializes in commercial interiors for offices, shops, salons, and cafes. Our expert team designs smart, stylish spaces that boost functionality and reflect your brand, perfect for growing Indian businesses.`,
    },
    {
      question: 'How much does a typical interior designer cost?',
      answer: `The cost of hiring an interior designer in India can vary widely based on factors like project size, scope, and desired materials. Basic interior design services may start around INR 40–60 per square foot, while more premium or customized house interior design solutions can go upwards of INR 100 per square foot. At Amenify, we provide tailored quotes to ensure you receive the best interior design experience for your style, timeline, and budget.`,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="text-green-600 mx-auto mb-4" size={48} />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none rounded-2xl focus:ring-2 focus:ring-green-500 overflow-hidden focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="text-green-600" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={24} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="px-8">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
