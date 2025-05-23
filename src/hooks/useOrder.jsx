import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import {
    collection,
    getDocs,
    doc,
    updateDoc,
    query,
    where,
    serverTimestamp,
    addDoc
} from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../store/orderSlice';

const useOrder = () => {
    const [user, setUser] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({ feedback: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const menuItems = useSelector((store) => store.menu);
    const customerPhone = useSelector((store) => store.customer.phoneNumber);
    const orderId = useSelector((state) => state.order.currentOrder?.orderId);
    console.log(orderId)
    const subTotal = menuItems.reduce((acc, menu) => acc + menu.price * menu.quantity, 0);
    const sgst = Math.round(subTotal * 0.09);
    const cgst = Math.round(subTotal * 0.09);
    const finalAmount = Math.round(subTotal + sgst + cgst);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        const fetchCustomer = async () => {
            if (!customerPhone) return;

            try {
                const q = query(
                    collection(db, 'customerUsers'),
                    where('phoneNumber', '==', customerPhone)
                );
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const docSnap = querySnapshot.docs[0];
                    const data = docSnap.data();
                    setUser({ id: docSnap.id, ...data });
                }
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };

        fetchCustomer();
    }, [customerPhone]);


    const handleOrderClick = async (e) => {
        e.preventDefault();
        setIsPopupOpen(false);

        if (!user || !user.phoneNumber) {
            console.log('User not logged in or phone number not available.');
            return;
        }

        try {
            const isoDateTime = new Date().toISOString();
            const tableNo = 3;
            const menuNames = menuItems.map(item => item.name);

            const orderDataToSave = {
                tableNo,
                dateTime: serverTimestamp(),
                menuNames,
                totalAmount: finalAmount,
                timeToServe: isoDateTime,
                status: 'Order placed',
                paymentMethod: '',
                feedback: formData.feedback,
                phoneNumber: user.phoneNumber,
            };

            const orderDataForRedux = {
                tableNo,
                dateTime: isoDateTime,
                menuNames,
                totalAmount: finalAmount,
                timeToServe: isoDateTime,
                status: 'Order placed',
                paymentMethod: '',
                feedback: formData.feedback,
                phoneNumber: user.phoneNumber,
            };

            const docRef = await addDoc(collection(db, 'orders'), orderDataToSave);

            dispatch(setOrder({ orderId: docRef.id, orderData: orderDataForRedux }));

            console.log('Order placed with ID:', docRef.id);
            navigate('/app/ordersuccess');
        } catch (error) {
            console.error('Error placing order:', error);
        }

        setFormData({ feedback: '' });
    };


    const handleUpdateOrder = async (e) => {
        e.preventDefault();
        if (!orderId) {
            console.log('No order ID available');
            return;
        }

        const orderRef = doc(db, 'orders', orderId);
        try {
            await updateDoc(orderRef, { feedback: formData.feedback });
            console.log('Feedback updated successfully');
            setIsPopupOpen(false);
            setFormData({ feedback: '' });
        } catch (error) {
            console.error('Error updating feedback:', error);
        }
    };



    const handleUpdateOrderPopup = ({ feedback = '' }) => {
        console.log('Opening popup for feedback. Order ID:', orderId);
        setFormData({ feedback });
        setIsPopupOpen(true);
    };


    return {
        handleOrderClick,
        menuItems,
        handleChange,
        isPopupOpen,
        setIsPopupOpen,
        formData,
        handleUpdateOrder,
        handleUpdateOrderPopup
    };
};

export default useOrder;
