import React, { useState } from 'react'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { IoQrCode } from "react-icons/io5";
import { FaImage } from 'react-icons/fa6';

const ManageMenu = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)


    return (
        <div className='p-5 h-screen bg-amber-50'>
            <div className='flex justify-between items-center mb-4'>
                <Link to="/restaurant/setup">
                    <div className='flex items-center gap-2'>
                        <MdArrowBack className='text-2xl mt-1' />
                        <h1 className='text-xl font-bold'>Update Restaurant Menu</h1>
                    </div>
                </Link>
                <Button text='Add Menu+' className="py-1 px-3" onClick={() => setIsPopupOpen(true)} />
            </div>

            <div className="overflow-x-auto">
                <table className='w-full text-center border-collapse'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2'>Name</th>
                            <th className='border px-4 py-2'>Discription</th>
                            <th className='border px-4 py-2'>Image</th>
                            <th className='border px-4 py-2'>Price</th>
                            <th className='border px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='h-10'>
                            <td className='border px-4 py-2'>White Sauce Pasta</td>
                            <td className='border px-4 py-2'>The pasta with white sauce</td>
                            <td className='border px-4 py-2'><FaImage className='text-4xl text-orange-400' /></td>
                            <td className='border px-4 py-2'>₹100</td>
                            <td className='border px-4 py-2'>
                                <div className='flex items-center justify-center gap-2'>
                                    <Button text='✎' className="py-1 px-3" />
                                    <Button text='✕' className="py-1 px-3" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add Menu</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Description" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Image" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Price" className="w-full p-2 border rounded" />
                            <div className="flex justify-end gap-2">
                                <Button
                                    text="Cancel"
                                    className="bg-gray-300 hover:bg-gray-400"
                                    onClick={() => setIsPopupOpen(false)}
                                />
                                <Button
                                    text="Save"
                                    className="bg-amber-400 hover:bg-amber-500"
                                    onClick={() => setIsPopupOpen(false)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ManageMenu
