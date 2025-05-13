import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedOrder } from '../../store/orderSlice';

const OrderStatusCard = ({ tableNo, status, orderId, dateTime, menus = [], totalAmount, timeToServe }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedOrder({
            tableNo,
            status,
            orderId,
            dateTime: dateTime?.toDate?.().toISOString() || new Date().toISOString(),
            menus,
            totalAmount,
            timeToServe
        }));
    };

    // Format Firestore Timestamp or JS Date
    const formattedDate = dateTime instanceof Date
        ? dateTime.toLocaleString()
        : (dateTime?.toDate?.().toLocaleString?.() || 'N/A');

    return (
        <div className="hover:border-2 border-gray-300 rounded-md bg-amber-50 gap-4 mb-5 cursor-pointer">
            <Link
                to="/restaurant/orderboarddetail"
                onClick={handleClick}
                className="block p-4"
            >
                <h3 className="font-semibold">Order No: {orderId} | Table No: {tableNo}</h3>
                <p className="text-sm">Date & Time: {formattedDate}</p>
                <p className="text-sm">Items: {menus.join(', ')}</p>
                <p className="text-sm">Total Amount: ₹{totalAmount}</p>
                <p className="text-sm">Time Taken to Serve: {timeToServe} mins</p>
                <p className="text-sm font-medium">Status: {status}</p>
            </Link>
        </div>
    );
};

export default OrderStatusCard;
