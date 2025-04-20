import { useState } from "react"
import Button from "./Button"

const AddItemCounter = () => {
    const [itemCount, setItemCount] = useState(0)

    const handleItemIncrement = () => setItemCount(prev => prev + 1)
    const handleItemDecrement = () => setItemCount(prev => prev - 1)

    return (
        <div className="flex items-center gap-4">
            <Button
                text='+'
                onClick={handleItemIncrement}
                className='py-2 px-4 text-xl sm:text-2xl w-12 sm:w-16'
            />
            <p className='text-lg sm:text-xl'>
                Add Item : {itemCount}
            </p>
            <Button
                text='-'
                onClick={handleItemDecrement}
                className='py-2 px-4 text-xl sm:text-2xl w-12 sm:w-16'
            />
        </div>
    )
}

export default AddItemCounter
