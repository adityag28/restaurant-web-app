import React from 'react'
import { MdTableRestaurant } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RestaurantSetup = () => {
    return (
        <div className='bg-amber-50 h-screen p-5'>
            <h1 className='text-2xl font-bold mb-5'>Restaurant Setup</h1>
            <div className='flex flex-wrap  justify-center lg:justify-start gap-5 '>
                <Link to="/restaurant/businessform">
                    <div className='flex flex-col justify-center items-center border-2 border-orange-400 bg-white w-50  sm:w-48 md:w-60 lg:w-60 p-6 gap-5 rounded-md hover:cursor-pointer'>
                        <FaImage className='text-4xl text-orange-400' />
                        <p className='lg:text-lg font-semibold text-orange-400 sm:text-base'>Business Info</p>
                    </div>
                </Link>
                <Link to="/restaurant/managetable">
                    <div className='flex flex-col justify-center items-center border-2 border-orange-400 bg-white w-50  sm:w-48 md:w-60 lg:w-60 p-6 gap-5 rounded-md hover:cursor-pointer'>
                        <MdTableRestaurant className='text-4xl text-orange-400' />
                        <p className='lg:text-lg font-semibold text-orange-400 sm:text-base'>Manage Table</p>
                    </div>
                </Link>
                <Link to="/restaurant/managemenu">
                    <div className='flex flex-col justify-center items-center border-2 border-orange-400 bg-white w-50  sm:w-48 md:w-60 lg:w-60 p-6 gap-5 rounded-md hover:cursor-pointer'>
                        <MdMenuBook className='text-4xl text-orange-400' />
                        <p className='lg:text-lg font-semibold text-orange-400 sm:text-base'>Manage Menu</p>
                    </div>
                </Link>
                <Link to="/restaurant/managestaff">
                    <div className='flex flex-col justify-center items-center border-2 border-orange-400 bg-white w-50 sm:w-48 md:w-60 lg:w-60 p-6 gap-5 rounded-md hover:cursor-pointer'>
                        <FaUsers className='text-4xl text-orange-400' />
                        <p className='lg:text-lg font-semibold text-orange-400 sm:text-base'>Manage Staff</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default RestaurantSetup
