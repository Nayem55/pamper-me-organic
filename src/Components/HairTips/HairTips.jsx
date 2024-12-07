import img from "../../assets/icons/hairTips/long-wavy-hair-variant.png";
import { motion } from "framer-motion";

const HairTips = () => {
  return (
    <div id="hairTips" className="my-24 w-[90%] sm:w-[80%] mx-auto">
      <h3 className="text-2xl sm:text-4xl font-semibold mb-8 sm:text-center text-[#333]">
        Essential Hair Care Tips for Healthy Hair
      </h3>
      <p className="sm:text-center w-full sm:w-[70%] mx-auto mb-16 text-lg text-gray-700">
        Whether you're dealing with dry hair or seeking stronger, shinier strands, these three simple hair care tips will help you maintain healthy, beautiful hair all year long.
      </p>

      {/* Grid Layout for Hair Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-5 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCnFaohWAABD6rd9i7sNm13ZudJTqZgGbYg&s"
            alt="Hair Tip"
            width={140}
            className="rounded-full mb-4"
          />
          <p className="text-2xl font-semibold text-[#98A375]">Hydrate Your Hair</p>
          <p className="text-sm text-gray-600">
            Just like your skin, your hair needs moisture to stay healthy. Use a deep conditioner or hydrating hair mask once a week to replenish moisture and prevent dryness. Try natural oils like argan or jojoba for added hydration and shine.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-5 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img
            src="https://www.redzhairstylists.co.uk/wp-content/uploads/2023/07/hair-straightening-900x600-1.jpg"
            alt="Hair Tip"
            width={140}
            className="rounded-full mb-4"
          />
          <p className="text-2xl font-semibold text-[#98A375]">Protect Your Hair from Heat</p>
          <p className="text-sm text-gray-600">
            Excessive heat styling can damage hair over time. Always apply a heat protectant before using flat irons, curling irons, or blow dryers. It's best to limit heat styling to a few times a week and let your hair air dry when possible to preserve its health.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-5 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img
            src="https://mississaugahairsalon.ca/wp-content/uploads/2022/07/why-is-it-imporant-to-trim-your-hair.jpg"
            alt="Hair Tip"
            width={140}
            className="rounded-full mb-4"
          />
          <p className="text-2xl font-semibold text-[#98A375]">Trim Regularly</p>
          <p className="text-sm text-gray-600">
            Regular trims are essential to keep your hair looking fresh and healthy. Trim your hair every 6-8 weeks to remove split ends and prevent further damage. This will also help promote hair growth and prevent breakage.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HairTips;
