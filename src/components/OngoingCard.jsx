import React from 'react'
import Button from './common/Button'
import { IoMdTime } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const OngoingCard = () => {

    const navigate = useNavigate()

    const handleBill = () => {
        console.log("Your bill is generating...")
        navigate("/app/getbill")
    }
    return (
        <div className=''>
            <div className='flex items-center  gap-1 my-4'>
                <IoMdTime className='text-2xl text-orange-400 mt-0.5' />
                <p className='text-lg '>Ongoing Orders </p>
            </div>

            <div className=' flex flex-col border-2 border-orange-400 rounded-md p-2'>

                <p className='text-lg '>Order Id : ID2020 | <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Status : Preparing</span></p>
                <p className='text-lg' > Order Items - 04 Items </p >
                <ul className='list-disc mx-5 p-2'>
                    <li className=' text-lg'>Item 1</li>
                    <li className=' text-lg'>Item 2</li>
                    <li className=' text-lg'>Item 3</li>
                    <li className=' text-lg'>Item 4</li>
                </ul>
                <div className='flex gap-5'>
                    <Button className='p-2 my-3' text="Get Bill" onClick={handleBill} />
                </div>
            </div>

        </div>
    )
}

export default OngoingCard

//     < span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300" > Red</span >
// <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Green</span>
// <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>