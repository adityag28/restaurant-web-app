import React from 'react'

const MenuCategory = () => {
    return (
        <div className="flex flex-wrap gap-2 sm:gap-4 border-2 border-orange-400 rounded-md mt-6 mb-4 p-2">
            {['category 1', 'category 2', 'category 3', 'category 4', 'category 5'].map((category, index) => (
                <p
                    key={index}
                    className="px-3 py-1 bg-orange-400 text-white text-sm sm:text-base rounded-md cursor-pointer hover:bg-orange-100 transition"
                >
                    {category}
                </p>
            ))}
        </div>
    )
}

export default MenuCategory
