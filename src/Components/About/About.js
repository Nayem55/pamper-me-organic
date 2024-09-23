import React from 'react';
import { Link } from 'react-router-dom';
import '@google/model-viewer';
import bottle from '../../Images/bottle.glb';

const About = () => {
    return (
        <div className='w-[90%] sm:w-[80%] mx-auto flex flex-col-reverse gap-6 sm:flex-row py-10 items-center'>
            <div className='sm:w-[50%]'>
                <p className='text-3xl font-bold'>About Pamper Me Hair Oil</p>
                <p className='mt-4 sm:w-[80%] mb-10'>
                    Pamper Me Organic Hair Oil is a luxurious blend of nature’s finest ingredients, designed to nourish and revitalize your hair from root to tip. Infused with organic oils and botanical extracts, this lightweight formula helps strengthen hair, reduce breakage, and promote healthy growth. Whether you're looking to soothe a dry scalp, add shine, or manage frizz, Pamper Me provides deep hydration without leaving a greasy residue. Ideal for all hair types, this oil is free from harsh chemicals, ensuring a pure and gentle treatment for your hair.
                </p>
                <Link to="/checkout" className='px-6 py-2 bg-black text-white font-bold rounded'> BUY NOW</Link>
            </div>
            <div className='w-[100%] sm:w-[50%] mx-auto'>
                <model-viewer 
                    src={bottle} 
                    alt="Pamper Me Hair Oil Bottle" 
                    // auto-rotate 
                    camera-controls 
                    style={{ width: '100%', height: '600px' }} 
                    background-color="#FFF"
                />
            </div>
        </div>
    );
};

export default About;
