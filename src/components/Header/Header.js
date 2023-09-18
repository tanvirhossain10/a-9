import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center mt-6'>
                <NavLink to='/' className='mr-20 ml-20'>Home</NavLink>
                <NavLink to='/reviews' className='mr-20 ml-20'>REVIEWS</NavLink>
                <NavLink to='/dashboard' className='mr-20 ml-20'>DASHBOARD</NavLink>
                <NavLink to='/blog' className='mr-20 ml-20'>BLOG</NavLink>
                <NavLink to='/about' className='mr-20 ml-20'>ABOUT</NavLink>

            </nav>
        </div>
    );
};

export default Header;