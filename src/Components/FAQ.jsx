import React from "react";
import img from "../assets/Images/faq.jpg";
import { motion } from "framer-motion";

const FAQ = () => {
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
  return (
    <section
      id="faqs"
      className="px-4 w-[90%] sm:w-[80%] mx-auto flex flex-col-reverse sm:flex-row gap-6"
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
          <motion.div
            variants={FaqAnimation}
            className="collapse collapse-plus bg-base-200"
          >
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Is the oil safe for color-treated hair?
            </div>
            <div className="collapse-content">
              <p>
                Yes! Pamper Me Organic Hair Oil is safe for all hair types,
                including color-treated hair.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={FaqAnimation}
            className="collapse collapse-plus bg-base-200"
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How often should I use the oil?
            </div>
            <div className="collapse-content">
              <p>
                For best results, use the oil 2-3 times a week, depending on
                your hair's condition.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={FaqAnimation}
            className="collapse collapse-plus bg-base-200"
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I leave the oil in overnight?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can leave the oil overnight for deep nourishment and
                rinse it off in the morning.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={FaqAnimation}
            className="collapse collapse-plus bg-base-200"
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Will the oil make my hair greasy?
            </div>
            <div className="collapse-content">
              <p>
                No, the non-greasy formula absorbs quickly, leaving your hair
                soft and manageable without weighing it down.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={FaqAnimation}
            className="collapse collapse-plus bg-base-200"
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How long does it take to see results?
            </div>
            <div className="collapse-content">
              <p>
                Results can vary, but most users start noticing smoother,
                shinier hair within 2-3 weeks of regular use.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="sm:w-[50%]">
        <img
          src={img}
          alt="FAQ illustration"
          className="rounded-lg hidden sm:block"
        />
      </div>
    </section>
  );
};

export default FAQ;
