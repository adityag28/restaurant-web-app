import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';

const CustomerOrderHistory = () => {
    return (
        <div className="flex flex-col p-5 bg-amber-50 h-screen">
            <h1 className='text-2xl font-bold'>Order History</h1>
            <div className='flex items-center gap-1 my-4'>
                <IoMdTime className='text-2xl text-orange-400 mt-0.5' />
                <p className='text-lg'>Ongoing Orders</p>
            </div>
            <Link to='/app/orderhistorydetail'>
                <div className='p-4 border-2 border-orange-400 rounded-md cursor-pointer'>
                    <p className='font-semibold text-xl sm:text-2xl'>Order No: #1io3h | Table No: 1</p>
                    <p className='text-lg text-gray-400'>August 27 | 2:30 pm</p>
                    <div className='flex flex-col sm:flex-row justify-between gap-4'>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                        <ul className=''>
                            <li>₹100</li>
                            <li>₹100</li>
                            <li>₹100</li>
                        </ul>
                    </div>
                    <hr className="my-2" />
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl sm:text-2xl'>Total Amount</p>
                        <p className='font-semibold text-xl sm:text-2xl'>₹300</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CustomerOrderHistory
