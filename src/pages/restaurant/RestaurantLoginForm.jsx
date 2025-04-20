import React from 'react'
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'

const RestaurantLoginForm = () => {
    const navigate = useNavigate()

    const handleRestaurantLogin = () => {
        navigate("/restaurant")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-amber-50 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className="font-bold text-2xl text-center mb-6 text-gray-800">
                    Restaurant Login
                </h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                    <Button
                        text="Login"
                        onClick={handleRestaurantLogin}
                        className="w-full p-3 mt-4 text-white bg-amber-400 hover:bg-amber-500 rounded-md"
                    />
                </form>
            </div>
        </div>
    )
}

export default RestaurantLoginForm
