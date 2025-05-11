import React from 'react'
import { Link } from 'react-router-dom'

const WaiterOrderStatus = ({ tableno, status }) => {
    return (
        <div>
            <div className="  hover:border-2  bg-amber-50 gap-4 mb-5">
                <Link to="/restaurant/waiterorderboarddetail">
                    <div className=" p-4 rounded-md">
                        <p className="text-lg">Table No : {tableno}</p>
                        <p className="text-lg">Status : <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">{status}</span></p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WaiterOrderStatus
