import React from 'react'
import BussinessInfoForm from '../../components/forms/BussinessInfoForm'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";

const BussinessInfo = () => {
    return (
        <div className="min-h-screen bg-amber-50 px-4 py-4 sm:px-6 md:px-10 lg:px-0">
            <Link to="/restaurant/setup">
                <div className='flex items-center gap-2 '>
                    <MdArrowBack className='text-2xl sm:text-3xl' />
                    <h1 className=' sm:text-lg md:text-2xl  lg:3xl font-bold'>
                        Update Restaurant Information
                    </h1>
                </div>
            </Link>
            <div className='w-full'>
                <BussinessInfoForm />
            </div>
        </div>
    )
}

export default BussinessInfo
