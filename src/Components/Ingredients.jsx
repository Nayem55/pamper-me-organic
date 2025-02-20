import React from "react";
import img from "../assets/Images/front-view-mint-cinnamon-with-spices-white-ingredients-plant-color.png";
import almondOil from "../assets/icons/almond-oil.png";
import arganOil from "../assets/icons/argan-oil.png";
import coconutOil from "../assets/icons/coconut-oil.png";
import jojobaOil from "../assets/icons/olive-oil.png";
import { motion } from "framer-motion";
import banner from "../assets/Images/ingredientv2.jpg";

const Ingredients = () => {
  const ingredients = [
    {
      icon: coconutOil,
      title: "Coconut Oil",
      desc: "Provides deep hydration and nourishment.",
    },
    {
      icon: arganOil,
      title: "Amla Oil",
      desc: "Adds shine and smoothness to your hair.",
    },
    {
      icon: almondOil,
      title: "Olive Oil",
      desc: "Strengthens hair follicles for healthier growth.",
    },
    {
      icon: jojobaOil,
      title: "Kari Pata",
      desc: "Maintains a healthy and balanced scalp.",
    },
    {
      icon: jojobaOil,
      title: "Onion Extract",
      desc: "Maintains a healthy and balanced scalp.",
    },
    {
      icon: jojobaOil,
      title: "Kari Pata",
      desc: "Maintains a healthy and balanced scalp.",
    },
  ];

  const ingredientsAnimation = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    show: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 w-[90%] sm:w-[80%] py-24 mx-auto">
        <div className="sm:w-[50%]">
          <h2 className="text-4xl font-semibold text-left mb-6 text-[#0C2E01]">
            Ingredients
          </h2>
          <img
            className="my-4 sm:hidden w-[100%]"
            src={img}
            alt="Pamper Me Ingredients"
          />
          <div className="text-left">
            <p className="mb-8 text-lg text-gray-700">
              Pamper Me Organic Hair Oil is crafted with a powerful blend of:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full [&_li]:flex [&_li]:gap-4 [&_img]:w-10 [&_img]:h-10 [&_strong]:text-lg [&_strong]:text-[#0C2E01]">
              {ingredients.map(({ icon, title, desc }, index) => (
                <motion.li
                  key={index}
                  variants={ingredientsAnimation}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={index}
                  className="items-center"
                >
                  <img src={icon} alt={`${title} icon`} />
                  <div>
                    <strong>{title}</strong>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:w-[50%] flex justify-center">
          <img
            className="hidden sm:block w-full max-w-[90%] rounded-lg"
            src={img}
            alt="Pamper Me Ingredients Showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
