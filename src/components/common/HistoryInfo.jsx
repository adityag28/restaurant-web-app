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
                    <p className="text-md mb-2">
                        <span className="font-semibold">Order No : </span>
                        {orderId}
                    </p>
                    <p className="text-md mb-2"><span className="font-semibold">Table No : </span>{tableNo}</p>
                    <p className="text-md mb-2"><span className='font-semibold'>Date & Time : </span> {formattedDate}</p>
                    <p className="text-md mb-2"><span className="font-semibold">Items : </span> {menus.length}</p>
                    <div className="mb-4">
                        <ul className="list-disc list-inside  space-y-1">
                            {Array.isArray(menus)
                                ? menus.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))
                                : <li>Invalid menu data</li>}
                        </ul>
                    </div>
                    <hr className="my-3" />
                    <p className="text-md mb-2"><span className="font-semibold">Total Amount : </span>₹{totalAmount}</p>
                </Link>

            </div>

        </div >
    );
};

export default HistoryInfo;
