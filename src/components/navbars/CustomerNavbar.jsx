import React, { useState, useEffect } from 'react';
import { MdOutlineRestaurantMenu, MdSpaceDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHistory } from "react-icons/go";
import { PiSignOutBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { initFlowbite } from "flowbite";
import { useDispatch } from "react-redux";
import { resetMenu } from "../../store/menuSlice"; 
import { useNavigate } from "react-router-dom"; 
import { clearOrder } from '../../store/orderSlice';


const CustomerNavbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        initFlowbite();
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(prev => !prev);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(resetMenu());
        dispatch(clearOrder());
        navigate('/');
    };


    return (
        <div className='bg-orange-400 text-white flex justify-between items-center'>
            <div className="text-center">
                <button
                    className="text-white bg-orange-400 font-medium text-sm px-5 py-2.5"
                    type="button"
                    onClick={handleDrawerToggle}
                    aria-controls="drawer-navigation"
                    aria-expanded={isDrawerOpen}
                >
                    <GiHamburgerMenu className='text-2xl text-white cursor-pointer' />
                </button>
            </div>

            <div className='flex items-center p-4'>
                <MdOutlineRestaurantMenu className='text-2xl text-white cursor-pointer' />
                <p className='ml-1 text-lg font-semibold text-white'>WalkInQR</p>
            </div>

            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-orange-400 text-white ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
                tabIndex={-1}
                aria-labelledby="drawer-navigation-label"
                {...(!isDrawerOpen ? { inert: false } : {})}
            >
                <h5 id="drawer-navigation-label" className="text-base font-semibold">WalkInQr</h5>
                <button
                    type="button"
                    onClick={handleDrawerToggle}
                    aria-controls="drawer-navigation"
                    className="text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                >
                    <RxCross2 className='text-2xl text-white cursor-pointer' />
                </button>

                <div className="py-4 overflow-y-auto text-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to='/app/dashboard'>
                                <div className='flex items-center p-2'>
                                    <MdSpaceDashboard className="w-5 h-5" />
                                    <p className='ms-3'>Dashboard</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/app/menu'>
                                <div className='flex items-center p-2'>
                                    <MdOutlineRestaurantMenu className="w-5 h-5" />
                                    <p className='ms-3'>Menu</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/app/orderhistory'>
                                <div className='flex items-center p-2'>
                                    <GoHistory className='w-5 h-5' />
                                    <p className='ms-3'>Order History</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <button onClick={handleLogout} className="w-full text-left">
                                    <div className='flex items-center p-2'>
                                        <PiSignOutBold className='w-5 h-5' />
                                        <p className='m-3'>Sign Out</p>
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CustomerNavbar;
