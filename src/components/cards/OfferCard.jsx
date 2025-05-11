import React from 'react';
import { IoIosTrendingUp } from "react-icons/io";

const OfferCard = () => {
    return (
        <div className="px-2 md:px-6 lg:px-1">
            <div className='flex items-center gap-2 my-4'>
                <IoIosTrendingUp className='w-5 h-5 text-orange-400' />
                <p className='text-lg font-medium'>Bestseller</p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
                <div className='bg-blue-300 rounded-md text-white w-full sm:w-1/2 md:w-80 p-4 shadow-md'>
                    <p className='font-bold text-center text-lg'>Offer 1</p>
                </div>

                <div className='bg-red-400 rounded-md text-white w-full sm:w-1/2 md:w-80 p-4 shadow-md'>
                    <p className='font-bold text-center text-lg'>Offer 2</p>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;
