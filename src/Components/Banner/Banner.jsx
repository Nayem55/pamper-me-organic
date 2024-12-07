import React, { Suspense, useRef } from "react";
import banner from "../../assets/Images/banner1.jpg";
import { motion, useInView } from "framer-motion";

const Banner = () => {
  const bannerContainer = useRef();
  const isInView = useInView(bannerContainer, { once: true });

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${banner})`,
      }}
      ref={bannerContainer}
    >
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-10 p-6">
        {/* Left side text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={
            isInView && { x: 0, opacity: 1, transition: { duration: 1 } }
          }
          className="w-full md:w-[50%] text-[#0C2E01]"
        >
          <h1 className="text-[24px] md:text-[38px] leading-snug md:leading-tight font-extrabold mb-4">
            Unleash the Power of Pure <br /> Ingredients for Lush, Beautiful{" "}
            <br /> Hair with{" "}
            <span className="text-[#6F7364]">Pamper Me</span>
          </h1>
          <p className="text-[#6F7364] text-lg md:text-3xl font-semibold">
            100% Organic Care for Your Hair, The Way Nature Intended
          </p>
        </motion.div>

        {/* Right side bottle model */}
        {/* <div className="w-full h-[40vh] md:w-[50%] flex justify-center items-center">
          <div
            className="w-[80%] h-full bg-gray-200 rounded-lg md:w-[60%]"
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p className="text-center mt-10 text-sm text-gray-500">
              Bottle Model Placeholder
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
