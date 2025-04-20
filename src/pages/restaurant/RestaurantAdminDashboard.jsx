import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantAdminDashboard = () => {
    return (
        <div className="flex flex-col p-5 bg-amber-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-5">Order Board</h1>
            <div className="flex flex-col lg:flex-row gap-6 w-full">
                <div className="flex flex-col border p-5 rounded-md w-full lg:w-1/2 bg-white shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                        <p className="font-semibold text-lg">Ongoing Orders</p>
                        <p className="font-semibold text-lg">09 | INR 24000</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-yellow-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 1</p>
                                <p className="text-lg">Status : Preparing</p>
                            </div>
                        </Link>
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-yellow-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 3</p>
                                <p className="text-lg">Status : Preparing</p>
                            </div>
                        </Link>
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-green-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 4</p>
                                <p className="text-lg">Status : Ready</p>
                            </div>
                        </Link>
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-green-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 2</p>
                                <p className="text-lg">Status : Ready</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Completed Orders */}
                <div className="flex flex-col border p-5 rounded-md w-full lg:w-1/2 bg-white shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                        <p className="font-semibold text-lg">Completed Orders</p>
                        <p className="font-semibold text-lg">12 | INR 34000</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-blue-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 5</p>
                                <p className="text-lg">Status : Completed</p>
                            </div>
                        </Link>
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-blue-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 7</p>
                                <p className="text-lg">Status : Completed</p>
                            </div>
                        </Link>
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-blue-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 9</p>
                                <p className="text-lg">Status : Completed</p>
                            </div>
                        </Link>
                        <Link to="/restaurant/orderboarddetail">
                            <div className="bg-blue-200 p-4 rounded-md">
                                <p className="text-lg">Table No : 8</p>
                                <p className="text-lg">Status : Completed</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantAdminDashboard
