import React, { useState } from 'react'
import MobileLoginForm from '../../components/forms/MobileLoginForm'
import Button from '../../components/common/Button'
import OtpVerificationForm from '../../components/forms/OtpVerificationForm'
import UserNameForm from '../../components/forms/UserNameForm'
import SideMenuBar from '../../components/sidemenubar/CustomerSideMenuBar'
import { useNavigate } from 'react-router-dom'



const CustomerLoginForm = () => {
    const [step, setStep] = useState(0)
    const [mobile, setMobile] = useState("")
    const [otp, setOtp] = useState(["", "", "", ""])
    const [name, setName] = useState({ first: '', last: '' });
    const [isFirstTime, setIsFirstTime] = useState(false);
    const navigate = useNavigate()

    const handleGetOtp = () => {
        console.log("Sending OTP to", mobile);
        setStep(1);
    }

    const handleVerifyOtp = () => {
        console.log("Verifying OTP:", otp.join(''));
        const firstTimer = true;
        setIsFirstTime(firstTimer);
        setStep(firstTimer ? 2 : 3);
    }
    const handleSubmitName = () => {
        console.log("Submitted Name:", name);
        setStep(3);
    }

    if (step === 3) return navigate('/app')

    return (
        <div className="flex items-center justify-center min-h-screen bg-amber-50 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className='font-bold text-2xl mb-5 text-center'>Login</h1>
                {step === 0 && (
                    <>
                        <MobileLoginForm mobile={mobile} setMobile={setMobile} />
                        <Button text="Get OTP >" onClick={handleGetOtp} className='mx-4' />
                    </>
                )}
                {step === 1 && (
                    <>
                        <OtpVerificationForm otp={otp} setOtp={setOtp} />
                        <Button text="Verify OTP" onClick={handleVerifyOtp} className='mx-4' />
                    </>
                )}
                {step === 2 && isFirstTime && (
                    <>
                        <UserNameForm name={name} setName={setName} />
                        <Button text="Submit" onClick={handleSubmitName} className='mx-4' />
                    </>
                )}
            </div>
        </div>
    );
}

export default CustomerLoginForm
