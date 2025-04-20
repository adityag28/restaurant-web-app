import React from 'react'
import AddItemCounter from './AddItemCounter'
import Button from './Button'

const MenuItem = () => {
    return (
        <div className="flex flex-col sm:flex-row border-2 border-orange-400 rounded-md mt-6 justify-between p-4 gap-4 items-center">
            <div className="flex w-full sm:w-auto">
                <img
                    src="https://www.allrecipes.com/thmb/4h5yzzM5u5_Pgx6zoazspPPCZJg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/237311-Slow-cooker-mac-and-cheese-ddmfs-1X1-1297-1-d5968b9dc757411fb6a973d37b311166.jpg"
                    alt="menu"
                    className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col px-3 justify-between">
                    <p className="text-base sm:text-lg font-medium">White Sauce Pasta</p>
                    <p className="text-base sm:text-lg text-gray-700">₹100</p>
                    <AddItemCounter />
                </div>
            </div>
            <Button text="Add+" className="p-2 w-full sm:w-auto" />
        </div>
    )
}

export default MenuItem
