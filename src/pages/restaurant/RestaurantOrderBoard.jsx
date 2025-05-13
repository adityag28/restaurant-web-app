import React from 'react'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import { useSelector } from 'react-redux';

const RestaurantOrderBoard = () => {

    const selectedOrder = useSelector(store => store.order.currentOrder);
    console.log(selectedOrder);

    return (
        <div className='bg-amber-50 min-h-screen p-4 sm:p-6'>
            <Link to="/restaurant/orderboard">
                <div className='flex items-center gap-2 mb-6'>
                    <MdArrowBack className='text-2xl' />
                    <h1 className='text-2xl font-bold'>Order Board Detail</h1>
                </div>
            </Link>

            <div className='bg-white shadow-md p-6 float-left rounded-md mx-auto max-w-3xl'>
                <p className="text-md mb-2">
                    <span className="font-semibold">Order No : </span>
                    {selectedOrder?.orderId}
                </p>
                <p className="text-md mb-2"><span className="font-semibold">Table No : </span>{selectedOrder?.tableNo}</p>
                <p className="text-md mb-2"><span className="font-semibold">Date & Time : </span>{selectedOrder?.dateTime}</p>
                <p className='text-md mb-2'><span className="font-semibold">Items : </span>{selectedOrder?.menus?.length || 0} Items</p>
                <ul className='list-disc list-inside mb-2 text-md'>
                    {selectedOrder?.menus?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                    <p className='text-md mb-2 bg-yellow-100 text-yellow-800  w-auto p-2 rounded-sm '>
                        <span className="font-semibold">Stauts : </span>{selectedOrder?.status}</p>
                    <div className='flex gap-2'>
                        <Button text='Mark Ready' className='p-2' />
                        <Button text='Cancel Order' className='p-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantOrderBoard
