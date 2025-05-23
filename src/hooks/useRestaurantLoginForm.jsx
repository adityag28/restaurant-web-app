import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useDispatch } from "react-redux";
import { setUserRole, setUserData } from "../store/userSlice";

const useRestaurantLoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            const snapshot = await getDocs(collection(db, 'restaurantUsers'));
            const matchedUser = snapshot.docs.find(doc => doc.data().uid === uid);

            if (matchedUser) {
                const userDoc = matchedUser.data();
                const role = userDoc.role;

                // ✅ Dispatch to Redux store
                dispatch(setUserRole(matchedUser.data().role));   // ✅ Set role like "admin"
                dispatch(setUserData(matchedUser.data()));

                console.log('Logged in as:', role);

                if (role === 'waiter') {
                    navigate('/restaurant/waiter');
                } else if (role === 'kitchen') {
                    navigate('/restaurant/kitchen');
                } else {
                    navigate('/restaurant'); // admin or others
                }
            }
            else {
                dispatch(setUserRole("admin"));
                dispatch(setUserData({ uid }));
                console.log('Logged in as: admin');
                navigate('/restaurant');
            }

        } catch (err) {
            setError(err.message);
        }
    };
    return { email, setEmail, password, setPassword, error, setError, handleLogin }
}

export default useRestaurantLoginForm
