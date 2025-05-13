import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useDispatch } from "react-redux";
import { setUserRole, setUserData } from "../../store/userSlice";



const RestaurantLoginForm = () => {
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

    return (
        <div className="flex items-center justify-center min-h-screen bg-amber-50 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className="font-bold text-2xl text-center mb-6 text-gray-800">
                    Restaurant Login
                </h1>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button
                        text="Login"
                        className="w-full p-3 mt-4 text-white bg-amber-400 hover:bg-amber-500 rounded-md"
                        onClick={handleLogin}
                    />
                </form>
            </div>
        </div>
    );
};

export default RestaurantLoginForm;
