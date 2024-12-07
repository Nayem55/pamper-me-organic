import { useState } from "react";
import img from "../../assets/Images/product.jpg";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const ProductPurchase = () => {
  const [count, setCount] = useState(1);

  const rightAnimation = {
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
    <div className="productPurchase grid grid-cols-1 md:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center justify-items-center mt-20 mb-28">
      {/* Image Section */}
      <div className="mb-8 md:mb-0">
        <img src={img} alt="Pamper Me Hair Potion" className="w-full h-auto rounded-lg" />
      </div>

      {/* Product Details Section */}
      <motion.div
        variants={rightAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-left md:text-left"
      >
        <motion.p variants={rightAnimation} className="text-2xl font-medium mb-2">
          Pamper Me
        </motion.p>
        <motion.h2 variants={rightAnimation} className="text-4xl font-semibold mb-8">
          Lush Locks Hair Potion
        </motion.h2>
        <motion.p variants={rightAnimation} className="text-2xl font-medium mb-5">
          BDT 400
        </motion.p>
        <motion.p variants={rightAnimation} className="mb-5 text-sm sm:text-base text-gray-600 w-[80%]">
        Pamper yourself with our Pamper Me Lush Locks Hair Potion – the perfect organic solution for your hair care needs. Made from a blend of 20+ natural ingredients, this hair oil promotes healthy, shiny, and nourished hair. Whether you're looking to restore your hair's natural shine or prevent hair damage, this product is tailored to meet all your hair care goals.
        </motion.p>
        <motion.p variants={rightAnimation} className="font-medium mb-2">
          Quantity
        </motion.p>
        <motion.div
          variants={rightAnimation}
          className="flex gap-4 items-center mb-5 justify-center md:justify-start"
        >
          <button
            onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
            className="text-xl p-2 border border-gray-300 rounded-full"
          >
            <FiMinus />
          </button>
          <p className="text-lg">{count}</p>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="text-xl p-2 border border-gray-300 rounded-full"
          >
            <FiPlus />
          </button>
        </motion.div>
        <motion.button
          variants={rightAnimation}
          className="w-full bg-black text-white py-3 rounded mb-8 hover:bg-[#7F8963] transition-all sm:w-[40%]"
        >
          Buy It Now
        </motion.button>
        <motion.p variants={rightAnimation} className="text-sm text-gray-500">
          Order Ship within 3-7 business days.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProductPurchase;
