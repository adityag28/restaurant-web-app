import Button from '../common/Button'

const MobileLoginForm = ({ formData, handleChange, handlePhoneNumberSubmit }) => {

    return (
        <div className="flex flex-col p-4  max-w-sm mx-auto rounded-md ">
            <h1 className='font-bold text-xl mb-4 text-center lg:text-2xl'>Enter your mobile number</h1>
            <p className='text-gray-400 font-semibold mb-4 text-left lg-text-center'>
                We'll send you a one-time password to your mobile number to log in
            </p>
            <label htmlFor="phoneNumber" className="block font-semibold mb-1">Mobile Number</label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
            />
            <Button text='Send OTP' onClick={handlePhoneNumberSubmit} className="my-4 w-40" />
        </div >
    )
}

export default MobileLoginForm
