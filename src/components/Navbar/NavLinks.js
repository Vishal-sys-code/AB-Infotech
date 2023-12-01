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
            <Link href={url1} className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/about">
                About
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/services">
                Services
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/portfolio">
                Portfolio
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/enquiry">
                Enquiry
            </Link>
            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link>
        </>
    )
}

export default NavLinks;
