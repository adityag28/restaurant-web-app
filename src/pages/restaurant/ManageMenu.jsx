import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import useManageMenu from '../../hooks/useManageMenu'
const ManageMenu = () => {

    const { isPopupOpen, setIsPopupOpen, menuItems, formData, handleChange, handleAddMenuClick, handleUpdateMenuClick, handleDeleteMenuClick } = useManageMenu()

    return (
        <div className='p-5 h-screen bg-amber-50'>
            <div className='flex justify-between items-center mb-4'>
                <Link to="/restaurant/setup">
                    <div className='flex items-center gap-2'>
                        <MdArrowBack className='text-2xl mt-1' />
                        <h1 className=' sm:text-lg md:text-2xl  lg:3xl font-bold'>
                            Update  Menu
                        </h1>
                    </div>
                </Link>
                <Button text='Add Menu+' className="py-1 px-3" onClick={() => setIsPopupOpen(true)} />
            </div>
            <div className="overflow-y-auto lg:max-h-[400px] max-h-[340px] pr-2">

                <table className='w-full text-center border-collapse'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2'>Menu ID</th>
                            <th className='border px-4 py-2'>Category</th>
                            <th className='border px-4 py-2'>Name</th>
                            <th className='border px-4 py-2'>Image Url</th>
                            <th className='border px-4 py-2'>Price</th>
                            <th className='border px-4 py-2'>Description</th>
                            <th className='border px-4 py-2'>Discounted Price</th>
                            <th className='border px-4 py-2'>Type</th>
                            <th className='border px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuItems.map((menu) => (
                            <tr key={menu.id} className='h-10'>
                                <td className='border px-4 py-2'>{menu.menuId}</td>
                                <td className='border px-4 py-2'>{menu.category}</td>
                                <td className='border px-4 py-2'>{menu.name}</td>
                                <td className='border px-4 py-2'>
                                    <img src={menu.menuImageUrl} alt='menu-image' className='w-30 h-30' />
                                </td>
                                <td className='border px-4 py-2'>{menu.price}</td>
                                <td className='border px-4 py-2'>{menu.description}</td>
                                <td className='border px-4 py-2'>{menu.discountedPrice}</td>
                                <td className='border px-4 py-2'>{menu.type}</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <Button text='✎' className="py-1 px-3" onClick={() => handleUpdateMenuClick(menu)} />
                                        <Button text='✕' className="py-1 px-3" onClick={() => handleDeleteMenuClick(menu.id)} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                isPopupOpen && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md ">
                            <h2 className="text-xl font-bold mb-2">Add Menu</h2>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Menu Id"
                                    className="w-full p-2 border rounded"
                                    name='menuId'
                                    value={formData.menuId}
                                    onChange={handleChange}
                                />
                                <select
                                    className="w-full p-2 border rounded text-gray-500"
                                    name='category'
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option>Selecet Category</option>
                                    <option>Soup</option>
                                    <option>Starters</option>
                                    <option>Snacks & Chaat</option>
                                    <option>Main Course</option>
                                    <option>Breads</option>
                                    <option>South Indian</option>
                                    <option>Rice</option>
                                    <option>Chinese</option>
                                    <option>Desert</option>
                                    <option>Beverages</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-2 border rounded"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="ImageUrl"
                                    className="w-full p-2 border rounded"
                                    name='menuImageUrl'
                                    value={formData.menuImageUrl}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Price"
                                    className="w-full p-2 border rounded"
                                    name='price'
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Description"
                                    className="w-full p-2 border rounded"
                                    name='description'
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Discounted Price"
                                    className="w-full p-2 border rounded"
                                    name='discountedPrice'
                                    value={formData.discountedPrice}
                                    onChange={handleChange}
                                />
                                <select
                                    className="w-full p-2 border rounded text-gray-500"
                                    name='type'
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option>Selecet Type</option>
                                    <option>Veg</option>
                                    <option>Non - Veg</option>
                                </select>

                                <div className="flex justify-end gap-2">
                                    <Button
                                        text="Cancel"
                                        className="bg-gray-300 hover:bg-gray-400"
                                        onClick={() => setIsPopupOpen(false)}
                                    />
                                    <Button
                                        text="Save"
                                        className="bg-amber-400 hover:bg-amber-500"
                                        onClick={handleAddMenuClick}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default ManageMenu
