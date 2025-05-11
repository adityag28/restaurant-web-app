import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import { IoMdTime } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy, limit, updateDoc, doc, } from 'firebase/firestore';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';


const OngoingCard = ({ menuItems }) => {
    const [latestOrder, setLatestOrder] = useState([]);
    const navigate = useNavigate();
    const order = useSelector(store => store.order)




    useEffect(() => {
        const q = query(
            collection(db, 'orders'),
            orderBy('dateTime', 'desc'), // Make sure 'dateTime' is saved correctly
            limit(1)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (!snapshot.empty) {
                const doc = snapshot.docs[0];
                setLatestOrder({
                    id: doc.id,
                    status: doc.data().status,
                    tableNo: doc.data().tableNo,
                });
            }
        });

        return () => unsubscribe();
    }, []);

    const handleBill = async () => {
        navigate("/app/getbill");
        try {
            await updateDoc(doc(db, "orders", latestOrder.id), {
                status: "Completed"
            });
        } catch (error) {
            console.error("Error updating status to Completed:", error);
        }
    };

    const handlePlaceOrder = () => {
        navigate("/app/menu");
    };

    return (
        <div>
            <div className='flex items-center gap-1 my-4'>
                <IoMdTime className='text-2xl text-orange-400 mt-0.5' />
                <p className='text-lg'>Ongoing Orders</p>
            </div>

            {order.currentOrder === null || latestOrder.status === "Completed" ? (
                <div className='flex flex-col items-center border-2 border-orange-400 rounded-md p-2'>
                    <p className='text-lg'>No ongoing orders.</p>
                    <Button className='p-2 my-3' text="Place order" onClick={handlePlaceOrder} />
                </div>
            ) : (
                <div className='grid gap-4'>
                    <div className='flex flex-col border-2 border-orange-400 rounded-md p-2'>
                        <p className='text-lg font-semibold'>Order Id: {latestOrder.id}</p>
                        <p className='text-lg'>Table No: {latestOrder.tableNo}</p>
                        <p className='text-lg'>Status: {latestOrder.status}</p>

                        <p className='text-lg mt-2'>Order Items -</p>
                        <ul className='list-disc mx-5 p-2'>
                            {menuItems.map((menu, index) => (
                                <li key={index}>{menu.name}</li>
                            ))}
                        </ul>

                        <div className='flex gap-5'>
                            {latestOrder.status === "Served" && <Button className='p-2 my-3' text="Get Bill" onClick={handleBill} />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OngoingCard;
