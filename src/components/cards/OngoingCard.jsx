import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import { IoMdTime } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy, limit, updateDoc, doc, } from 'firebase/firestore';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';


const OngoingCard = () => {
    const [latestOrder, setLatestOrder] = useState([]);
    const navigate = useNavigate();
    const order = useSelector(store => store.order)




    useEffect(() => {
        const q = query(
            collection(db, 'orders'),
            orderBy('dateTime', 'desc'),
            limit(1)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            if (!snapshot.empty) {
                const doc = snapshot.docs[0];
                setLatestOrder({
                    id: doc.id,
                    status: doc.data().status,
                    tableNo: doc.data().tableNo,
                    menuNames: doc.data().menuNames
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
                        <p className="text-md mb-2">
                            <span className="font-semibold">Order No : </span>
                            {latestOrder.id}
                        </p>
                        <p className="text-md mb-2">
                            <span className="font-semibold">Table No : </span>
                            {latestOrder.tableNo}
                        </p>
                        <p className='text-md mb-2 bg-yellow-100 text-yellow-800  w-50 p-2 rounded-sm '>
                            <span className="font-semibold">Stauts : </span>
                            {latestOrder.status}
                        </p>
                        <ul className='list-disc list-inside mb-5 text-gray-800'>
                            {latestOrder?.menuNames?.map((item, index) => (
                                <li key={index}>{item}</li>
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
