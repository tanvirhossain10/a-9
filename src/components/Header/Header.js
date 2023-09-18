import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center py-4 bg-orange-300   text-gray-600'>
                <NavLink to='/' className='mr-20 ml-20' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "",
                        fontWeight: isActive ? "bold" : "",
                    };
                }} >Home</NavLink>
                <NavLink to='/reviews' className='mr-20 ml-20' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "",
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>REVIEWS</NavLink>
                <NavLink to='/dashboard' className='mr-20 ml-20' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "",
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>DASHBOARD</NavLink>
                <NavLink to='/blog' className='mr-20 ml-20' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "",
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>BLOG</NavLink>
                <NavLink to='/about' className='mr-20 ml-20' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "",
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>ABOUT</NavLink>

            </nav>
        </div>
    );
};

export default Header;