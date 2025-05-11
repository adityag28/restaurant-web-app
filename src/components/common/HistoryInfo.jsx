import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { useSelector } from 'react-redux';

const HistoryInfo = () => {
    const [orders, setOrders] = useState([]);
    const customerPhone = useSelector((store) => store.customer.phoneNumber);

    useEffect(() => {
        const fetchOrders = async () => {
            const q = query(collection(db, "orders"), where("phoneNumber", "==", customerPhone));
            const querySnapshot = await getDocs(q);
            const orderData = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                orderData.push({ id: doc.id, ...data });
            });
            setOrders(orderData);
        };

        if (customerPhone) {
            fetchOrders();
        }
    }, [customerPhone]);

    return (
        <div className="space-y-4">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="p-4 sm:p-6 border-2 border-orange-400 bg-white rounded-md shadow-md w-full max-w-3xl mx-auto"
                >
                    <p className="font-semibold text-lg sm:text-xl mb-1">
                        Order No: {order.id} | Table No: {order.tableNo}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 mb-4">
                        Date & Time: {order.dateTime?.toDate().toLocaleString()}
                    </p>
                    <div className="mb-4">
                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                            {Array.isArray(order.menuNames)
                                ? order.menuNames.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))
                                : <li>Invalid menu data</li>}
                        </ul>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg sm:text-xl font-semibold">
                        <p>Total Amount</p>
                        <p>₹{order.totalAmount}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HistoryInfo;
