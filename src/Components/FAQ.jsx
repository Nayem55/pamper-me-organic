import React, { useState } from "react";
import img from "../assets/Images/faq.jpg";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const FaqAnimation = {
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

  const faqs = [
    {
      question: "Is the oil safe for color-treated hair?",
      answer:
        "Yes! Pamper Me Organic Hair Oil is safe for all hair types, including color-treated hair.",
    },
    {
      question: "How often should I use the oil?",
      answer:
        "For best results, use the oil 2-3 times a week, depending on your hair's condition.",
    },
    {
      question: "Can I leave the oil in overnight?",
      answer:
        "Yes, you can leave the oil overnight for deep nourishment and rinse it off in the morning.",
    },
    {
      question: "Will the oil make my hair greasy?",
      answer:
        "No, the non-greasy formula absorbs quickly, leaving your hair soft and manageable without weighing it down.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results can vary, but most users start noticing smoother, shinier hair within 2-3 weeks of regular use.",
    },
  ];

  return (
    <section
      id="faqs"
      className="px-4 w-[100%] sm:w-[80%] mx-auto flex flex-col-reverse sm:items-center sm:flex-row gap-6"
    >
      <motion.div
        className="sm:w-[50%]"
        variants={FaqAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={FaqAnimation}
          className="text-3xl font-bold text-left mb-6"
        >
          Frequently Asked Questions
        </motion.h2>
        <img
          src={img}
          alt="FAQ illustration"
          className="rounded-lg sm:hidden my-4"
        />
        <div className="mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={FaqAnimation}
              className={`collapse ${
                activeIndex === index ? "collapse-open" : "collapse-close"
              } bg-base-200`}
            >
              <div
                className="collapse-title text-xl font-medium flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span className="text-2xl font-bold">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="collapse-content bg-[#AEBCAD] text-white">
                  <p className="mt-4">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="sm:w-[50%] flex justify-center">
        <img
          src={img}
          alt="FAQ"
          className="rounded-lg hidden sm:block sm:w-[85%]"
        />
      </div>
    </section>
  );
};

export default FAQ;
