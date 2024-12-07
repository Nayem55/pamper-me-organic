import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const contactAnimation = {
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

  return (
    <section className="py-16 px-6 sm:px-8 w-[90%] sm:w-[80%] mx-auto rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#333]">
        Contact Us
      </h2>
      <div className="max-w-xl mx-auto">
        <motion.form
          variants={contactAnimation}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={contactAnimation}>
            <label
              className="block text-sm font-semibold text-[#333] mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#DF1B4D] transition-all duration-300"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div variants={contactAnimation}>
            <label
              className="block text-sm font-semibold text-[#333] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#DF1B4D] transition-all duration-300"
              placeholder="Your Email"
            />
          </motion.div>

          <motion.div variants={contactAnimation}>
            <label
              className="block text-sm font-semibold text-[#333] mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#DF1B4D] transition-all duration-300"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </motion.div>

          <motion.button
            variants={contactAnimation}
            className="w-full bg-[#000] text-white font-semibold py-3 rounded-md hover:bg-[#98a375] transition-colors duration-300"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
