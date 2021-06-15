import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Waldo-Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div 
            className={
                isOpen 
                    ? 'fixed h-full w-full -mt-14 z-30 pb-8 pt-4 bg-white-waldo text-blue-waldo text-2xl grid grid-rows-4 text-center items-center uppercase shadow-sm' 
                    : 'hidden'
            }
            onClick={toggle}
        >
            <div>
                <Link to='/'><img src={logo} alt="Waldo logo" className="mx-auto" /></Link>
            </div>
            <Link className=" text-orange-waldo" to="/get-started">Get Started</Link>
            <div className="flex flex-col">
                <Link className="m-5" to="/menu">Hydra Boost Daily Lenses</Link>
                <Link className="m-5" to="/menu">Blue Light Glasses</Link>
                <Link className="m-5" to="/menu">Hydration Drops</Link>
            </div>
            <Link className="" to="/about">About Us <FontAwesomeIcon className="text-base mb-1 ml-1 text-orange-waldo" icon={faChevronRight} /></Link>
            <Link className="" to="/contact">Login</Link>
        </div>
    )
}

export default Dropdown;
