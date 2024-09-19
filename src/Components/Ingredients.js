import React from "react";
import img from "../Images/ingrediants.JPG"

const Ingredients = () => {
  return (
    <section className="py-10 px-4 w-[90%] sm:w-[80%] mx-auto flex flex-col-reverse sm:flex-row gap-6 items-center">
      <div className="sm:w-[50%]">
        <h2 className="text-3xl font-bold text-left mb-6">Ingredients</h2>
        <img className="my-4 sm:hidden" src={img} alt="" />
        <div className="text-left md:text-left">
          <p className="mb-4">
            Pamper Me Organic Hair Oil is made with a powerful blend of:
          </p>
          <ul className="list-disc list-inside">
            <li>Coconut Oil – for deep hydration and nourishment</li>
            <li>Argan Oil – to add shine and smoothness</li>
            <li>Almond Oil – for strengthening hair follicles</li>
            <li>Jojoba Oil – to maintain a healthy scalp</li>
          </ul>
        </div>
      </div>
      <div className="sm:w-[50%]">
         <img className="hidden sm:block" src={img} alt="" />
      </div>
    </section>
  );
};

export default Ingredients;
