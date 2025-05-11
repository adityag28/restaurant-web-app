import { useSelector } from 'react-redux'

const MenuInstructions = () => {

    const menuItems = useSelector((store) => store.menu)
    const subTotal = menuItems.reduce((acc, menu) => acc + menu.price * menu.quantity, 0)
    const sgst = Math.round(subTotal * 0.09)
    const cgst = Math.round(subTotal * 0.09)
    const grandTotal = Math.round(subTotal + sgst + cgst)

    return (
        <div className="flex flex-col gap-6 sm-mt-2 lg:mt-20 px-4 sm:px-6 lg:px-1 w-full max-w-3xl mx-auto">
            <textarea
                placeholder='Any Instructions'
                className='h-32 sm:h-36 border-2 border-gray-300 rounded-md   resize-none p-3 text-sm sm:text-base'
            />
            <hr className="border-t border-gray-300 mb-2" />

            <div className='flex  sm:flex-row justify-between text-sm sm:text-base font-medium mb-2'>
                <div className='space-y-2 sm:space-y-0 sm:w-1/2'>
                    <p>Total Amount</p>
                    <p>SGST - (9%)</p>
                    <p>CGST - (9%)</p>
                    <p className="font-semibold">Grand Total</p>
                </div>
                <div className='space-y-2 sm:space-y-0 sm:w-1/2 text-right'>
                    <p>₹{subTotal}</p>
                    <p>₹{sgst} </p>
                    <p>₹{cgst} </p>
                    <p className="font-semibold">₹{grandTotal}</p>
                </div>
            </div>
        </div>
    )
}

export default MenuInstructions
