import Button from '../common/Button';

const OtpVerificationForm = ({ otp, setOtp, handleOtpSubmit }) => {
    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/, '');
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    return (
        <div className="flex flex-col py-5  max-w-sm mx-auto rounded-md ">
            <h1 className='font-bold text-2xl mb-4 text-center'>Enter code for verification</h1>
            <p className='text-gray-400 font-semibold mb-5 text-center'>
                We've sent a one-time password to your mobile number
            </p>
            <label className="block font-semibold mb-1">Enter OTP</label>
            <div className="flex items-center justify-center gap-1.5 mb-3">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                ))}
            </div>
            <Button text='Verify OTP' onClick={handleOtpSubmit} className="my-4 w-40" />
            <p className='text-gray-400 mb-3 font-semibold text-center'>
                Didn't get OTP? <span className='text-red-400 cursor-pointer'>Resend.</span>
            </p>
        </div>
    )
}

export default OtpVerificationForm
