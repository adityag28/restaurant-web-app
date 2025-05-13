

const OrderHistoryCard = ({ tableNo, orderId, dateTime, menus = [], totalAmount, timeToServe }) => {


    // Format Firestore Timestamp or JS Date
    const formattedDate = dateTime instanceof Date
        ? dateTime.toLocaleString()
        : (dateTime?.toDate?.().toLocaleString?.() || 'N/A');

    return (
        <div className="  rounded-md bg-white p-2 border-black  border-1  w-100 h-60 gap- mb-5 ">
            <p className="text-md mb-2">
                <span className="font-semibold">Order No : </span>
                {orderId}
            </p>
            <p className="text-md mb-2"><span className="font-semibold">Table No : </span>{tableNo}</p>
            <p className="text-md mb-2"><span className="font-semibold">Date & Time : </span>{formattedDate}</p>
            <p className="text-md mb-2"><span className="font-semibold">Items : </span> {menus.join(', ')}</p>
            <p className="text-md mb-2"><span className="font-semibold">Total Amount : </span>₹{totalAmount}</p>
            <p className="text-md mb-4"><span className="font-semibold">Time Taken to Serve : </span> {timeToServe} </p>
        </div>
    );
};

export default OrderHistoryCard;
