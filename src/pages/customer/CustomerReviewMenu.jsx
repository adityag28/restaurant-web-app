import React from 'react'
import MenuItem from '../../components/common/MenuItem'
import MenuInstructions from '../../components/common/MenuInstructions'
import Button from '../../components/common/Button'
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md"

const CustomerReviewMenu = ({ isOpen }) => {
    const navigate = useNavigate()

    const handleOrderClick = () => {
        navigate('/app/ordersuccess')
    }

    return (
        <div className='min-h-screen bg-amber-50 p-4 sm:p-6 md:p-10 flex flex-col'>
            <Link to="/app/menu" className="mb-6">
                <div className='flex items-center gap-2'>
                    <MdArrowBack className='text-2xl' />
                    <h1 className='text-xl sm:text-2xl font-bold'>Confirm / Review Menu</h1>
                </div>
            </Link>

            <div className="flex flex-col gap-4 mb-6">
                <MenuItem />
                <MenuItem />
            </div>

            <MenuInstructions />

            <div className={`mt-auto w-full ${isOpen ? "sm:ml-28 md:ml-36" : ""}`}>
                <Button
                    text='Place your order'
                    onClick={handleOrderClick}
                    className='w-full sm:w-auto px-6 py-3 mt-6'
                />
            </div>
        </div>
    )
}

export default CustomerReviewMenu
