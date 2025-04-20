import React from 'react'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa6";



const RestaurantNavbar = () => {
    return (




        <nav className="border-gray-200 bg-orange-400 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className='flex items-center p-4'>
                    <MdOutlineRestaurantMenu className='text-2xl text-white cursor-pointer' />
                    <p className='ml-1 text-lg font-semibold text-white'>WalkInQR</p>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <div className="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <NavLink to='/restaurant/orderboard' className='cursor-pointer'>
                            <div className="flex items-center  py-2 px-2 md:p-0 text-white rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                                <MdSpaceDashboard className='text-2xl text-white' />
                                <p className='ml-3 text-white font-semibold'>Order Board</p>
                            </div>
                        </NavLink>

                        <NavLink to='/restaurant/setup' className='cursor-pointer'>
                            <div className="flex items-center  py-2 px-2 md:p-0 text-white rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                                <FaUserPlus className='text-2xl text-white' />
                                <p className='ml-3 text-white font-semibold'>Restaurant Setup</p>
                            </div>
                        </NavLink>

                        <NavLink to='/restaurant/orderboarddetail'>
                            <div className="flex items-center  py-2 px-2 md:p-0 text-white rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                                <GoHistory className='text-2xl text-white' />
                                <p className='ml-3 text-white font-semibold'>Order History</p>
                            </div>
                        </NavLink>


                        <NavLink to="/restaurant-login">
                            <div className="flex items-center  py-2 px-2 md:p-0 text-white rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                                <PiSignOutBold className='text-2xl text-white' />
                                <p className='ml-3 text-white font-semibold'>Sign Out</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default RestaurantNavbar
