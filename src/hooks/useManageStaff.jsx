import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';

const useManageStaff = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [restaurantStaff, setRestaurantStaff] = useState([]);
    const [editingStaffId, setEditingStaffId] = useState(null);
    const [formData, setFormData] = useState({
        staffId: '',
        name: '',
        phoneNumber: '',
        role: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddStaffClick = async (e) => {
        e.preventDefault();
        setIsPopupOpen(false);

        try {
            if (editingStaffId) {
                // Update flow
                const staffRef = doc(db, "restaurantUsers", editingStaffId);
                const { name, phoneNumber, role, email } = formData;
                await updateDoc(staffRef, { name, phoneNumber, role, email });
                console.log("Staff updated successfully");
            } else {
                // Add flow
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                const uid = userCredential.user.uid;

                await addDoc(collection(db, 'restaurantUsers'), {
                    ...formData,
                    uid,
                });

                console.log("Staff added successfully");
            }

            fetchStaff();
            setFormData({ staffId: '', name: '', phoneNumber: '', role: '', email: '', password: '' });
            setEditingStaffId(null);

        } catch (error) {
            console.error('Error saving staff:', error.message);
        }
    };

    const handleUpdateStaffClick = (staff) => {
        setFormData({
            staffId: staff.staffId || '',
            name: staff.name || '',
            phoneNumber: staff.phoneNumber || '',
            role: staff.role || '',
            email: staff.email || '',
            password: '',
        });
        setEditingStaffId(staff.id);
        setIsPopupOpen(true);
    };

    const handleDeleteStaffClick = async (id) => {
        await deleteDoc(doc(db, "restaurantUsers", id));
        fetchStaff();
    };

    const fetchStaff = async () => {
        const querySnapshot = await getDocs(collection(db, "restaurantUsers"));
        const staffData = [];
        querySnapshot.forEach((doc) => {
            staffData.push({ id: doc.id, ...doc.data() });
        });
        setRestaurantStaff(staffData);
    };

    useEffect(() => {
        fetchStaff();
    }, []);

    return {
        isPopupOpen,
        setIsPopupOpen,
        formData,
        restaurantStaff,
        handleChange,
        handleAddStaffClick,
        handleUpdateStaffClick,
        handleDeleteStaffClick,
        editingStaffId,
    };
};

export default useManageStaff;
