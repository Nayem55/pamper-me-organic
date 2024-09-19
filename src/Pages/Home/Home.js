import React from 'react';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import ProductFeatures from '../../Components/ProductFeatures';
import Ingredients from '../../Components/Ingredients';
import HowToUse from '../../Components/HowToUse';
import Reviews from '../../Components/Reviews';
import FAQ from '../../Components/FAQ';
import AboutUs from '../../Components/AboutUs';
import ContactUs from '../../Components/ContactUs';
import CallToAction from '../../Components/CallToAction';

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <ProductFeatures/>
      <Ingredients/>
      <HowToUse/>
      <Reviews/> 
      <FAQ/> 
      <AboutUs/> 
      <ContactUs/> 
      <CallToAction/> 
    </div>
  );
};

export default Home;