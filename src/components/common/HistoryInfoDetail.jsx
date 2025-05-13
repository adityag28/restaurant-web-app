import { useSelector } from "react-redux";



const HistoryInfoDetail = () => {
    const selectedOrder = useSelector(store => store.order.currentOrder);
    console.log(selectedOrder);

    return (
        <div className="space-y-4">
            <div
                className="p-4 sm:p-6 border-2 border-orange-400 bg-white rounded-md shadow-md w-full max-w-3xl mx-auto"
            >
                <p className='font-semibold mb-1'>Order No:
                    <span className='text-gray-700'>{selectedOrder?.orderId}</span>
                    |
                    Table No:
                    <span className='text-gray-700'>{selectedOrder?.tableNo}</span>
                </p>
                <p className='font-semibold mb-1'>Date & Time:
                    <span className='text-gray-700'>{selectedOrder?.dateTime}</span>
                </p>
                <p className='font-semibold mb-3'>Order Items -
                    <span className='text-gray-700'>{selectedOrder?.menus?.length || 0} Items</span>
                </p>
                <ul className='list-disc list-inside mb-5 text-gray-800'>
                    {selectedOrder?.menus?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <hr className="my-3" />
                <div className="flex justify-between text-lg sm:text-xl font-semibold mb-2">
                    <p>Total Amount</p>
                    <p>₹{selectedOrder?.totalAmount}</p>
                </div>
                <hr className="my-3" />
                <p className=" text-lg sm:text-xl text-gray-700 mb-2">
                    Time Taken to Serve: <span className="text-black">15 mins</span>
                </p>
                <p className=" text-lg sm:text-xl text-gray-700">
                    Your Feedback: <span className="text-black">{selectedOrder?.feedback}</span>
                </p>
            </div>
        </div >
    );
};

export default HistoryInfoDetail;
