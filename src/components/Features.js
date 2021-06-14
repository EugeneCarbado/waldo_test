import React from 'react';


const Features = () => {
    return (
        <div className="lg:bg-grey-waldo lg:p-16">
            <div className="pt-8 text-blue-waldo">
                <h1 className="text-3xl lg:text-4xl">Hydra Boost Daily Lenses</h1>
                <p className="pt-2 text-sm font-light lg:w-96 lg:text-base lg:pt-6">Designed for optimum comfort and moisture. Each lens is made from ultra-breathable Etafilcon A with a high water content of 58%.</p>
                <h4 className="pt-2 font-medium lg:pt-4">For a limited time only, get a free pair of sunglasses with your contact lens order.</h4>
            </div>
            <div className="flex justify-between pt-10 text-blue-waldo text-sm lg:w-80">
                <div>
                    <h6 className="font-medium lg:pb-2">10 day free trail</h6>
                    <p className="font-light">Just pay shipping</p>
                </div>
                <div className="h-10 w-px bg-blue-waldo lg:h-12"></div>
                <div>
                    <h6 className="font-medium lg:pb-2">$18 per box of 30 lenses</h6>
                    <p className="font-light">Free delivery</p>
                </div>
            </div>
            <button className="bg-orange-waldo hover:bg-blue-waldo uppercase text-sm text-white font-extralight mt-5 w-full h-16 lg:w-44 lg:h-14">
                Get Started
            </button>
        </div>
    )
}

export default Features;
