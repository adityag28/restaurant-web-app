import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';


const useRestaurantAdminDashboard = () => {
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

    return { orders, ongoingTotalAmount, ongoingCount, completedTotalAmount, completedCount }
}

export default useRestaurantAdminDashboard
