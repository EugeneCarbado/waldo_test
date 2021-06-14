import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Waldo-Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggle }) => {
    return (
        <nav className="relative font-mono container mx-auto" role="navigation">
            <div className="flex justify-between items-center h-16">
                <div className="flex flex-row ml-5 mt-5 mb-5 space-x-5 lg:block hidden text-blue-waldo whitespace-nowrap overflow-x-scroll text-sm uppercase tracking-tighter">
                    <Link className="box-border hover:text-orange-waldo">Hydra Boost Daily Lenses</Link>
                    <Link className="box-border hover:text-orange-waldo">Blue Light Glasses</Link>
                    <Link className="box-border hover:text-orange-waldo">Hydration Drops</Link>
                </div>
                <div className="px-4 cursor-pointer lg:hidden z-50" onClick={toggle}>
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
                <Link to='/'><img src={logo} alt="Waldo logo" /></Link>
                <div className="uppercase text-blue-waldo lg:block hidden">
                        <Link className="p-2 text-orange-waldo hover:text-blue-waldo" to="/get-started">Get started</Link>
                        <Link className="p-2 hover:text-orange-waldo" to="/about-us">About Us
                            <FontAwesomeIcon className="text-xs mb-px ml-1" icon={faChevronDown} />
                        </Link>
                        <Link className="p-2 hover:text-orange-waldo" to="/">Login</Link>
                        <Link className="pr-4 pl-2 text-blue-waldo underline hover:text-orange-waldo" to="/us-gb-eu-se">US
                            <FontAwesomeIcon className="text-xs mb-px ml-1" icon={faChevronDown} />
                        </Link>
                </div>
                <Link className="p-4 text-blue-waldo underline lg:hidden" to="/menu">US</Link>
            </div>
            <div className="flex flex-row ml-5 mt-5 mb-5 text-blue-waldo space-x-5 whitespace-nowrap overflow-x-scroll uppercase lg:hidden">
                <Link className="box-border">Hydra Boost Daily Lenses</Link>
                <Link className="box-border">Blue Light Glasses</Link>
                <Link className="box-border">Hydration Drops</Link>
            </div>
        </nav>
    )
}

export default Navbar;

