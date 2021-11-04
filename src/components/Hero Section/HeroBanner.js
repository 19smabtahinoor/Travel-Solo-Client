import React from 'react';
import Flip from 'react-reveal/Flip';

const HeroBanner = () => {
    return (
        <section className="hero-section">
            <Flip left>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">Great Trip <br />for Solo Travellers</h1>
                    <p className="font-primary text-gray-400 text-center text-sm w-96 select-none">Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience.</p>
                    <button className="btn-primary w-36 mt-5">Explore Tours</button>
                </div>
            </Flip>
        </section>
    )
}

export default HeroBanner
