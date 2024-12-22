import { useRef } from "react";
import { motion } from "framer-motion";
import "@google/model-viewer";
import bottle from "../../assets/Images/bottle2.glb";
import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";
defineElement(lottie);


const Benefits = () => {
  const ref = useRef();
  const isMobile = window.innerWidth <= 768;

  const leftAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
  };

  const rightAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
  };

  // Array including ingredients with respective icons
  const ingredients = [
    {
      text: "100% Organic Ingredients",
      iconSrc: "https://cdn.lordicon.com/yuncjfyp.json",
    },
    {
      text: "Lightweight & Non-Greasy",
      iconSrc: "https://cdn.lordicon.com/yuncjfyp.json",
    },
    {
      text: "Suitable for All Hair Types",
      iconSrc: "https://cdn.lordicon.com/yuncjfyp.json",
    },
    {
      text: "Promotes Hair Growth",
      iconSrc: "https://cdn.lordicon.com/yuncjfyp.json",
    },
    {
      text: "Enhances Shine & Smoothness",
      iconSrc: "https://cdn.lordicon.com/yuncjfyp.json",
    },
  ];

  return (
    <div className="benefits min-h-screen bg-benefits bg-cover bg-no-repeat p-6 flex flex-col sm:items-center sm:justify-center">
      <p className="text-center text-lg md:text-xl text-gray-600">
        Product Benefits
      </p>
      <h3 className="text-center text-2xl md:text-4xl font-semibold my-3 text-[#0C2E01]">
        Protect and Repair
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-[30%_40%_30%] place-items-center gap-6 md:gap-0 w-full max-w-5xl mt-8">
        {/* Left Column */}
        <motion.div className="flex flex-col gap-8 md:gap-12" ref={ref}>
          {ingredients.slice(0, 3).map((ingredient, index) => (
            <motion.div
              key={index}
              variants={leftAnimation}
              initial="hidden"
              whileInView="show"
              custom={index}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-center md:text-left text-md md:text-2xl text-gray-700"
            >
              <span>{ingredient.text}</span>
              <lord-icon
                src={ingredient.iconSrc}
                trigger="hover"
                colors="primary:#121331,secondary:#6f7364"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
            </motion.div>
          ))}
        </motion.div>

        {/* Center 3D Model */}
        <model-viewer
          src={bottle}
          alt="Pamper Me Hair Oil Bottle"
          // auto-rotate
          // camera-controls
          disable-zoom
          style={{
            width: "100%",
            height: isMobile ? "300px" : "500px",
            maxWidth: isMobile ? "350px" : "600px",
          }}
          background-color="#FFF"
        />

        {/* Right Column */}
        <motion.div className="flex flex-col gap-8 md:gap-12">
          {ingredients.slice(3).map((ingredient, index) => (
            <motion.div
              key={index}
              variants={rightAnimation}
              initial="hidden"
              whileInView="show"
              custom={index}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-center md:text-left text-md md:text-xl text-gray-700"
            >
              <span>{ingredient.text}</span>
              <lord-icon
                src={ingredient.iconSrc}
                trigger="hover"
                colors="primary:#121331,secondary:#6f7364"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
