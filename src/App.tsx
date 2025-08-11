import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectCarousel from './components/ProjectCarousel';

import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import VideoTestimonials from './components/VideoTestimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';
import RecognitionCarousel from './components/Recognize';
import PatentedTechnology from './components/PatentedTechnology';
import FactorySlider from './components/FactorySlider';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PatentedTechnology/>
      <Services />
      <Testimonials />
      <VideoTestimonials />
      <ProjectCarousel />
      <RecognitionCarousel />
      <FactorySlider/>
      {/* <ProjectWalkthrough /> */}
      <WhyChooseUs />

      <Team />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
