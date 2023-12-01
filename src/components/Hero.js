import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';

const Hero = () => {
    const customURL = '';
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                            {/* We build digital solutions to help businesses scale */}
                                Bespoke IT solutions for your unique business needs
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">We are a team of highly motivated and skilled developers dedicated to delivering only the best software and network solutions.</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
