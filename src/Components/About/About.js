import React from 'react';
import img from '../../Images/product-image.jfif'

const About = () => {
    return (
        <div className='w-[90%] sm:w-[80%] mx-auto flex flex-col sm:flex-row py-10 items-center'>
            <div className='w-[50%]'>
                <p className='text-3xl font-bold'>About Pamper Me Hair Oil</p>
                <p className='mt-4 w-[80%] text-xl'>Pamper Me Organic Hair Oil is a luxurious blend of nature’s finest ingredients, designed to nourish and revitalize your hair from root to tip. Infused with organic oils and botanical extracts, this lightweight formula helps strengthen hair, reduce breakage, and promote healthy growth. Whether you're looking to soothe a dry scalp, add shine, or manage frizz, Pamper Me provides deep hydration without leaving a greasy residue. Ideal for all hair types, this oil is free from harsh chemicals, ensuring a pure and gentle treatment for your hair.</p>
            </div>
            <div className='w-[50%]'>
                <img src={img} alt='' />
            </div>
        </div>
    );
};

export default About;