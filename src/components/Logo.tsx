import React from "react";
import Image from "next/image";

interface LogoProps {
	title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {
	return (
		<a href="/" className=" text-black">
			<Image src="/camel-icon.png" alt="Logo" width={80} height={80} />
		</a>
	);
};

export default Logo;
