import React from 'react'
import OngoingCard from '../../components/OngoingCard'
import OfferCard from '../../components/OfferCard'

const CustomerDashboard = () => {
    return (
        <div className="flex flex-col bg-amber-50 min-h-screen p-4 sm:p-6 md:p-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Welcome</h1>


            <div className="flex flex-col gap-4">
                <OngoingCard />
                {/* <OfferCard /> */}
            </div>
        </div>
    )
}

export default CustomerDashboard
