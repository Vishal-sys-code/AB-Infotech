import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    const url1 = 'https://sites.google.com/view/ab-infotech-info/home';
    const url2 = 'https://sites.google.com/view/ab-infotech-services/home';
    const url3 = 'https://sites.google.com/view/ab-infotech-about-us/home';

    const handleExternalLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <a href={url1} className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/about">
                About
            </a>
            <a href={url2} className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/services">
                Services
            </a>
            <a href={url3} className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/portfolio">
                Contact Us
            </a>
        </>
    )
}

export default NavLinks;
