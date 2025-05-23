import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useSelector } from 'react-redux';

const useCustomerOrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const customerPhone = useSelector((store) => store.customer.phoneNumber);

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

        fetchOrders();
    }, []);

    return { orders, customerPhone }
}

export default useCustomerOrderHistory
