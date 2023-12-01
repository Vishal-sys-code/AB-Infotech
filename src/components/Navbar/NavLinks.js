import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const url1 = 'https://sites.google.com/view/ab-infotech-info/home';
    return (
        <>
            <Link href={url1} className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="https://sites.google.com/view/ab-infotech-info/home?pli=1">
                About
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="https://sites.google.com/view/ab-infotech-services/home">
                Services
            </Link>
            <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="https://sites.google.com/view/ab-infotech-about-us/home">
                Contact Us
            </Link>
            // <Link className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/enquiry">
            //     Enquiry
            // </Link>
            // <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
            //     Demo our products
            // </Link>
        </>
    )
}

export default NavLinks;
