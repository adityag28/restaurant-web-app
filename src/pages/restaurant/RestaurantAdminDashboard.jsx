import OrderStatusCard from '../../components/cards/OrderStatusCard';
import useRestaurantAdminDashboard from '../../hooks/useRestaurantAdminDashboard';

const RestaurantAdminDashboard = () => {

    const { orders, ongoingTotalAmount, ongoingCount, completedTotalAmount, completedCount } = useRestaurantAdminDashboard()

    return (
        <div className="flex flex-col p-5 bg-amber-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-5">Order Board</h1>
            <div className="flex flex-col lg:flex-row gap-6 w-full">

                <div className="flex flex-col border p-5 rounded-md w-full lg:w-1/2 bg-white shadow">
                    <div className="flex  sm:flex-row justify-between items-center mb-5">
                        <p className="font-semibold text-lg">Ongoing Orders</p>
                        <p className="font-semibold text-lg"> {ongoingCount} | INR {ongoingTotalAmount}</p>
                    </div>
                    <div className="overflow-y-auto lg:max-h-[240px] max-h-[340px] pr-2">

                        {orders
                            .filter(order => order.status === 'Order placed' || order.status === 'Preparing' || order.status === 'Ready')
                            .map(order => (
                                <OrderStatusCard
                                    key={order.id}
                                    tableNo={order.tableNo}
                                    status={order.status}
                                    orderId={order.id}
                                    dateTime={order.dateTime}
                                    menus={order.menuNames}
                                    totalAmount={order.totalAmount}
                                />
                            ))}
                    </div>
                </div>

                <div className="flex flex-col border p-5 rounded-md w-full lg:w-1/2 bg-white shadow">
                    <div className="flex  sm:flex-row justify-between items-center mb-5">
                        <p className="font-semibold text-base lg:text-lg">Completed Orders</p>
                        <p className="font-semibold text-base lg:text-lg">{completedCount} | INR {completedTotalAmount}</p>
                    </div>
                    <div className="overflow-y-auto lg:max-h-[240px] max-h-[340px] pr-2">
                        {orders
                            .filter(order => order.status === 'Completed')
                            .map(order => (
                                <OrderStatusCard
                                    key={order.id}
                                    tableNo={order.tableNo}
                                    status={order.status}
                                    orderId={order.id}
                                    dateTime={order.dateTime}
                                    menus={order.menuNames}
                                    totalAmount={order.totalAmount}
                                    timeToServe={order.timeToServe}
                                />
                            ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RestaurantAdminDashboard;
