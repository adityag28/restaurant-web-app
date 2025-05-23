import { useDispatch, useSelector } from "react-redux";
import { addMenu, removeMenu } from "../../store/menuSlice";
import Button from "./Button";

const AddItemCounter = ({ menu }) => {
    const dispatch = useDispatch();

    const quantity = useSelector((state) => {
        const item = state.menu.find((i) => i.id === menu.id);
        return item?.quantity || 0;
    });

    const handleAddMenuItem = () => {
        dispatch(addMenu(menu));
    };

    const handleIncreaseMenuItems = () => {
        dispatch(addMenu(menu));
    };

    const handleDecreaseMenuItems = () => {
        dispatch(removeMenu(menu));
    };

    return (
        <div className="flex items-center gap-4">
            {quantity === 0 ? (
                <Button
                    text="Add"
                    className="px-4 py-2 rounded"
                    onClick={handleAddMenuItem}
                />
            ) : (
                <div className="flex items-center space-x-2">
                    <Button
                        text="-"
                        className="px-2 py-1 rounded"
                        onClick={handleDecreaseMenuItems}
                    />
                    <span>{quantity}</span>
                    <Button
                        text="+"
                        className="px-2 py-1 rounded"
                        onClick={handleIncreaseMenuItems}
                    />
                </div>
            )}
        </div>
    );
};

export default AddItemCounter;
