import React, { useEffect } from 'react'
import MobileLoginForm from '../../components/forms/MobileLoginForm'
import Button from '../../components/common/Button'
import OtpVerificationForm from '../../components/forms/OtpVerificationForm'
import UserNameForm from '../../components/forms/UserNameForm'
import { useNavigate } from 'react-router-dom'
import useCustomerLogin from '../../hooks/useCustomerLogin'

const CustomerLoginForm = () => {

    const navigate = useNavigate();

    const {
        step,
        formData,
        handleChange,
        otp,
        setOtp,
        isFirstTime,
        handleOtpSubmit,
        handleUserNameSubmit,
        handlePhoneNumberSubmit,
        isLoggedIn // ✅
    } = useCustomerLogin();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/app');
        }
    }, [isLoggedIn, navigate]);


    return (
        <div className="flex items-center justify-center min-h-screen bg-amber-50 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className='font-bold text-2xl mb-2 text-center'>Login</h1>
                {step === 0 && (
                    <>
                        <MobileLoginForm
                            formData={formData}
                            handleChange={handleChange}
                            handlePhoneNumberSubmit={handlePhoneNumberSubmit}
                        />
                    </>
                )}
                {step === 1 && (
                    <>
                        <OtpVerificationForm
                            otp={otp}
                            setOtp={setOtp}
                            handleOtpSubmit={handleOtpSubmit}
                        />                    </>
                )}
                {step === 2 && isFirstTime && (
                    <>
                        <UserNameForm
                            formData={formData}
                            handleChange={handleChange}
                            handleUserNameSubmit={handleUserNameSubmit}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default CustomerLoginForm

