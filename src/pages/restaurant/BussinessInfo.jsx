import React from 'react'
import BussinessInfoForm from '../../components/forms/BussinessInfoForm'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";

const BussinessInfo = () => {
    return (
        <div className="flex flex-col bg-amber-50 py-10 px-5 h-screen">
            <Link to="/restaurant/setup">
                <div className='flex items-center gap-2 mb-4'>
                    <MdArrowBack className='text-2xl mt-1' />
                    <h1 className='text-2xl font-bold'>Update Restaurant Information</h1>
                </div>
            </Link>
            <div className='flex flex-col'>
                <BussinessInfoForm />
            </div>
        </div>
    )
}

export default BussinessInfo
