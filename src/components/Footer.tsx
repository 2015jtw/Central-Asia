import React from "react";
import Link from "next/link";
import { Mail, MapPin, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0 my-5 gap-y-2 flex flex-col">
          <h3 className="text-lg font-bold">Central Asia Tours GmbH</h3>

          <div className="flex items-center">
            <Building2 size={16} className="inline-block mr-2" />
            <p>Handelsregisternummer: HRB 15871</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <MapPin size={16} className="inline-block mr-2" />
              <p className="mb-0">Am Gaßgang 3</p>
            </div>
            <p className="ml-6">61440 Oberursel, Germany</p>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="inline-block mr-2" />
            <Link href="mailto:info@centralasia.de" className="mb-0">
              info@centralasia.de
            </Link>
          </div>
        </div>
      </div>
      <div className="container my-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Central Asia Tours GmbH. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
