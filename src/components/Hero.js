import React from 'react';
import Features from './Features';
import Slider from './Slider';


const Hero = () => {
    return (
        <div className="container mx-auto p-4 lg:flex flex-row-reverse">
            <Slider />
            <Features />
        </div>
    )
}

export default Hero;
