import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import step1 from "../assets/Images/step-1.webp";
import step2 from "../assets/Images/step-2.webp";
import step3 from "../assets/Images/step-3.webp";
import step4 from "../assets/Images/step-4.webp";

const HowToUse = () => {
  const stepsContainer = useRef();
  const isInView = useInView(stepsContainer, { once: true });

  // Detect screen size
  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  return (
    <section className="my-10 sm:mb-[240px] sm:mt-44">
      <h2 className="text-4xl font-semibold text-center">
        4 Steps For Your Beautiful Hair
      </h2>
      <div className="pt-20" ref={stepsContainer}>
        <div className="grid w-[90%] mx-auto grid-cols-1 sm:grid-cols-4 gap-20 [&_h3]:text-lg [&_h3]:font-medium [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-5 [&_img]:rounded">
          <motion.div
            initial={{ y: isMobile ? 0 : 60, opacity: 0 }}
            animate={
              isInView && { y: 0, opacity: 1, transition: { duration: 2 } }
            }
          >
            <img src={step1} alt="" />
            <h3>Step 1: Prepare Your Hair</h3>
            <p>
              Before applying, ensure your hair is dry or slightly damp. Pour a
              few drops of Pamper Me Organic Hair Oil into the palm of your
              hands and rub them together to evenly distribute the oil.
            </p>
          </motion.div>
          <motion.div
            className="translate-y-16"
            initial={{ y: isMobile ? 0 : 120, opacity: 0 }}
            animate={
              isInView && { y: isMobile ? 0 : 60, opacity: 1, transition: { duration: 2 } }
            }
          >
            <img src={step2} alt="" />
            <h3>Step 2: Scalp & Root Massage</h3>
            <p>
              Gently massage the oil into your scalp using circular motions.
              This helps stimulate blood circulation and promotes healthier hair
              growth. Make sure the oil reaches the roots of your hair for deep
              nourishment.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: isMobile ? 0 : 60, opacity: 0 }}
            animate={
              isInView && { y: 0, opacity: 1, transition: { duration: 2 } }
            }
          >
            <img src={step3} alt="" />
            <h3>Step 3: Length & Tips Care</h3>
            <p>
              Run your fingers through the lengths of your hair to coat it with
              oil, paying extra attention to the tips. Leave the oil in for at
              least 30 minutes or overnight for a more intensive treatment.
            </p>
          </motion.div>
          <motion.div
            className="translate-y-16"
            initial={{ y: isMobile ? 0 : 120, opacity: 0 }}
            animate={
              isInView && {
                y: isMobile ? 0 : 60,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }
            }
          >
            <img src={step4} alt="" />
            <h3>Step 4: Length & Tips Care</h3>
            <p>
              Run your fingers through the lengths of your hair to coat it with
              oil, paying extra attention to the tips. Leave the oil in for at
              least 30 minutes or overnight for a more intensive treatment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
