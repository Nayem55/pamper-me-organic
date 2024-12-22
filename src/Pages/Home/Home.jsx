import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import ProductFeatures from "../../Components/ProductFeatures";
import Ingredients from "../../Components/Ingredients";
import HowToUse from "../../Components/HowToUse";
import Reviews from "../../Components/Reviews";
import FAQ from "../../Components/FAQ";
import AboutUs from "../../Components/AboutUs";
import ContactUs from "../../Components/ContactUs";
import CallToAction from "../../Components/CallToAction";
import Test from "../../Components/Test";
import Benefits from "../../Components/Benefits/Benefits";
import { useNavigate } from "react-router-dom";
import ProductPurchase from "../../Components/ProductPurchase/ProductPurchase";
import HairTips from "../../Components/HairTips/HairTips";
import lottie from "lottie-web"
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation)



const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <Banner />
      <About />
      <Benefits />
      <Ingredients />
      <HowToUse />
      {/* <Reviews /> */}
      <ProductPurchase/>
      <FAQ />
      <HairTips/>
      <ContactUs />
      {/* <CallToAction /> */}
      {/* <Test /> */}
      <button
        onClick={() => navigate("/checkout")}
        className={`fixed right-10 sm:right-16 bottom-6 sm:bottom-10 px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg bg-black text-white rounded z-50 cursor-pointer duration-300 ${
          scrollY > 300 ? "" : "bottom-[-100vw]"
        }  `}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Home;
