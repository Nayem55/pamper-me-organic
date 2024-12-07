import React from "react";
import logo from "../../assets/Images/logo (2).png";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const footerAnimation = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };
  const iconAnimation = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="mx-auto bg-black text-white">
      <div className="h-40 about px-4 sm:px-[10%] md:px-[15%] flex items-center justify-between">
        <motion.h3
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-semibold"
        >
          Pamper Me Lush Locks Hair Potion
        </motion.h3>
        <motion.button
          className="text-lg sm:text-xl bg-black py-3 px-8 sm:px-10 rounded-3xl"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
        >
          Buy Now
        </motion.button>
      </div>
      <div className="w-full sm:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-10 sm:px-0 py-10 gap-10">
        <motion.div
          variants={footerAnimation}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start mb-8 sm:mb-0"
        >
          {/* <motion.img
            variants={footerAnimation}
            src={logo}
            alt="Pamper Me Organic Hair Oil"
            className="w-[160px] sm:w-[100px]"
          /> */}
          <motion.div
            variants={footerAnimation}
            className="flex flex-col gap-2 md:text-left mt-4"
          >
            <p className="text-white">Rampura, Banasree, Dhaka.</p>
            <p className="text-white">contact@pampermeorganichair.com</p>
            <p className="text-white">+88 01404-403396</p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={footerAnimation}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <motion.h3
            variants={footerAnimation}
            className="text-lg font-semibold mb-4 text-white"
          >
            Product
          </motion.h3>
          <ul className="space-y-2">
            <motion.li variants={footerAnimation}>
              <a href="/" className="text-white hover:underline">
                Organic Hair Oil
              </a>
            </motion.li>
            <motion.li variants={footerAnimation}>
              <a href="/" className="text-white hover:underline">
                Ingredients
              </a>
            </motion.li>
            <motion.li variants={footerAnimation}>
              <a href="/" className="text-white hover:underline">
                How to Use
              </a>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          variants={footerAnimation}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <motion.h3
            variants={footerAnimation}
            className="text-lg font-semibold mb-4 text-white"
          >
            Learn More
          </motion.h3>
          <ul className="space-y-2">
            <motion.li variants={footerAnimation}>
              <a href="#hairTips" className="text-white hover:underline">
                Hair Care Tips
              </a>
            </motion.li>
            <motion.li variants={footerAnimation}>
              <a href="/" className="text-white hover:underline">
                Why Organic?
              </a>
            </motion.li>
            <motion.li variants={footerAnimation}>
              <a href="#faqs" className="text-white hover:underline">
                FAQs
              </a>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          variants={footerAnimation}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <motion.h3
            variants={footerAnimation}
            className="text-lg font-semibold mb-4 text-white"
          >
            About Us
          </motion.h3>
          <ul className="space-y-2">
            <motion.li variants={footerAnimation}>
              <a href="/" className="text-white hover:underline">
                Our Story
              </a>
            </motion.li>
            <motion.li variants={footerAnimation}>
              <a href="/" className="text-white hover:underline">
                Sustainability
              </a>
            </motion.li>
            <motion.li variants={footerAnimation}>
              <a href="/" className="text-white hover:underline">
                Contact Us
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      <div className="pt-4 pb-12 flex flex-col sm:flex-row items-center justify-between w-[90%] sm:w-[70%] mx-auto">
        <motion.div
          variants={iconAnimation}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-3xl flex items-center gap-3 justify-center sm:justify-start"
        >
          <motion.button variants={iconAnimation} className="">
            <FaSquareFacebook />
          </motion.button>
          <motion.button variants={iconAnimation}>
            <FaSquareInstagram />
          </motion.button>
          <motion.button variants={iconAnimation}>
            <FaSquareYoutube />
          </motion.button>
        </motion.div>
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.8 },
          }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mt-10 sm:mt-0 sm:text-left"
        >
          © All rights reserved by pamper me org.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
