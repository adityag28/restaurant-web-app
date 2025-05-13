import React from 'react'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import useManageStaff from '../../hooks/useManageStaff'


const ManageStaff = () => {

    const {
        isPopupOpen,
        setIsPopupOpen,
        formData,
        restaurantStaff,
        handleChange,
        handleAddStaffClick,
        handleUpdateStaffClick,
        handleDeleteStaffClick,
    } = useManageStaff()

    return (
        <div className='p-5 h-screen bg-amber-50'>
            <div className='flex justify-between items-center mb-4'>
                <Link to="/restaurant/setup">
                    <div className='flex items-center gap-2'>
                        <MdArrowBack className='text-2xl mt-1' />
                        <h1 className=' sm:text-lg md:text-2xl  lg:3xl font-bold'>
                            Update  Staff
                        </h1>
                    </div>
                </Link>
                <Button text='Add Staff+' className="py-1 px-3" onClick={() => setIsPopupOpen(true)} />
            </div>

            <div className="overflow-x-auto">
                <table className='w-full text-center border-collapse'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2'>Staff Id</th>
                            <th className='border px-4 py-2'>Name</th>
                            <th className='border px-4 py-2'>Contact</th>
                            <th className='border px-4 py-2'>Email</th>
                            <th className='border px-4 py-2'>Password</th>
                            <th className='border px-4 py-2'>Role</th>
                            <th className='border px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurantStaff.map((staff) => (
                            <tr key={staff.id} className='h-10'>
                                <td className='border px-4 py-2'>{staff.staffId}</td>
                                <td className='border px-4 py-2'>{staff.name}</td>
                                <td className='border px-4 py-2'>{staff.phoneNumber}</td>
                                <td className='border px-4 py-2'>{staff.email}</td>
                                <td className='border px-4 py-2'>{staff.password}</td>
                                <td className='border px-4 py-2'>{staff.role}</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <Button text='✎' className="py-1 px-3"
                                            onClick={() => handleUpdateStaffClick(staff)} />
                                        <Button text='✕' className="py-1 px-3"
                                            onClick={() => handleDeleteStaffClick(staff.id)} />
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
                        <h2 className="text-xl font-bold mb-4">Add Staff</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Staff Id"
                                className="w-full p-2 border rounded"
                                name='staffId'
                                value={formData.staffId}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 border rounded"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-2 border rounded"
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />


                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 border rounded"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <select
                                className="w-full p-2 border rounded text-gray-500"
                                name='role'
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option>Role</option>
                                <option>waiter</option>
                                <option>kitchen</option>
                            </select>
                            <div className="flex justify-end gap-2">
                                <Button
                                    text="Cancel"
                                    className="bg-gray-300 hover:bg-gray-400"
                                    onClick={() => setIsPopupOpen(false)}
                                />
                                <Button
                                    text="Save"
                                    className="bg-amber-400 hover:bg-amber-500"
                                    onClick={handleAddStaffClick}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ManageStaff
