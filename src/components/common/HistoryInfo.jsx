import { useDispatch } from 'react-redux';
import { setSelectedOrder } from '../../store/orderSlice';
import { Link } from 'react-router-dom';

const HistoryInfo = ({ tableNo, status, orderId, dateTime, menus = [], totalAmount, timeToServe, feedback }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedOrder({
            tableNo,
            status,
            orderId,
            dateTime: dateTime?.toDate?.().toISOString() || new Date().toISOString(),
            menus,
            totalAmount,
            timeToServe,
            feedback
        }));
    };


    const formattedDate = dateTime instanceof Date
        ? dateTime.toLocaleString()
        : (dateTime?.toDate?.().toLocaleString?.() || 'N/A');


    return (
        <div className="space-y-4">

            <div
                className="p-4 sm:p-6 border-2 border-orange-400 bg-white rounded-md shadow-md w-full max-w-3xl mx-auto"
            >
                <Link
                    to="/app/orderhistorydetail"
                    onClick={handleClick}
                    className="block p-4"
                >
                    <p className="font-semibold text-lg sm:text-xl mb-1">
                        Order No: {orderId} | Table No: {tableNo}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 mb-4">
                        Date & Time: {formattedDate}
                    </p>
                    <div className="mb-4">
                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                            {Array.isArray(menus)
                                ? menus.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))
                                : <li>Invalid menu data</li>}
                        </ul>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg sm:text-xl font-semibold mb-2">
                        <p>Total Amount</p>
                        <p>₹{totalAmount}</p>
                    </div>
                </Link>

            </div>

        </div >
    );
};

export default HistoryInfo;
