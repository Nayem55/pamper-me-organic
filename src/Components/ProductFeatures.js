import React from 'react';
import banner from "../Images/why-pamper-me-banner-v2.jpg";

const ProductFeatures = () => {
  return (
    <section
      className="relative py-24 md:text-center px-8 mx-auto md:px-[120px]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">Why Choose Pamper Me Hair Oil?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="py-4 md:py-16 md:max-w-[400px] mx-auto">
            <h3 className="text-xl font-semibold mb-2">100% Organic Ingredients</h3>
            <p>
              Carefully crafted from the finest natural oils, Pamper Me Hair Oil delivers deep nourishment without harsh chemicals. Infused with essential vitamins and antioxidants, it helps restore your hair's natural shine and health.
            </p>
          </div>
          <div className="py-4 md:py-16 md:max-w-[400px] mx-auto">
            <h3 className="text-xl font-semibold mb-2">Lightweight & Non-Greasy</h3>
            <p>
              Our lightweight formula ensures that your hair stays hydrated without feeling heavy or greasy. It absorbs quickly, giving your hair a soft, silky texture without leaving any residue.
            </p>
          </div>
          <div className="py-4 md:py-16 md:max-w-[400px] mx-auto">
            <h3 className="text-xl font-semibold mb-2">Suitable for All Hair Types</h3>
            <p>
              Whether you have straight, wavy, curly, or coily hair, Pamper Me Hair Oil is designed to work on all hair types. Its versatile formula enhances your natural hair texture while keeping it smooth, shiny, and manageable.
            </p>
          </div>
          <div className="py-4 md:py-16 md:max-w-[400px] mx-auto">
            <h3 className="text-xl font-semibold mb-2">Promotes Hair Growth</h3>
            <p>
              Rich in nutrients that stimulate hair follicles, our hair oil helps promote faster, healthier hair growth. Regular use strengthens hair from the roots, reducing breakage and hair loss.
            </p>
          </div>
          <div className="py-4 md:py-16 md:max-w-[400px] mx-auto">
            <h3 className="text-xl font-semibold mb-2">Protects Against Damage</h3>
            <p>
              Pamper Me Hair Oil forms a protective barrier around each strand, shielding your hair from environmental damage, heat, and styling tools. This helps prevent split ends and keeps your hair looking vibrant and healthy.
            </p>
          </div>
          <div className="py-4 md:py-16 md:max-w-[400px] mx-auto">
            <h3 className="text-xl font-semibold mb-2">Enhances Shine & Smoothness</h3>
            <p>
              Say goodbye to frizz and dullness! Our hair oil enhances your hair's natural shine, leaving it soft, smooth, and beautifully radiant after every application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
