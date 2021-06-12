import React from 'react';
import { Link } from 'react-router-dom';

const Scrolllinks = () => {
    return (
        <div className="flex flex-row ml-5 mt-5 mb-5 text-blue-waldo space-x-10 whitespace-nowrap overflow-x-scroll uppercase">
                <Link className="box-border">Hydra Boost Daily Lenses</Link>
                <Link className="box-border">Blue Light Glasses</Link>
                <Link className="box-border">Hydration Drops</Link>
        </div>
    )
}

export default Scrolllinks;
