import React, { useState, useEffect } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { PiSignOutBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';



const CustomerSideMenuBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsOpen(window.innerWidth >= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className='flex h-screen'>
            <div className={` bg-orange-400 p-4 duration-300 flex flex-col gap-6 
                ${isOpen ? 'w-64' : 'w-16'} 
                ${isMobile ? 'absolute z-50 h-full' : 'relative'}`}>

                <div className='flex justify-between items-center'>
                    {isOpen ? (
                        <div className='flex items-center'>
                            <RxCross2 className='text-2xl text-white cursor-pointer' onClick={toggleSidebar} />
                        </div>
                    ) : (
                        <GiHamburgerMenu className='text-2xl text-white cursor-pointer' onClick={toggleSidebar} />
                    )}

                </div>
                <NavLink to='/app/dashboard' className='cursor-pointer'>
                    <div className='flex items-center'>
                        <MdSpaceDashboard className='text-2xl text-white' />
                        {isOpen && <p className='ml-3 text-white font-semibold'>Dashboard</p>}
                    </div>
                </NavLink>

                <NavLink to='/app/menu'>
                    <div className='flex items-center'>
                        <MdOutlineRestaurantMenu className='text-2xl text-white' />
                        {isOpen && <p className='ml-3 text-white font-semibold'>Menu</p>}
                    </div>
                </NavLink>

                <NavLink to='/app/orderhistory'>
                    <div className='flex items-center'>
                        <GoHistory className='text-2xl text-white' />
                        {isOpen && <p className='ml-3 text-white font-semibold'>Order History</p>}
                    </div>
                </NavLink>


                <div className='flex items-center'>
                    <PiSignOutBold className='text-2xl text-white' />
                    {isOpen && <p className='ml-3 text-white font-semibold'>Sign Out</p>}
                </div>
            </div>


        </div>
    );
};

export default CustomerSideMenuBar;
