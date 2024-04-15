import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import Navlink from "./Navlink";

interface NavbarProps {
	title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = "Central Asia" }) => {
	return (
		<header className="flex items-center justify-between h-24 max-w-[1240px] w-full mx-auto px-5 text-black">
			<Logo title={title} />
			<Navlink />
		</header>
	);
};

export default Navbar;
