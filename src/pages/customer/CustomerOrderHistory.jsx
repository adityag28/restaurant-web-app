import HistoryInfo from '../../components/common/HistoryInfo';
import useCustomerOrderHistory from '../../hooks/useCustomerOrderHistory';


const CustomerOrderHistory = () => {
    const { orders, customerPhone } = useCustomerOrderHistory()

    return (
        <div className="min-h-screen bg-amber-50 p-4 sm:p-6 md:p-10">
            <h1 className='text-xl sm:text-2xl font-bold mb-4'>Order History</h1>

            <div className='flex flex-col gap-4 mb-6'>
                {orders
                    .filter(order => order.status === 'Completed' && order.phoneNumber === customerPhone)
                    .map(order => (
                        <HistoryInfo
                            key={order.id}
                            tableNo={order.tableNo}
                            status={order.status}
                            orderId={order.id}
                            dateTime={order.dateTime}
                            menus={order.menuNames}
                            totalAmount={order.totalAmount}
                            feedback={order.feedback}
                        />
                    ))}
            </div>
        </div>
    );
};

export default CustomerOrderHistory;
