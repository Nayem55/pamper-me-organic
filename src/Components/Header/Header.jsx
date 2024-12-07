import React from 'react';
import logo from '../../Images/logo (2).png'

const Header = () => {

    return (
        <div className=''>
            <img className='w-[120px] sm:w-[200px] mx-auto p-4' src={logo} alt="logo"/>
        </div>
    );
};

export default Header;