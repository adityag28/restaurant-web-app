import React from 'react'
import MenuItem from '../../components/common/MenuItem'
import MenuCategory from '../../components/common/MenuCategory'
import MenuSearch from '../../components/common/MenuSearch'
import Button from '../../components/common/Button'
import useMenu from '../../hooks/useMenu'

const Menu = () => {
    const { menuItems, setSelectedCategory, searchTerm, setSearchTerm, handleAddMenuItem, handleProceedClick, filteredItems } = useMenu()
    
    return (
        <div className="flex flex-col bg-amber-50 min-h-screen p-4 sm:p-6 md:p-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Menu</h1>
            <MenuCategory
                menuItems={menuItems}
                setSelectedCategory={setSelectedCategory}
            />
            <MenuSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <MenuItem
                menuItems={filteredItems}
                handleAddMenuItem={handleAddMenuItem}
            />
            <div className="flex justify-center  mt-3">
                <Button text="Proceed" onClick={handleProceedClick} className="px-6 py-2 mt-6" />
            </div>
        </div>
    )
}

export default Menu
