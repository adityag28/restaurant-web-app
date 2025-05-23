import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const useKitchenOrderBoard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
            const allOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const preparingOrders = allOrders.filter(order =>
                order.status === "Order placed" || order.status === "Preparing"
            );
            setOrders(preparingOrders);
        });

        return () => unsubscribe();
    }, []);

    const handleOrderReady = async (orderId) => {
        const orderRef = doc(db, 'orders', orderId);
        await updateDoc(orderRef, { status: "Ready" });

        setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    };

    return { orders, handleOrderReady }
}

export default useKitchenOrderBoard
