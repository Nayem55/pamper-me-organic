import React from "react";
import banner from "../../Images/banner1.jpg";
import bottle from "../../Images/bottle.glb";

const Banner = () => {
  // Determine if the screen is mobile or desktop
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 md:space-x-10 p-6">
        {/* Left side text */}
        <div className="w-full md:w-[50%] text-[#0C2E01]">
          <h1 className="text-2xl md:text-6xl font-extrabold mb-4">
            Pamper Your Hair with{" "}
            <span className="text-[#6F7364]">Pamper Me</span>
          </h1>
          <p className="text-[#6F7364] md:text-3xl md:mt-10 font-semibold">
            100% Organic Care for Your Hair, The Way Nature Intended
          </p>
        </div>

        {/* Right side bottle model */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end">
          <model-viewer
            src={bottle}
            alt="Pamper Me Hair Oil Bottle"
            auto-rotate
            camera-controls
            style={{
              width: "100%",
              height: isMobile ? "300px" : "500px", // Height for mobile vs desktop
              maxWidth: isMobile ? "350px" : "600px", // Max width for mobile vs desktop
            }}
            background-color="#FFF"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
