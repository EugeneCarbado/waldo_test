import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div 
            className={
                isOpen 
                    ? 'grid grid-rows-4 text-center items-center' 
                    : 'hidden'
            }
            onClick={toggle}
        >
            <Link className="p-4" to="/">Waldo</Link>
            <Link className="p-4" to="/menu">Get Started</Link>
            <Link className="p-4" to="/about">About</Link>
            <Link className="p-4" to="/contact">Contact</Link>
        </div>
    )
}

export default Dropdown;
