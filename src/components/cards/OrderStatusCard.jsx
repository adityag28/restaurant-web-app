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

    const formattedDate = dateTime instanceof Date
        ? dateTime.toLocaleString()
        : (dateTime?.toDate?.().toLocaleString?.() || 'N/A');

    return (
        <div className=" border-1 border-black rounded-md bg-amber-50 gap-4 mb-5 cursor-pointer">
            <Link
                to="/restaurant/orderboarddetail"
                onClick={handleClick}
                className="block p-4"
            >
                <p className="text-md mb-2">
                    <span className="font-semibold">Order No : </span>
                    {orderId}
                </p>
                <p className="text-md mb-2"><span className="font-semibold">Table No : </span>{tableNo}</p>
                <p className="text-md mb-2"><span className='font-semibold'>Date & Time : </span> {formattedDate}</p>
                <p className="text-md mb-2"><span className='font-semibold'>Items : </span> {menus.join(', ')}</p>
                <p className="text-md mb-2"><span className='font-semibold'>Total Amount : </span>₹{totalAmount}</p>
                <p className="text-md mb-2"><span className='font-semibold'> Time Taken to Serve : </span>{timeToServe} </p>
                <p className='text-md mb-2 bg-yellow-100 text-yellow-800  w-45 p-2 rounded-sm '>
                    <span className="font-semibold">Stauts : </span>{status}
                </p>
            </Link>
        </div>
    );
};

export default OrderStatusCard;
