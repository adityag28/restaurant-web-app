import { useSelector } from "react-redux";



const HistoryInfoDetail = () => {
    const selectedOrder = useSelector(store => store.order.currentOrder);
    console.log(selectedOrder);

    return (
        <div className="space-y-4">
            <div
                className="p-4 sm:p-6 border-2 border-orange-400 bg-white rounded-md shadow-md w-full max-w-3xl mx-auto"
            >
                <p className="text-md mb-2">
                    <span className="font-semibold">Order No : </span>
                    {selectedOrder?.orderId}
                </p>
                <p className="text-md mb-2">
                    <span className="font-semibold">Table No : </span>
                    {selectedOrder?.tableNo}
                </p>
                <p className="text-md mb-2">
                    <span className="font-semibold">Date & Time : </span>
                    {selectedOrder?.dateTime}
                </p>
                <p className="text-md mb-2">
                    <span className="font-semibold">Order Items - </span>
                    {selectedOrder?.menus?.length || 0}
                </p>
                <ul className='list-disc list-inside mb-5 text-gray-800'>
                    {selectedOrder?.menus?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <hr className="my-3" />
                <p className="text-md mb-2"><span className="font-semibold">Total Amount : </span>₹{selectedOrder?.totalAmount}</p>
                <hr className="my-3" />
                <p className="text-md mb-2"><span className="font-semibold">Time Taken to Serve : </span>
                    ₹ 15 mins
                </p>
                <p className="text-md mb-2"><span className="font-semibold">Feedback : </span>
                    {selectedOrder?.feedback}
                </p>
            </div>
        </div >
    );
};

export default HistoryInfoDetail;
