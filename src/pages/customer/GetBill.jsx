import React from 'react';
import { RiBillLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { MdArrowBack } from 'react-icons/md';
import useOrder from '../../hooks/useOrder';
import { useDispatch, useSelector } from 'react-redux';
import { resetMenu } from '../../store/menuSlice';

const GetBill = () => {
    const dispatch = useDispatch()
    const {
        menuItems,
        handleChange,
        isPopupOpen,
        setIsPopupOpen,
        formData,
        handleUpdateOrder,
        handleUpdateOrderPopup
    } = useOrder();

    const orderId = useSelector((state) => state.order.orderId);

    const subTotal = menuItems.reduce((acc, menu) => acc + menu.price * menu.quantity, 0);
    const sgst = Math.round(subTotal * 0.09);
    const cgst = Math.round(subTotal * 0.09);
    const totalAmount = Math.round(subTotal + sgst + cgst);

    const handleResetMenu = () => {
        dispatch(resetMenu())
    }

    return (
        <div className='min-h-screen bg-amber-50 p-4 sm:p-6 md:p-10 gap-5'>
            <Link to="/app/dashboard">
                <div className='flex items-center gap-2'>
                    <button
                        className='flex items-center gap-2'
                        onClick={handleResetMenu}
                    >
                        <MdArrowBack className='text-2xl' />
                        <h1 className='text-xl sm:text-2xl font-bold'>Back To Dashboard</h1>
                    </button>
                </div>
            </Link>
            <div className="flex flex-col mt-8 items-center min-h-screen bg-amber-50">
                <RiBillLine className="text-green-400 border-4 border-green-400 rounded-full text-6xl sm:text-7xl mb-6 p-2" />
                <p className="font-bold text-base sm:text-lg text-center mb-2">Your Bill is ₹{totalAmount}</p>
                <p className="font-bold text-base sm:text-lg text-center mb-2">One of our staff will reach out to you soon with the bill.</p>
                <p className="font-bold text-base sm:text-lg text-center mb-2">We hope you enjoyed the food served by us and will be back soon!</p>
                <p className="font-bold text-base sm:text-lg text-center">Thank you!</p>
                <div className="flex justify-center mt-4">
                    <Button
                        text="Help us with your feedback!"
                        onClick={() => handleUpdateOrderPopup({ id: orderId })}
                        className="px-6 py-2"
                    />
                </div>
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <form className="space-y-4" onSubmit={handleUpdateOrder}>
                            <textarea
                                placeholder='Enter your feedback'
                                className="w-full p-2 border rounded resize-none"
                                cols={4}
                                rows={10}
                                name='feedback'
                                value={formData.feedback}
                                onChange={handleChange}
                            />
                            <div className="flex justify-end gap-2">
                                <Button
                                    text="Cancel"
                                    className="bg-gray-300 hover:bg-gray-400"
                                    onClick={() => handleUpdateOrderPopup({ feedback: '' }, setIsPopupOpen(false)
                                    )}
                                />
                                <Button
                                    type="submit"
                                    text="Save"
                                    className="bg-amber-400 hover:bg-amber-500"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetBill;
