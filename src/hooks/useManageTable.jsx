import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useManageTable = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [tables, setTables] = useState([]);
    const [editingTableId, setEditingTableId] = useState(null);
    const [formData, setFormData] = useState({
        tableId: '',
        tableNumber: '',
        capacity: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddTableClick = async (e) => {
        setIsPopupOpen(false)
        e.preventDefault();
        try {
            if (editingTableId) {
                //  Update flow
                const tableRef = doc(db, "tables", editingTableId);
                const { tableId, tableNumber, capacity, location } = formData;
                await updateDoc(tableRef, { tableId, tableNumber, capacity, location });
                console.log("Menu updated successfully");
            } else {
                // Add flow
                const docRef = await addDoc(collection(db, 'tables'), formData);
                console.log('Document written with ID: ', docRef.id);
            }

            fetchTables();
            setFormData({ tableId: '', tableNumber: '', capacity: '', location: '' })
            setEditingTableId(null);

        } catch (error) {
            console.error('Error saving staff:', error.message);
        }
    };

    const fetchTables = async () => {
        const querySnapshot = await getDocs(collection(db, "tables"));
        const tableData = [];
        querySnapshot.forEach((doc) => {
            tableData.push({ id: doc.id, ...doc.data() });
        });

        setTables(tableData);

    };

    useEffect(() => {
        fetchTables();
    }, []);

    const handleDeleteTableClick = async (id) => {
        await deleteDoc(doc(db, "tables", id));
        fetchTables()
    }

    const handleUpdateTableClick = async (table) => {
        setFormData({
            tableId: table.tableId,
            tableNumber: table.tableNumber,
            capacity: table.capacity,
            location: table.location,
        })
        setEditingTableId(table.id);
        setIsPopupOpen(true);
    }
    return { isPopupOpen, setIsPopupOpen, formData, tables, handleChange, handleAddTableClick, handleUpdateTableClick, handleDeleteTableClick }
}

export default useManageTable
