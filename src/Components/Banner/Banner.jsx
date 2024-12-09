import React, { Suspense, useRef } from "react";
import banner from "../../assets/Images/banner1.jpg";
import bottle from "../../assets/Images/bottle2.glb";
import { motion, useInView } from "framer-motion";
import "@google/model-viewer";

const Banner = () => {
  const bannerContainer = useRef();
  const isInView = useInView(bannerContainer, { once: true });
  const ref = useRef();
  const isMobile = window.innerWidth <= 768;

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
          <h1 className="text-[18px] md:text-[38px] leading-snug md:leading-tight font-extrabold mb-4">
            Unleash the Power of Pure <br /> Ingredients for Lush, Beautiful{" "}
            <br /> Hair with <span className="text-[#98A375]">Pamper Me</span>
          </h1>
          {/* bottle model mobile*/}
          <div className="w-full h-[40vh] md:w-[50%] justify-center items-center flex sm:hidden">
            <model-viewer
              src={bottle}
              alt="Pamper Me Hair Oil Bottle"
              auto-rotate
              camera-controls
              disable-zoom
              // environment-image={banner}
              style={{
                width: "100%",
                height: isMobile ? "300px" : "500px",
                maxWidth: isMobile ? "350px" : "600px",
              }}
              background-color="#E3EADA"
            />
          </div>
          <p className="text-[#6F7364] text-md mt-6 sm:mt-0 md:text-3xl font-semibold">
            100% Organic Care for Your Hair, The Way Nature Intended
          </p>
        </motion.div>

        {/* Right side bottle model */}
        <div className="w-full h-[40vh] md:w-[50%] justify-center items-center hidden sm:flex">
          <model-viewer
            src={bottle}
            alt="Pamper Me Hair Oil Bottle"
            auto-rotate
            camera-controls
            disable-zoom
            // environment-image={banner}
            style={{
              width: "100%",
              height: isMobile ? "300px" : "500px",
              maxWidth: isMobile ? "350px" : "600px",
            }}
            background-color="#E3EADA"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
