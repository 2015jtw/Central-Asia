import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TourCardProps {
    title: string;
    image: string;
    description: string;
    time: string;
    price: number;
}

const TourCard: React.FC<TourCardProps> = ({ title, image, description, time, price }) => {
    return (
        <div className=" bg-white text-black p-4 w-80 mx-4 rounded-md shadow-lg">
            <h2 className='text-xl pb-2 text-center'>{title}</h2>
            <Image src={image} alt={title} width={320} height={150} />
            <p className='py-2'>{description}</p>
            <hr className='pb-2'/>
            <p className='flex items-center justify-start'>
                <Image className='pr-2' width={20} height={20} src="/clock.png" alt='clock icon'/>
                {time}
            </p>
            <p className='flex items-center justify-start'>
                <Image className='pr-2' width={20} height={20} src="/price-tag.png" alt='price icon'/>
                ${price}
            </p>
            <div className='mt-3'>
                <Link href="#">
                    <span className='inline-block bg-blue-400 hover:bg-blue-600 text-white rounded-md p-2 w-full text-center'>
                        See Details
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default TourCard;
