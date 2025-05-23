import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setQrTableNumber } from '../store/qrSlice'; // ✅ Ensure this is the correct path

const useManageTable = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [tables, setTables] = useState([]);
    const [editingTableId, setEditingTableId] = useState(null);
    const [qrTableNumber, setQrTableNumberState] = useState(null);
    const [formData, setFormData] = useState({
        tableId: '',
        tableNumber: '',
        capacity: '',
        location: '',
    });

    const dispatch = useDispatch();
    const store = useSelector((store) => store.qr.tableNumber);
    console.log(store)

    // ✅ Input handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ✅ Add or update table
    const handleAddTableClick = async (e) => {
        e.preventDefault();
        setIsPopupOpen(false);

        try {
            const data = {
                tableId: formData.tableId,
                tableNumber: formData.tableNumber,
                capacity: Number(formData.capacity), // 🔁 ensure number
                location: formData.location,
            };

            if (editingTableId) {
                const tableRef = doc(db, 'tables', editingTableId);
                await updateDoc(tableRef, data);
                console.log('Table updated successfully');
            } else {
                const docRef = await addDoc(collection(db, 'tables'), data);
                console.log('Table added with ID:', docRef.id);
            }

            await fetchTables();
            setFormData({ tableId: '', tableNumber: '', capacity: '', location: '' });
            setEditingTableId(null);
        } catch (error) {
            console.error('Error saving table:', error.message);
        }
    };

    // ✅ Select a table for QR
    const handleQrClick = (number) => {
        setQrTableNumberState(number);
        dispatch(setQrTableNumber(number));
    };

    // ✅ Fetch tables
    const fetchTables = async () => {
        const querySnapshot = await getDocs(collection(db, 'tables'));
        const tableData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setTables(tableData);
    };

    useEffect(() => {
        fetchTables();
    }, []);

    // ✅ Delete table
    const handleDeleteTableClick = async (id) => {
        await deleteDoc(doc(db, 'tables', id));
        fetchTables();
    };

    // ✅ Edit table
    const handleUpdateTableClick = (table) => {
        setFormData({
            tableId: table.tableId,
            tableNumber: table.tableNumber,
            capacity: table.capacity,
            location: table.location,
        });
        setEditingTableId(table.id);
        setIsPopupOpen(true);
    };

    return {
        isPopupOpen,
        setIsPopupOpen,
        formData,
        tables,
        handleChange,
        handleAddTableClick,
        handleUpdateTableClick,
        handleDeleteTableClick,
        handleQrClick,
        qrTableNumber,
    };
};

export default useManageTable;
