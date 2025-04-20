import React, { useState } from 'react'

const OtpVerificationForm = () => {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (e, index) => {
        const value = e.target.value;
        setOtp(prevOtp => {
            const updatedOtp = [...prevOtp];
            updatedOtp[index] = value;
            return updatedOtp;
        });

        // Auto-focus the next input field when a value is entered
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    }

    return (
        <div className="flex flex-col p-5  max-w-sm mx-auto rounded-md ">
            <h1 className='font-bold text-2xl mb-4 text-center'>Enter code for verification</h1>
            <p className='text-gray-400 font-semibold mb-5 text-center'>
                We've sent a one-time password to your mobile number
            </p>
            <div className="flex justify-between gap-2 mb-3">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        id={`otp-input-${index}`}
                        className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                ))}
            </div>
            <p className='text-gray-400 mb-3 font-semibold text-center'>
                Didn't get OTP? <span className='text-red-400 cursor-pointer'>Resend.</span>
            </p>
        </div>
    )
}

export default OtpVerificationForm
