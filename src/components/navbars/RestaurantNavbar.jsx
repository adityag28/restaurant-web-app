import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { MdSpaceDashboard, MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHistory } from "react-icons/go";
import { PiSignOutBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { FaUserPlus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { initFlowbite } from "flowbite";

const RestaurantNavbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const userRole = useSelector((store) => store.user.role); // ✅ from Redux

    useEffect(() => {
        initFlowbite();
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(prev => !prev);
    };

    const isAdmin = userRole === "admin";

    return (
        <div className='bg-orange-400 text-white flex justify-between items-center'>
            {isAdmin && (
                <div className="text-center">
                    <button
                        className="text-white bg-orange-400 font-medium text-sm px-5 py-2.5"
                        type="button"
                        aria-controls="drawer-navigation"
                        aria-expanded={isDrawerOpen}
                        onClick={handleDrawerToggle}
                    >
                        <GiHamburgerMenu className='text-2xl text-white cursor-pointer' />
                    </button>
                </div>
            )}

            <div className='flex items-center p-4'>
                <MdOutlineRestaurantMenu className='text-2xl text-white cursor-pointer' />
                <p className='ml-1 text-lg font-semibold text-white'>WalkInQR</p>
            </div>

            {isAdmin && (
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-orange-400 text-white ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    tabIndex={-1}
                    aria-labelledby="drawer-navigation-label"
                >
                    <h5 id="drawer-navigation-label" className="text-base font-semibold">WalkInQR</h5>
                    <button
                        type="button"
                        aria-controls="drawer-navigation"
                        className="text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                        onClick={handleDrawerToggle}
                    >
                        <RxCross2 className='text-2xl text-white cursor-pointer' />
                    </button>

                    <div className="py-4 overflow-y-auto text-white">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <NavLink to='/restaurant/orderboard'>
                                    <div className='flex items-center p-2'>
                                        <MdSpaceDashboard className='w-5 h-5' />
                                        <p className='ms-3'>Order Board</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/restaurant/setup'>
                                    <div className='flex items-center p-2'>
                                        <FaUserPlus className='w-5 h-5' />
                                        <p className='ms-3'>Restaurant Setup</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/restaurant/orderhistory'>
                                    <div className='flex items-center p-2'>
                                        <GoHistory className='w-5 h-5' />
                                        <p className='ms-3'>Order History</p>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            <div className='pr-4'>
                <NavLink to='/restaurant-login'>
                    <PiSignOutBold className='text-2xl text-white cursor-pointer' title='Sign Out' />
                </NavLink>
            </div>
        </div>
    );
};

export default RestaurantNavbar;
