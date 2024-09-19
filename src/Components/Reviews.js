import React from 'react';

const Reviews = () => {
  return (
    <section className="py-10 px-4 w-[90%] sm:w-[80%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-[32%]">
          <p>"This hair oil changed my life! My hair is shinier than ever! I’ve been using it for over a month, and the results are incredible. It feels like my hair has been restored, and the softness is unmatched."</p>
          <span className="block mt-4 font-semibold">– Sarah J.</span>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-[32%]">
          <p>"I love how lightweight it is! No greasy feeling, just softness. It works great on my thick, curly hair without weighing it down. I use it every day, and my hair feels healthier than ever."</p>
          <span className="block mt-4 font-semibold">– Emily D.</span>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-[32%]">
          <p>"My hair has never been so healthy! Highly recommend this oil. I’ve struggled with dry, brittle hair for years, and this product has made a world of difference. I use it as a leave-in treatment, and it keeps my hair looking smooth and shiny all day."</p>
          <span className="block mt-4 font-semibold">– Maria K.</span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
