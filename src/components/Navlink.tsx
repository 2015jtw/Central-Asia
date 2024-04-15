"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navlink = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<ul className="flex">
				<Link className="px-4" href="destinations">
					Destinations
				</Link>
				<Link className="px-4" href="tours">
					Tours
				</Link>
				<Link className="px-4" href="about-us">
					About Us
				</Link>
				<Link className="px-4" href="contact-us">
					Contact Us
				</Link>
			</ul>

			{/* <div className="md:hidden">
				<button onClick={toggleNavbar}>
					{isOpen ? <X /> : <Menu />}
				</button>
			</div> */}
		</>
	);
};

export default Navlink;
