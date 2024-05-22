import Image from 'next/image';
import React from 'react';
import Wrapper from './Wrapper';

const Brands = () => {
    return (
        <section className="bg-gradient-to-l from-palePeach via-lightPeach via-peach to-duskyOrange">
            <Wrapper className="p-2">
                <div className="container mx-auto">
                    <h5 className="text-3xl font-bold text-center mb-2 text-white">
                        Our Partners
                    </h5>
                    <div className="flex flex-col md:flex-row justify-around items-center">
                        <div className="flex justify-center p-2">
                            <Image
                                src="/brand-image.png"
                                alt="Company Logo 1"
                                width={75}
                                height={75}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex justify-center p-2">
                            <Image
                                src="/brand-image.png"
                                alt="Company Logo 2"
                                width={75}
                                height={75}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex justify-center p-2">
                            <Image
                                src="/brand-image.png"
                                alt="Company Logo 3"
                                width={75}
                                height={75}
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Brands;
