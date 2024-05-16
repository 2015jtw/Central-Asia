import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <>
            {/* DESKTOP VERSION */}
            <section className="hidden md:block relative mt-20" id="about-us">
                <div className="relative h-[900px] md:h-[750px] w-full">
                    <Image
                        src="/uzbek-map-1.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top right"
                        alt="Background image"
                        className="z-0"
                    />
                    {/* Text Container */}
                    <div className="absolute lg:max-w-4xl md:left-12 top-1/2 transform -translate-y-1/2 z-10 py-4 md:py-8 px-4 md:px-8 lg:px-10 text-black bg-white max-w-2xl shadow-lg rounded-lg">
                        <h2 className="text-4xl font-bold mb-4">
                            Central Asia Tours GmbH
                        </h2>
                        <p className="text-lg">
                            The company was founded in 1999 and has been operating
                            in the tourism sector for 22 years. We offer a wide
                            range of services, including tours, hotel bookings, and
                            transportation. Our team of experienced professionals is
                            dedicated to providing you with the best possible
                            experience during your stay in Central Asia.
                        </p>
                        <p className="text-lg mt-4">
                            Our founder, John Doe, has over 30 years of experience
                            in the tourism industry. He has traveled extensively
                            throughout Central Asia and has a deep understanding of
                            the region&apos;s culture and history. John is
                            passionate about sharing his knowledge with others and
                            is committed to providing you with an unforgettable
                            travel experience.
                        </p>
                    </div>
                </div>
            </section>
            {/* MOBILE VERSION */}
            <section className="flex flex-col md:hidden my-20" id="about-us">
                <Image
                    src="/uzbek-map-1.png"
                    alt="Background image"
                    layout="responsive"
                    height={330}
                    width={768}
                />
                {/* Text Container */}
                <div className="py-4 px-4 text-blackmt-4">
                    <h2 className="text-4xl font-bold mb-4 text-center">
                        Central Asia Tours GmbH
                    </h2>
                    <p className="text-lg">
                        The company was founded in 1999 and has been operating
                        in the tourism sector for 22 years. We offer a wide
                        range of services, including tours, hotel bookings, and
                        transportation. Our team of experienced professionals is
                        dedicated to providing you with the best possible
                        experience during your stay in Central Asia.
                    </p>
                    {/* add text about the founder */}
                    <p className="text-lg mt-4">
                        Our founder, John Doe, has over 30 years of experience
                        in the tourism industry. He has traveled extensively
                        throughout Central Asia and has a deep understanding of
                        the region&apos;s culture and history. John is
                        passionate about sharing his knowledge with others and
                        is committed to providing you with an unforgettable
                        travel experience.
                    </p>
                </div>
            </section>
        </>


    );
};

export default AboutUs;
