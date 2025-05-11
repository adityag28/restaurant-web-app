import React from 'react'
import OrderStatusCard from '../../components/cards/OrderStatusCard'

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
                    <OrderStatusCard tableno={1} status="preparing" />
                    <OrderStatusCard tableno={3} status="preparing" />
                </div>

                <div className="flex flex-col border p-5 rounded-md w-full lg:w-1/2 bg-white shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                        <p className="font-semibold text-lg">Completed Orders</p>
                        <p className="font-semibold text-lg">12 | INR 34000</p>
                    </div>
                    <OrderStatusCard tableno={2} status="Completed" />
                </div>
            </div>
        </div>
    )
}

export default RestaurantAdminDashboard
