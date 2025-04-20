import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerNavbar from '../../navbars/CustomerNavbar';

const CustomerMainLayout = () => {
    return (
        <div className="">
            <CustomerNavbar />
            <div className="flex-1 overflow-auto bg-amber-50 ">
                <Outlet />
            </div>
        </div>
    );
};

export default CustomerMainLayout;
