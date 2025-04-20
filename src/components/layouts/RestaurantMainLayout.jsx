import React from 'react'
import SideMenuBar from '../sidemenubar/CustomerSideMenuBar';
import { Outlet } from 'react-router-dom';
import RestaurantSideMenuBar from '../sidemenubar/RestaurantSideMenuBar';
import Navbar from '../common/Navbar';
import RestaurantNavbar from '../../navbars/RestaurantNavbar';

const RestaurantMainLayout = () => {
    return (
        <div className=" h-screen">
            <RestaurantNavbar />
            <div className="flex-1 overflow-auto bg-amber-50">
                <Outlet />
            </div>
        </div>
    )
}

export default RestaurantMainLayout
