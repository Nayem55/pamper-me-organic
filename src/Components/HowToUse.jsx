import React, { useRef } from "react";
import img from "../assets/Images/how to use.webp";
import { motion, useInView } from "framer-motion";
import step1 from "../assets/Images/step-1.webp"
import step2 from "../assets/Images/step-2.webp"
import step3 from "../assets/Images/step-3.webp"
import step4 from "../assets/Images/step-4.webp"

const HowToUse = () => {
  const stepsContainer = useRef();
  const isInView = useInView(stepsContainer, { once: true });

  return (
    <section className="my-10">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
        4 Steps For Your Beautiful Hair
      </h2>
      <div className="pt-20" ref={stepsContainer}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 w-[90%] sm:w-[70%] mx-auto">
          {/* Step 1 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={
              isInView && { y: 0, opacity: 1, transition: { duration: 2 } }
            }
            className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all"
          >
            <img
              src={step1}
              alt="Step 1: Prepare Your Hair"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">Step 1: Prepare Your Hair</h3>
            <p className="text-sm text-center text-gray-600">
              Before applying, ensure your hair is dry or slightly damp. Pour a
              few drops of Pamper Me Organic Hair Oil into the palm of your
              hands and rub them together to evenly distribute the oil.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={
              isInView && { y: 0, opacity: 1, transition: { duration: 2 } }
            }
            className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all"
          >
            <img
              src={step2}
              alt="Step 2: Scalp & Root Massage"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">Step 2: Scalp & Root Massage</h3>
            <p className="text-sm text-center text-gray-600">
              Gently massage the oil into your scalp using circular motions.
              This helps stimulate blood circulation and promotes healthier hair
              growth. Make sure the oil reaches the roots of your hair for deep
              nourishment.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={
              isInView && { y: 0, opacity: 1, transition: { duration: 2 } }
            }
            className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all"
          >
            <img
              src={step3}
              alt="Step 3: Length & Tips Care"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">Step 3: Length & Tips Care</h3>
            <p className="text-sm text-center text-gray-600">
              Run your fingers through the lengths of your hair to coat it with
              oil, paying extra attention to the tips. Leave the oil in for at
              least 30 minutes or overnight for a more intensive treatment.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: { duration: 2, delay: 0.5 },
              }
            }
            className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all"
          >
            <img
              src={step4}
              alt="Step 4: Rinse and Style"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">Step 4: Rinse and Style</h3>
            <p className="text-sm text-center text-gray-600">
              After the oil has absorbed, rinse your hair thoroughly with warm
              water. Style your hair as desired, and enjoy the beautiful, healthy
              shine!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
