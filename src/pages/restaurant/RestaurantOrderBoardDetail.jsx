import React from 'react'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";

const RestaurantOrderBoardDetail = () => {
    return (
        <div className='bg-amber-50 min-h-screen p-4 sm:p-6'>
            <Link to="/restaurant/orderboard">
                <div className='flex items-center gap-2 mb-6'>
                    <MdArrowBack className='text-2xl' />
                    <h1 className='text-2xl font-bold'>Order Board Detail</h1>
                </div>
            </Link>

            <div className='bg-white shadow-md p-6 float-left rounded-md mx-auto max-w-3xl'>
                <p className='font-semibold mb-1'>Order No: <span className='text-gray-700'>#1io3h</span> | Table No: <span className='text-gray-700'>1</span></p>
                <p className='font-semibold mb-1'>Customer Name: <span className='text-gray-700'>John D</span></p>
                <p className='font-semibold mb-1'>Date & Time: <span className='text-gray-700'>2 - 3 - 2025 | 2:30 PM</span></p>
                <p className='font-semibold mb-3'>Order Items - <span className='text-gray-700'>4 Items</span></p>

                <ul className='list-disc list-inside mb-5 text-gray-800'>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>

                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                    <span className="bg-yellow-100 text-yellow-800 text-md font-semibold me-2 p-2 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Status : Preparing</span>
                    <div className='flex gap-4'>
                        <Button text='Mark Ready' className='p-2' />
                        <Button text='Cancel Order' className='p-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantOrderBoardDetail
