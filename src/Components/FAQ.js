import React from "react";
import img from "../Images/faq.jpg";

const FAQ = () => {
  return (
    <section className="py-10 px-4 w-[90%] sm:w-[80%] mx-auto flex flex-col-reverse sm:flex-row gap-6">
      <div className="sm:w-[50%]">
        <h2 className="text-3xl font-bold text-left mb-6">
          Frequently Asked Questions
        </h2>
        <img src={img} alt="FAQ illustration" className="rounded-lg sm:hidden my-4"/>
        <div className="mx-auto">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Is the oil safe for color-treated hair?
            </h3>
            <p>
              Yes! Pamper Me Organic Hair Oil is safe for all hair types, including color-treated hair.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              How often should I use the oil?
            </h3>
            <p>
              For best results, use the oil 2-3 times a week, depending on your hair's condition.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Can I leave the oil in overnight?
            </h3>
            <p>
              Yes, you can leave the oil overnight for deep nourishment and rinse it off in the morning.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Will the oil make my hair greasy?
            </h3>
            <p>
              No, the non-greasy formula absorbs quickly, leaving your hair soft and manageable without weighing it down.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              How long does it take to see results?
            </h3>
            <p>
              Results can vary, but most users start noticing smoother, shinier hair within 2-3 weeks of regular use.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:w-[50%]">
        <img src={img} alt="FAQ illustration" className="rounded-lg hidden sm:block"/>
      </div>
    </section>
  );
};

export default FAQ;
