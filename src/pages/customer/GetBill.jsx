import React from 'react'
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const GetBill = () => {
    const navigate = useNavigate()

    const handleBackToDashboard = () => {
        navigate("/app/dashboard")
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-amber-50 px-4 py-10 sm:py-20">
            <TiTick className="text-green-400 border-4 border-green-400 rounded-full text-6xl sm:text-7xl mb-6 p-2" />
            <p className="font-bold text-base sm:text-lg text-center mb-2">Your Bill is ₹100</p>
            <p className="font-bold text-base sm:text-lg text-center mb-2">
                One of our staff will reach out to you soon with the bill.
            </p>
            <p className="font-bold text-base sm:text-lg text-center mb-2">
                We hope you enjoyed the food served by us and will be back soon!
            </p>
            <p className="font-bold text-base sm:text-lg text-center">Thank you!</p>
            <div className="flex justify-center  mt-10">
                <Button text="Proceed" onClick={handleBackToDashboard} className="px-6 py-2" />
            </div>
        </div>
    )
}

export default GetBill
