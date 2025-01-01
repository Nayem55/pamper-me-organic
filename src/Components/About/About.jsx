import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "@google/model-viewer";
import banner from "../../assets/Images/about.jpg";
import { motion, useInView } from "framer-motion";

const About = () => {
  const aboutContainer = useRef();
  const isInView = useInView(aboutContainer, { once: true });

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[90%] lg:max-w-[80%] mx-auto"
        ref={aboutContainer}
      >
        {/* Left Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={
            isInView && { y: 0, opacity: 1, transition: { duration: 1.5 } }
          }
          className="relative flex justify-center items-center"
        >
          <img
            src="https://nov-one.myshopify.com/cdn/shop/files/img-3-2_768x.png?v=1705138464"
            alt="Hair Oil"
            className="w-[90%] sm:w-[70%] lg:w-[90%] mt-10 sm:mt-0"
          />
          <div className="about absolute bg-white p-5 rounded shadow-md sm:w-72 right-0 bottom-[-40px] transform md:translate-x-[30%]">
            <h3 className="text-4xl font-bold mb-2 text-[#0C2E01]">92%</h3>
            <p className="text-sm text-white">
              92% of customers noticed healthier, shinier hair within the first
              month of using Pamper Me Organic Hair Oil. Experience the power of
              nature with every drop!
            </p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={
            isInView && { y: 0, opacity: 1, transition: { duration: 1.5 } }
          }
          className="relative flex flex-col justify-center text-center md:text-left"
        >
          <p className="text-lg md:text-xl text-gray-600 mb-2 mt-10 sm:mt-0 text-left">About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#0C2E01] text-left">
            Pamper Me Hair Oil
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-10 leading-relaxed text-left">
            Pamper Me Organic Hair Oil is a luxurious blend of nature’s finest
            ingredients, designed to nourish and revitalize your hair from root
            to tip. Infused with organic oils and botanical extracts, this
            lightweight formula helps strengthen hair, reduce breakage, and
            promote healthy growth. Whether you're looking to soothe a dry
            scalp, add shine, or manage frizz, Pamper Me provides deep hydration
            without leaving a greasy residue. Ideal for all hair types, this oil
            is free from harsh chemicals, ensuring a pure and gentle treatment
            for your hair.
          </p>

          <Link
            to="/checkout"
            className="btn-color mb-10 px-6 py-3 w-fit text-sm md:text-md font-semibold rounded bg-cyan-500 text-white transition-all duration-300 hover:bg-[#6F7364]"
          >
            Buy Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
