"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-white shadow-sm top-0">
			<nav
				className="mx-auto top-0 flex max-w-[80rem] items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<ScrollLink
						to="homepage-carousel"
						smooth={true}
						duration={500}
						className="-m-1.5 p-1.5 cursor-pointer"
					>
						<span className="sr-only">Your Company</span>
						<Image
							className="h-8 w-auto"
							src="/camel-icon.png"
							alt="Central Asia Logo"
							width={80}
							height={80}
						/>
					</ScrollLink>
				</div>
				<div className="flex lg:hidden">
					{!isOpen && (
						<button
							type="button"
							className="-m-2.5 cursor-pointer z-20 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={toggleMenu}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					)}
				</div>

				<div className="hidden lg:flex lg:gap-x-12">
					<ScrollLink
						to="central-asia"
						smooth={true}
						duration={500}
						className="text-sm leading-6 text-gray-900 cursor-pointer"
					>
						Central Asia
					</ScrollLink>
					<ScrollLink
						to="tours"
						smooth={true}
						duration={500}
						className="text-sm leading-6 text-gray-900 cursor-pointer"
					>
						Tours
					</ScrollLink>

					<ScrollLink
						to="about-us"
						smooth={true}
						duration={500}
						className="text-sm leading-6 text-gray-900 cursor-pointer"
					>
						About Us
					</ScrollLink>
					
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<ScrollLink
						to="contact-form"
						smooth={true}
						duration={500}
						className="text-sm  leading-6 text-gray-900 cursor-pointer"
					>
						Contact Us
					</ScrollLink>
				</div>
			</nav>

			{/* MOBILE MENU, show/hide based on menu open state. */}
			<div
				className={`lg:hidden ${isOpen ? "" : "hidden"}`}
				role="dialog"
				aria-modal="true"
			>
				<div className="fixed inset-0"></div>
				<div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<ScrollLink
							to="homepage-carousel"
							smooth={true}
							duration={500}
							className="-m-1.5 p-1.5 cursor-pointer"
						>
							<span className="sr-only">Your Company</span>
							<Image
								className="h-8 w-auto"
								src="/camel-icon.png"
								width={80}
								height={80}
								alt="Central Asia Logo"
							/>
						</ScrollLink>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={toggleMenu}
						>
							<span className="sr-only">Close mobile menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<ScrollLink
									to="central-asia"
									smooth={true}
									duration={500}
									className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
								>
									Central Asia
								</ScrollLink>
								<ScrollLink
									to="tours"
									smooth={true}
									duration={500}
									className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
								>
									Tours
								</ScrollLink>

								<ScrollLink
									to="about-us"
									smooth={true}
									duration={500}
									className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
								>
									About Us
								</ScrollLink>
								
							</div>
							<div className="py-6">
								<ScrollLink
									to="contact-form"
									smooth={true}
									duration={500}
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
								>
									Contact Us
								</ScrollLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
