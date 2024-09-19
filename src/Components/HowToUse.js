import React from 'react';

const HowToUse = () => {
  return (
    <section className="py-10 px-4 w-[90%] sm:w-[80%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">How to Use</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='bg-[#ffffff] shadow-md p-6 rounded-lg'>
          <h3 className="text-2xl font-bold mb-4">Step 1: Prepare Your Hair</h3>
          <p>
            Before applying, ensure your hair is dry or slightly damp. Pour a few drops of Pamper Me Organic Hair Oil into the palm of your hands and rub them together to evenly distribute the oil.
          </p>
        </div>
        <div className='bg-[#ffffff] shadow-md p-6 rounded-lg'>
          <h3 className="text-2xl font-bold mb-4">Step 2: Scalp & Root Massage</h3>
          <p>
            Gently massage the oil into your scalp using circular motions. This helps stimulate blood circulation and promotes healthier hair growth. Make sure the oil reaches the roots of your hair for deep nourishment.
          </p>
        </div>
        <div className='bg-[#ffffff] shadow-md p-6 rounded-lg'>
          <h3 className="text-2xl font-bold mb-4">Step 3: Length & Tips Care</h3>
          <p>
            Run your fingers through the lengths of your hair to coat it with oil, paying extra attention to the tips. Leave the oil in for at least 30 minutes or overnight for a more intensive treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
