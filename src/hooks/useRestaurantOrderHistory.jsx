import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import React, { useEffect, useState } from 'react';

const useRestaurantOrderHistory = () => {
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


    return { orders }
}

export default useRestaurantOrderHistory
