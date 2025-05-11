import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useManageMenu = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [menuItems, setMenuItems] = useState([])
    const [editingMenuId, setEditingMenuId] = useState(null);
    const [formData, setFormData] = useState({
        menuId: '',
        category: '',
        name: '',
        menuImageUrl: '',
        price: '',
        description: '',
        discountedPrice: '',
        type: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddMenuClick = async (e) => {
        setIsPopupOpen(false)
        e.preventDefault();
        try {
            if (editingMenuId) {
                // Update flow
                const menuRef = doc(db, "menus", editingMenuId);
                const { menuId, category, name, menuImageUrl, price, description, discountedPrice, type } = formData;
                await updateDoc(menuRef, { menuId, category, name, menuImageUrl, price, description, discountedPrice, type });
                console.log("Menu updated successfully");
            } else {
                // Add flow
                const docRef = await addDoc(collection(db, 'menus'), formData);
                console.log('Document written with ID: ', docRef.id);
            }

            fetchMenu();
            setFormData({ menuId: '', category: '', name: '', menuImageUrl: '', price: '', description: '', discountedPrice: '', type: '' })
            setEditingMenuId(null);

        } catch (error) {
            console.error('Error saving staff:', error.message);
        }


    };

    const fetchMenu = async () => {
        const querySnapshot = await getDocs(collection(db, "menus"));
        const menuData = [];
        querySnapshot.forEach((doc) => {
            menuData.push({ id: doc.id, ...doc.data() });
        });
        setMenuItems(menuData);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    const handleDeleteMenuClick = async (id) => {
        await deleteDoc(doc(db, "menus", id));
        fetchMenu()
    }

    const handleUpdateMenuClick = async (menu) => {
        setFormData({
            menuId: menu.menuId,
            category: menu.category,
            name: menu.name,
            menuImageUrl: menu.menuImageUrl,
            price: menu.price,
            description: menu.description,
            discountedPrice: menu.discountedPrice,
            type: menu.type
        })
        setEditingMenuId(menu.id);
        setIsPopupOpen(true);
        fetchMenu()
    }
    return { isPopupOpen, setIsPopupOpen, menuItems, formData, handleChange, handleAddMenuClick, handleUpdateMenuClick, handleDeleteMenuClick }
}

export default useManageMenu
