import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import HistoryInfo from '../../components/common/HistoryInfo';

const CustomerOrderHistory = () => {
    return (
        <div className="min-h-screen bg-amber-50 p-4 sm:p-6 md:p-10">
            <h1 className='text-xl sm:text-2xl font-bold mb-4'>Order History</h1>

            <div className='flex items-center gap-2 mb-6'>
                <IoMdTime className='text-2xl text-orange-400' />
                <p className='text-base sm:text-lg'>Ongoing Orders</p>
            </div>

            <Link to='/app/orderhistorydetail'>
                <HistoryInfo />
            </Link>
        </div>
    );
};

export default CustomerOrderHistory;
