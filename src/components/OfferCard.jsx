import React from 'react'

const OfferCard = () => {
    return (
        <div className='rounded-lg my-10  h-120 w-100 bg-white flex flex-col justify-center items-center'>
            <div className='bg-blue-300 rounded-md text-white w-80 h-50 mb-2  '>
                <p className='font-bold text-center text-lg'>Offer 1</p>
            </div>
            <div className='bg-red-400 rounded-md text-white w-80 h-50 '>
                <p className='font-bold text-center text-lg'>Offer 2</p>
            </div>
        </div>
    )
}

export default OfferCard
