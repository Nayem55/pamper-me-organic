import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-10 px-4 w-[90%] sm:w-[80%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="max-w-xl mx-auto">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full px-3 py-2 border rounded-md" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="w-full bg-black text-white font-semibold py-2 rounded-md">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
