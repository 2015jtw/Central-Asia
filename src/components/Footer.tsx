import React from "react";
import Link from "next/link";
import { Mail, MapPin, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Content */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Central Asia Tours GmbH
          </h3>

          <div className="space-y-4 text-gray-300">
            {/* Registration Number */}
            <div className="flex items-start gap-3">
              <Building2 size={20} className="flex-shrink-0 mt-1 text-amber-500" />
              <div>
                <p className="text-base md:text-lg">
                  Handelsregisternummer: <span className="font-medium text-white">HRB 15871</span>
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={20} className="flex-shrink-0 mt-1 text-amber-500" />
              <div>
                <p className="text-base md:text-lg">Am Gaßgang 3</p>
                <p className="text-base md:text-lg">61440 Oberursel, Germany</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail size={20} className="flex-shrink-0 mt-1 text-amber-500" />
              <Link 
                href="mailto:info@centralasia.de" 
                className="text-base md:text-lg hover:text-amber-500 transition-colors duration-200"
              >
                info@centralasia.de
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm md:text-base text-gray-400">
            &copy; {new Date().getFullYear()} Central Asia Tours GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
