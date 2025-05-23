import OrderHistoryCard from '../../components/cards/OrderHistoryCard';
import useRestaurantOrderHistory from '../../hooks/useRestaurantOrderHistory';

const OrderHistory = () => {
    const { orders } = useRestaurantOrderHistory()
    return (
        <div className="flex flex-col p-5 bg-amber-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-5">Order History</h1>

            <div className=" flex flex-wrap gap-2 ">
                {orders
                    .filter(order => order.status === 'Completed')
                    .map(order => (
                        <OrderHistoryCard
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
    )
}

export default OrderHistory
