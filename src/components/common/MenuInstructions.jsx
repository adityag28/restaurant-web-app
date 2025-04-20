import React from 'react'

const MenuInstructions = () => {
    return (
        <div className='w-full'>
            {/* Instructions Textarea */}
            <textarea
                placeholder='Any Instructions'
                className='w-full border border-gray-300 rounded-md mb-5 mt-6 resize-none p-3 text-sm sm:text-base'
                rows="5"
            />

            {/* Divider */}
            <hr className="border-t border-gray-300 mb-4" />

            {/* Bill Summary */}
            <div className='flex justify-between text-sm sm:text-base font-medium'>
                <div className='space-y-2'>
                    <p>Items Count</p>
                    <p>SGST</p>
                    <p>CGST</p>
                    <p className="font-semibold">Total Amount</p>
                </div>
                <div className='space-y-2 text-right'>
                    <p>₹199</p>
                    <p>₹5</p>
                    <p>₹5</p>
                    <p className="font-semibold">₹209</p>
                </div>
            </div>
        </div>
    )
}

export default MenuInstructions
