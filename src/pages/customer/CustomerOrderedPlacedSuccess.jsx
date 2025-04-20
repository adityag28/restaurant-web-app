import React from 'react'
import { TiTick } from "react-icons/ti"
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'

const CustomerOrderedPlacedSuccess = () => {
    const navigate = useNavigate()

    const handleViewStatusClick = () => {
        navigate("/app/dashboard")
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-amber-50 px-4'>
            <div className='bg-green-100 p-4 rounded-full mb-6'>
                <TiTick className='text-green-500 text-6xl sm:text-7xl' />
            </div>

            <p className='text-center text-lg sm:text-xl font-semibold mb-2'>
                Your order will arrive in 15 minutes.
            </p>
            <p className='text-center text-lg sm:text-xl font-semibold text-green-600 mb-4'>
                Thank you!
            </p>

            <Button
                text='View Status'
                onClick={handleViewStatusClick}
                className='p-3 w-full max-w-xs text-sm sm:text-base'
            />
        </div>
    )
}

export default CustomerOrderedPlacedSuccess
