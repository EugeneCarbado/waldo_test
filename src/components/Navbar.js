import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Waldo-Logo.svg';

const Navbar = ({ toggle }) => {
    return (
        <nav className="bg-white relative font-mono" role="navigation">
            <div className="flex justify-between items-center h-16">
                <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                    <svg 
                        className="w-10 h-10 text-blue-waldo" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </div>
                <Link to='/' className="pl-8"><img src={logo} alt="Waldo logo" /></Link>
                <div className="pr-8 uppercase md:block hidden">
                    <Link className="p-4 text-yellow-600" to="/about">Get started</Link>
                    <Link className="p-4" to="/">About Us</Link>
                </div>
                <Link className="p-8 text-blue-waldo underline" to="/menu">US</Link>
            </div>
        </nav>
    )
}

export default Navbar;

