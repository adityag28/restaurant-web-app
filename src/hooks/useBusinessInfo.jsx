import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useBusinessInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contact: '',
        hours: '',
        link: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleInfoClick = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'restaurantInfo'), formData);
        console.log('Document written with ID: ', docRef.id);
    };
    return { formData, handleChange, handleInfoClick }
}

export default useBusinessInfo
