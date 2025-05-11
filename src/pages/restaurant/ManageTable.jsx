import React from 'react'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import useManageTable from '../../hooks/useManageTable'




const ManageTable = () => {
    const { isPopupOpen, setIsPopupOpen, formData, tables, handleChange, handleAddTableClick, handleUpdateTableClick, handleDeleteTableClick } = useManageTable()

    return (
        <div className='p-5 min-h-screen bg-amber-50'>
            <div className='flex justify-between items-center mb-4'>
                <Link to="/restaurant/setup">
                    <div className='flex items-center gap-2'>
                        <MdArrowBack className='text-2xl mt-1' />
                        <h1 className='text-xl font-bold '>Update Restaurant Table</h1>
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
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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
        </div>
    )
}

export default ManageTable
