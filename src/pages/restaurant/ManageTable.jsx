import React from 'react'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import useManageTable from '../../hooks/useManageTable'
import { IoQrCode } from "react-icons/io5";
import { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';



const ManageTable = () => {
    const {
        isPopupOpen,
        setIsPopupOpen,
        formData,
        tables,
        handleChange,
        handleAddTableClick,
        handleUpdateTableClick,
        handleDeleteTableClick,
        handleQrClick,
        qrTableNumber,
    } = useManageTable()

    const qrCodeRef = useRef(null);

    const downloadQRCode = () => {
        if (qrCodeRef.current) {
            const canvas = qrCodeRef.current.querySelector('canvas');
            if (canvas) {
                const imageUrl = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = 'qr_code.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    };


    return (
        <div className='p-5 min-h-screen bg-amber-50'>
            <div className='flex justify-between items-center mb-4'>
                <Link to="/restaurant/setup">
                    <div className='flex items-center gap-2'>
                        <MdArrowBack className='text-2xl mt-1' />
                        <h1 className=' sm:text-lg md:text-2xl  lg:3xl font-bold'>
                            Update Table
                        </h1>
                    </div>
                </Link>
                <Button text='Add Table+' className="py-1 px-3" onClick={() => setIsPopupOpen(true)} />
            </div>

            <div className="overflow-x-auto">
                <table className='w-full text-center border-collapse'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2'>Table Id</th>
                            <th className='border px-4 py-2'>Table No.</th>
                            <th className='border px-4 py-2'>Capacity</th>
                            <th className='border px-4 py-2'>Location</th>
                            <th className='border px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tables.map((table) => (
                            <tr key={table.id} className='h-10'>
                                <td className='border px-4 py-2'>{table.tableId}</td>
                                <td className='border px-4 py-2'>{table.tableNumber}</td>
                                <td className='border px-4 py-2'>{table.capacity}</td>
                                <td className='border px-4 py-2'>{table.location}</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <Button text='✎' className="py-1 px-3"
                                            onClick={() => handleUpdateTableClick(table)}
                                        />
                                        <Button text='✕' className="py-1 px-3" onClick={() => handleDeleteTableClick(table.id)} />
                                        <Button text='QR' className='py-1 px-3' onClick={() => handleQrClick(table.tableNumber)} />

                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add Table</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Table Id"
                                className="w-full p-2 border rounded"
                                name='tableId'
                                value={formData.tableId}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Table Number"
                                className="w-full p-2 border rounded"
                                name='tableNumber'
                                value={formData.tableNumber}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                placeholder="Capacity"
                                className="w-full p-2 border rounded"
                                name='capacity'
                                value={formData.capacity}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full p-2 border rounded"
                                name='location'
                                value={formData.location}
                                onChange={handleChange}
                            />
                            <div className="flex justify-end gap-2">
                                <Button
                                    text="Cancel"
                                    className="bg-gray-300 hover:bg-gray-400"
                                    onClick={() => setIsPopupOpen(false)}
                                />
                                <Button
                                    text="Save"
                                    className="bg-amber-400 hover:bg-amber-500"
                                    onClick={handleAddTableClick}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {qrTableNumber && (
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">View QR</h2>
                        <div>
                            <div ref={qrCodeRef}>
                                <QRCodeCanvas value={`https://walkinqr.netlify.app/?tableId=${qrTableNumber}`} size={256} level="Q" />
                            </div>
                            <button onClick={downloadQRCode}>Download QR Code</button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default ManageTable
