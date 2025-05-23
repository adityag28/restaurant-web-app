import { db } from '../firebase';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useWaiterOrderBoard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
            const allOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const waiterOrders = allOrders.filter(order =>
                ['Order placed', 'Preparing', 'Ready'].includes(order.status)
            );

            setOrders(waiterOrders);
        });

        return () => unsubscribe();
    }, []);
    const handleOrderServed = async (orderId) => {
        const orderRef = doc(db, 'orders', orderId);
        await updateDoc(orderRef, { status: "Served" });
        setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    };

    return { orders, handleOrderServed }
}

export default useWaiterOrderBoard
