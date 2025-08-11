import React from "react";
import DummyImage from "../images/parented.jpg"; 

const PatentedTechnology = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
        

        <div className="flex justify-center">
          <img
            src={DummyImage}
            alt="Dashboard Preview"
            className="rounded-lg shadow-lg border border-gray-200 w-full max-w-xl object-cover"
          />
        </div>


        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Patented Technology
          </h2>
          <p className="font-semibold text-base md:text-lg mb-4">
            Experience your space before building:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm md:text-base">
            <li>AI driven customer profiling and first set of designs.</li>
            <li>Virtual reality driven interactive 3D space.</li>
            <li>Augmented reality driven design finalization.</li>
            <li>3D camera on-site to capture daily updates.</li>
            <li>Operator portal for daily updates.</li>
            <li>In-house team and factory for execution.</li>
          </ol>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
              Free Estimate
            </button>
            <button className="border border-black text-black-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition">
              Free Consult Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PatentedTechnology;
