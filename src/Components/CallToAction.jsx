import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Ready to Transform Your Hair?</h2>
        <Link to="/checkout" className="bg-black text-white font-semibold py-3 px-6 rounded-md">Buy Now</Link>
      </div>
    </section>
  );
};

export default CallToAction;
