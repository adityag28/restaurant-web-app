import React from 'react'

const Button = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer rounded text-white font-semibold bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 ${className} py-2 px-4 text-base sm:text-lg`}
        >
            {text}
        </button>
    )
}

export default Button
