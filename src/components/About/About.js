import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    const service = [
        { id: 1, text: 'BOOKING WITH SPREAD PAYMENTS', image: '../../../assets/smartph.png' },
        { id: 2, text: 'SLEEP & TRAVEL IN COMFORT', image: '../../../assets/travel.png' },
        { id: 3, text: 'FULLY LICENSED TOUR OPERATOR', image: '../../../assets/sleep.png' },
    ]
    return (
        <section className="max-w-screen-xl mx-auto px-6">
            {/* heading  */}
            <Fade left>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-logo text-gray-800 text-3xl font-semibold">About Us</h1>
                    <div className="h-1 w-24 bg-red-400 rounded-full"></div>
                </div>
            </Fade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
                {/* left side image  */}
                <Fade left>
                    <div className="flex justify-center lg:justify-start">
                        <img src="../../../assets/about.png" alt="about" />
                    </div>
                </Fade>
                {/* right side description  */}
                <Fade right>
                    <div className="flex flex-col items-center lg:items-start space-y-3">
                        {/* description  */}
                        <p className="text-gray-500 text-sm font-primary">Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that</p>

                        {/* heading  */}
                        <h1 className="mt-4 font-primary text-gray-800 text-xl font-semibold">Why Choose Us</h1>

                        {/* services  */}
                        <div className="flex flex-col space-y-5 my-4">
                            {service.map(item => (
                                <div className="flex items-center space-x-3" key={item.id}>
                                    <img className="w-12" src={item.image} alt={item.text} />
                                    <span className="w-36 text-gray-500 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default About
