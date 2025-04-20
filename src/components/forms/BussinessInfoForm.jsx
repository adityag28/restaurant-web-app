import React from 'react'
import Button from '../common/Button'

const BussinessInfoForm = () => {

    return (
        <div className="flex  h-120  bg-amber-50">
            <form className="w-full max-w-md p-5 border-2 border-orange-400 rounded-md bg-white">
                <input
                    type="text"
                    placeholder="Restaurant Name"
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <textarea
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Address"
                    cols={4}
                />
                <input
                    type="text"
                    placeholder="Contact"
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="text"
                    placeholder="Opening Hours (e.g. 10 AM - 11 PM)"
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="url"
                    placeholder="Website or Social Media Link"
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <Button text='UPDATE' className='w-full py-2 mt-4' />
            </form>
        </div>
    )
}

export default BussinessInfoForm
