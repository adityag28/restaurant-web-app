import React from 'react';
import MenuInstructions from '../../components/common/MenuInstructions';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import AddedMenuItem from '../../components/common/AddedMenuItem';
import useOrder from '../../hooks/useOrder';

const CustomerReviewMenu = ({ isOpen }) => {
    const { handleOrderClick, menuItems } = useOrder();

    if (!menuItems || menuItems.length === 0) {
        return (
            <div className="min-h-screen bg-amber-50 p-4 sm:p-6 md:p-10 flex gap-5">
                <div className="flex flex-col w-full">
                    <Link to="/app/menu" className="mb-6">
                        <div className="flex items-center gap-2">
                            <MdArrowBack className="text-2xl" />
                            <h1 className="text-xl sm:text-2xl font-bold">Confirm / Review Menu</h1>
                        </div>
                    </Link>
                    <p>No items in the menu. Please add items to proceed.</p>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-amber-50 p-4 sm:p-6 md:p-10 flex gap-5 flex-col lg:flex-row'>
            <div className='flex flex-col w-full lg:w-2/3'>
                <Link to="/app/menu" className="mb-6">
                    <div className='flex items-center gap-2'>
                        <MdArrowBack className='text-2xl' />
                        <h1 className='text-xl sm:text-2xl font-bold'>Confirm / Review Menu</h1>
                    </div>
                </Link>
                <div className="flex flex-col gap-4 mb-6">
                    <AddedMenuItem menuItems={menuItems} isReviewMenu={true} />
                </div>
            </div>

            <div className='flex flex-col w-full lg:w-1/3'>
                <MenuInstructions />
                <div className={`mt-4 w-full ${isOpen ? "sm:ml-28 md:ml-36" : ""}`}>
                    <Button
                        text='Place your order'
                        onClick={handleOrderClick}
                        className='w-full sm:w-auto px-6 py-2'
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewMenu;
