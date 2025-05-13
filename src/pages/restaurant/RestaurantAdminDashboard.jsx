import React, { useEffect, useState } from 'react';
import OrderStatusCard from '../../components/cards/OrderStatusCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const RestaurantAdminDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'orders'));
                const orderList = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id, 
                }));
                setOrders(orderList);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders(); // ✅ Call the function here
    }, []);



    const ongoingOrders = orders.filter(order => ['Order placed', 'Preparing', 'Ready'].includes(order.status))

    const ongoingTotalAmount = ongoingOrders.reduce((acc, order) => acc + (order.totalAmount || 0), 0);

    const ongoingCount = ongoingOrders.length


    const completedOrders = orders.filter(order => order.status === 'Completed');

    const completedTotalAmount = completedOrders.reduce((sum, order) => {
        return sum + (order.totalAmount || 0);
    }, 0);


    const completedCount = completedOrders.length;



    return (
        <div className="flex flex-col p-5 bg-amber-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-5">Order Board</h1>
            <div className="flex flex-col lg:flex-row gap-6 w-full">

                <div className="flex flex-col border p-5 rounded-md w-full lg:w-1/2 bg-white shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                        <p className="font-semibold text-lg">Ongoing Orders</p>
                        <p className="font-semibold text-lg"> {ongoingCount} | INR {ongoingTotalAmount}</p>
                    </div>

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

                <div className="flex flex-col border p-5 rounded-md w-full lg:w-1/2 bg-white shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
                        <p className="font-semibold text-lg">Completed Orders</p>
                        <p className="font-semibold text-lg">{completedCount} | INR {completedTotalAmount}</p>
                    </div>
                    <div className="overflow-y-auto max-h-[500px] pr-2">
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
