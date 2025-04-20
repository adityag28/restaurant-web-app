import React from 'react'

const UserNameForm = ({ name, setName }) => {
    return (
        <div className="max-w-sm mx-auto p-5  rounded-md ">
            <h1 className='font-bold text-2xl mb-5 text-center'>Enter Your Name</h1>

            <label htmlFor="firstName" className="block font-semibold mb-1">First Name</label>
            <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={name.first}
                onChange={(e) => setName({ ...name, first: e.target.value })}
                className="w-full p-2 mb-4 border rounded"
                autoCapitalize="words"
                autoComplete="given-name"
            />

            <label htmlFor="lastName" className="block font-semibold mb-1">Last Name</label>
            <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={name.last}
                onChange={(e) => setName({ ...name, last: e.target.value })}
                className="w-full p-2 mb-4 border rounded"
                autoCapitalize="words"
                autoComplete="family-name"
            />
        </div>
    )
}

export default UserNameForm
