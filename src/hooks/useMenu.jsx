import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const useMenu = () => {
    const [menuItems, setMenuItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()




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


    const handleProceedClick = () => {
        navigate('/app/reviewmenu')
    }


    const filteredItems = menuItems.filter(item => {
        const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return { menuItems, setSelectedCategory, searchTerm, setSearchTerm, handleProceedClick, filteredItems }
}

export default useMenu
