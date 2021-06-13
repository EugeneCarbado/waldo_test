import React from 'react';

const Features = () => {
    return (
        <div>
            <div className="pt-8 text-blue-waldo">
                <h1 className="text-3xl">Hydra Boost Daily Lenses</h1>
                <p className="pt-2 text-sm font-light">Designed for optimum comfort and moisture. Each lens is made from ultra-breathable Etafilcon A with a high water content of 58%.</p>
                <h4 className="pt-2 font-medium">For a limited time only, get a free pair of sunglasses with your contact lens order.</h4>
            </div>
            <div className="flex justify-between pt-10 text-blue-waldo text-sm">
                <div>
                    <h6 className="font-medium">10 day free trail</h6>
                    <p className="font-light">Just pay shipping</p>
                </div>
                <div className="h-10 w-px bg-blue-waldo"></div>
                <div>
                    <h6 className="font-medium">$18 per box of 30 lenses</h6>
                    <p className="font-light">Free delivery</p>
                </div>
            </div>
            <button className="bg-orange-waldo hover:bg-blue-700 uppercase text-sm text-white font-bold mt-4 py-4 px-32">
                Get Started
            </button>
        </div>
    )
}

export default Features;
