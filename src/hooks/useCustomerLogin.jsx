import { useState } from 'react';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { setPhoneNumber } from '../store/customerSlice'; 

const useCustomerLogin = () => {
    const [step, setStep] = useState(0);
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [isFirstTime, setIsFirstTime] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        phoneNumber: '',
        firstName: '',
        lastName: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhoneNumberSubmit = async (e) => {
        e.preventDefault();
        const mobile = formData.phoneNumber;
        if (!mobile) return alert("Please enter a phone number.");

        try {
            const docRef = doc(collection(db, 'customerUsers'), mobile);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setIsFirstTime(false);
                setFormData((prev) => ({
                    ...prev,
                    ...docSnap.data(),
                }));
            } else {
                setIsFirstTime(true);
            }

            setOtp(['1', '2', '3', '4', '5', '6']);
            setStep(1);
        } catch (error) {
            console.error('Error checking customer:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');

        if (enteredOtp === '123456') {
            dispatch(setPhoneNumber(formData.phoneNumber)); 

            if (isFirstTime) {
                setStep(2);
            } else {
                setIsLoggedIn(true);
            }
        } else {
            alert('Invalid OTP');
        }
    };

    const handleUserNameSubmit = async (e) => {
        e.preventDefault();
        const mobile = formData.phoneNumber;
        const { firstName, lastName } = formData;

        if (!firstName || !lastName) {
            return alert('Please enter your full name.');
        }

        try {
            await setDoc(doc(collection(db, 'customerUsers'), mobile), {
                firstName,
                lastName,
                phoneNumber: mobile,
            });

            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error saving customer:', error);
            alert('Failed to save your details.');
        }
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
        setStep(0);
        setFormData({
            phoneNumber: '',
            firstName: '',
            lastName: '',
        });
        setOtp(new Array(6).fill(''));
        setIsFirstTime(false);
    };

    return {
        step,
        setStep,
        formData,
        handleChange,
        otp,
        setOtp,
        isFirstTime,
        isLoggedIn,
        handleOtpSubmit,
        handleUserNameSubmit,
        handlePhoneNumberSubmit,
        handleSignOut,
    };
};

export default useCustomerLogin;
