import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";

const CustomerDetailOrderHistory = () => {
    return (
        <div className='flex flex-col p-5 bg-amber-50 h-screen'>
            <Link to="/app/orderhistory">
                <div className='flex items-center gap-2 mb-4'>
                    <MdArrowBack className='text-2xl mt-1' />
                    <h1 className='text-2xl sm:text-3xl font-bold'>Detail Order History</h1>
                </div>
            </Link>
            <p className='font-semibold text-xl sm:text-2xl'>Order No: #1io3h | Table No: 1</p>
            <p className='text-lg text-gray-400 sm:text-xl'>August 27 | 2:30 pm</p>
            <p className='font-semibold text-xl sm:text-2xl'>Order Items - 3 Items</p>
            <div className='flex flex-col sm:flex-row justify-between gap-4 my-2'>
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
            <hr />
            <div className='flex justify-between my-2'>
                <p className='font-semibold text-xl sm:text-2xl'>Total Amount</p>
                <p className='font-semibold text-xl sm:text-2xl'>₹300</p>
            </div>
            <hr />
            <p className='font-semibold text-xl sm:text-2xl my-2'>Time Taken to serve: 15 mins</p>
            <p className='font-semibold text-xl sm:text-2xl'>Your Feedback: Overall it was good</p>
        </div>
    )
}

export default CustomerDetailOrderHistory
