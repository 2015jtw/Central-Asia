import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
    title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = 'Central Asia' }) => {
    return (
     <nav className="bg-gray-800">
        <div className="max-w-8xl mx-auto px-12">
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <a href="/" className="flex items-center justify-between py-5 px-2 text-white">
                        <Image className='pr-3' src="/camel-icon.png" alt="Logo" width={40} height={40} />
                        <span className="font-semibold text-xl">{title}</span>
                    </a>
                </div>
                <div className='flex align-middle w-full max-w-96 justify-around items-center text-white'>
                    <Link href="destinations">Destinations</Link>
                    <Link href="tours">Tours</Link>
                    <Link href="about-us">About Us</Link>
                    <Link href="uzbekistan">Uzbekistan</Link>
                </div>
                <div className="flex items-center space-x-4  text-white">
                    <Link className='bg-yellow-600 hover:bg-blue- hover:bg-blue-500 py-2 px-4 rounded-md' href="contact-us">Contact Us</Link>
                </div>
            </div>
        </div>
    </nav>
    )
};

export default Navbar;