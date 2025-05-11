import React from 'react';

const MenuCategory = ({ menuItems, setSelectedCategory }) => {

    const categories = [...new Set(menuItems.map(menu => menu.category))]
    const singleCategory = ['All', ...categories]

    return (
        <div className="flex flex-wrap gap-2 sm:gap-4 border-2 border-orange-400 rounded-md mt-6 mb-4 p-2">
            {singleCategory.map((category) => (
                <p
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="px-3 py-1 bg-orange-400 text-white text-sm sm:text-base rounded-md cursor-pointer hover:bg-orange-100 transition"
                >
                    {category}
                </p>
            ))}
        </div>
    )
}

export default MenuCategory
