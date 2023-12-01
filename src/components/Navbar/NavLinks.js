import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

/*const NavLinks = () => {
    const url1 = 'https://sites.google.com/view/ab-infotech-info/home';
    return (
        <>
            <a href="https://sites.google.com/view/ab-infotech-info/home" className="px-4 font-extrabold text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer>
                About
            </a>
            <a className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/services">
                Services
            </a>
            <a className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/portfolio">
                Portfolio
            </a>
        </>
    )
}

export default NavLinks;
*/

const NavLinks = () => {
    const url1 = 'https://sites.google.com/view/ab-infotech-info/home';
    const url2 = 'https://sites.google.com/view/ab-infotech-services/home';
    const url3 = 'https://sites.google.com/view/ab-infotech-about-us/home';

    const handleExternalLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <a href={url1} className="px-4 font-extrabold text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                About
            </a>
            <a href={url2} className="px-4 font-extrabold text-gray-500 hover:text-blue-900">
                Services
            </a>
            <a href={url3} className="px-4 font-extrabold text-gray-500 hover:text-blue-900">
                Contact Us
            </a>
        </>
    )
}

export default NavLinks;