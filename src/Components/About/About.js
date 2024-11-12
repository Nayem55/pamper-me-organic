import React from "react";
import { Link } from "react-router-dom";
import "@google/model-viewer";
import banner from "../../Images/about-3.jpg";

const About = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[100vh] sm:h-[80vh] bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${banner})`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full max-w-5xl flex flex-col items-center sm:text-center sm:p-6 z-10">
        <p className="text-3xl px-4 mt-10 sm:text-5xl font-bold mb-6 text-[#0C2E01]">
          About Pamper Me Hair Oil
        </p>

        <p className="sm:text-xl text-black mb-10 px-4 sm:px-8">
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
          className="px-8 py-3 bg-[#0C2E01] text-white font-bold rounded-full transform transition-all duration-300 hover:bg-[#6F7364] hover:scale-105"
        >
          BUY NOW
        </Link>
      </div>
    </div>
  );
};

export default About;
