"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LanguageSelector from "./LanguageTranslator";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const t = useTranslations("Header");

  return (
    <header className="bg-white top-0 sticky z-50 shadow-lg border-b border-black">
      <nav
        className="mx-auto top-0 flex max-w-[85rem] items-center justify-between py-2 px-8"
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
              src="/logo.png"
              alt="Central Asia Logo"
              width={75}
              height={75}
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

        <div className="hidden lg:flex lg:gap-x-12 text-md">
          <ScrollLink
            to="central-asia"
            smooth={true}
            duration={500}
            className="leading-6 text-gray-900 cursor-pointer"
          >
            {t("centralAsia")}
          </ScrollLink>
          <ScrollLink
            to="tours"
            smooth={true}
            duration={500}
            className="leading-6 text-gray-900 cursor-pointer"
          >
            {t("tours")}
          </ScrollLink>

          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            className="leading-6 text-gray-900 cursor-pointer"
          >
            {t("AboutUs")}
          </ScrollLink>
          <ScrollLink
            to="contact-form"
            smooth={true}
            duration={500}
            className=" leading-6 text-gray-900 cursor-pointer"
          >
            {t("Contact")}
          </ScrollLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          {/* <LanguageSelector /> */}
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
                src="/logo.png"
                alt="Central Asia Logo"
                width={120}
                height={120}
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
                  onClick={toggleMenu}
                >
                  {t("centralAsia")}
                </ScrollLink>
                <ScrollLink
                  to="tours"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  onClick={toggleMenu}
                >
                  {t("tours")}
                </ScrollLink>

                <ScrollLink
                  to="about-us"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  onClick={toggleMenu}
                >
                  {t("AboutUs")}
                </ScrollLink>
                <ScrollLink
                  to="contact-form"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  onClick={toggleMenu}
                >
                  {t("Contact")}
                </ScrollLink>
              </div>
              <div className="py-6 flex flex-col w-full">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
