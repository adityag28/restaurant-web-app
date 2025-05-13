import React, { useEffect, useState } from 'react';
import OrderHistoryCard from '../../components/cards/OrderHistoryCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const OrderHistory = () => {
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
