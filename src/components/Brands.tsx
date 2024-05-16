import Image from 'next/image';
import React from 'react';

const Brands = () => {
    return (
        <section className=" bg-slate-500">
            <div className="container p-4 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">Our Partners</h2>
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="flex justify-center p-4">
                        <Image
                            src="/brand-image.png"
                            alt="Company Logo 1"
                            width={100}
                            height={50}
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex justify-center p-4">
                        <Image
                            src="/brand-image.png"
                            alt="Company Logo 2"
                            width={100}
                            height={50}
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex justify-center p-4">
                        <Image
                            src="/brand-image.png"
                            alt="Company Logo 3"
                            width={100}
                            height={50}
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
