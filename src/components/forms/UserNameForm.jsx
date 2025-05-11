import Button from '../common/Button'

const UserNameForm = ({ formData, handleChange, handleUserNameSubmit }) => {
    return (
        <div className="max-w-sm mx-auto p-5  rounded-md ">
            <h1 className='font-bold text-2xl mb-5 text-center'>Enter Your Name</h1>

            <label htmlFor="firstName" className="block font-semibold mb-1">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                className="w-full p-2 mb-4 border rounded"
            />

            <label htmlFor="lastName" className="block font-semibold mb-1">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                className="w-full p-2 mb-4 border rounded"
            />
            <Button text='Submit' onClick={handleUserNameSubmit} className="my-4 w-40" />

        </div>
    )
}

export default UserNameForm
