import React from 'react'

const MobileLoginForm = ({ mobile, setMobile }) => {

    return (
        <div className="flex flex-col p-4  max-w-sm mx-auto rounded-md ">
            <h1 className='font-bold text-2xl mb-4 text-center'>Enter your mobile number</h1>
            <p className='text-gray-400 font-semibold mb-4 text-center'>
                We'll send you a one-time password to your mobile number to log in
            </p>
            <label htmlFor='mobile' className='text-lg font-semibold mb-2'>Mobile Number</label>
            <input
                type="tel"
                placeholder="Enter your mobile number"
                maxLength='10'
                pattern='[0-9]{10}'
                id='mobile'
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
        </div>
    )
}

export default MobileLoginForm
