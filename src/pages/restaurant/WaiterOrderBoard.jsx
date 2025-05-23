import Button from '../../components/common/Button';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useWaiterOrderBoard from '../../hooks/useWaiterOrderBoard';


const WaiterOrderBoard = () => {

    const { orders, handleOrderServed } = useWaiterOrderBoard()

    return (
        <div className='bg-amber-50 min-h-screen '>
            {orders.length === 0 ? (
                <div className='flex flex-col justify-center items-center my-50'>
                    <AiOutlineExclamationCircle className="text-red-500 border-4 m-auto border-none text-6xl sm:text-7xl mb-2 p-2" />
                    <p className="font-bold text-base sm:text-lg text-center mb-2">Waiter Order Board is Empty</p>
                    <p className="font-bold text-base sm:text-lg text-center mb-2">No Order !</p>
                </div>
            )
                :
                (
                    <div>{orders.map((order) => (
                        <div key={order.id} className=' p-4 sm:p-6'>
                            <h1 className="text-2xl font-bold mb-5">Waiter Order Board</h1>
                            <div className='bg-white shadow-md p-6 float-left rounded-md mx-auto max-w-3xl'>
                                <p className='font-semibold mb-1'>
                                    Order No:
                                    <span className='text-gray-700'>{order.id}</span>
                                    |
                                    Table No:
                                    <span className='text-gray-700'>{order.tableNo}</span>
                                </p>
                                <p className='font-semibold mb-1'>
                                    Date & Time:
                                    <span className='text-gray-700'>{order.dateTime.toDate().toLocaleString()}</span>
                                </p>
                                <p className='font-semibold mb-3'>
                                    Order Items - <span className='text-gray-700'>{order.menuNames?.length || 0}</span>
                                </p>
                                <ul className='list-disc list-inside mb-5 text-gray-800'>
                                    {Array.isArray(order.menuNames)
                                        ? order.menuNames.map((item, idx) => <li key={idx}>{item}</li>)
                                        : <li>Invalid menu data</li>}
                                </ul>

                                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                                    <span className="bg-yellow-100 text-yellow-800 text-md font-semibold me-2 p-2 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
                                        Status : {order.status}
                                    </span>
                                    <div className='flex gap-4'>
                                        <Button text='Order Served' className='p-2' onClick={() => handleOrderServed(order.id)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                )
            }
        </div>
    );
};

export default WaiterOrderBoard;
