import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0 my-5">
                    <h3 className="text-lg font-bold mb-2">Central Asia Tours GmbH</h3>

                    <p className="mb-0">Am Gaßgang 3</p>
                    <p>61440 Oberursel, Germany</p>

                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" />
                        <p className="mb-0">info@centralasia.com</p>
                    </div>
                </div>
            </div>
            <div className="container my-4 text-center">
                <p>&copy; {new Date().getFullYear()} Central Asia Tours GmbH. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
