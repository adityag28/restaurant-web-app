import { IoSearch } from "react-icons/io5";

const MenuSearch = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex items-center gap-2 p-2 border-2 border-orange-400 rounded-md bg-white shadow-sm w-full mt-4">
            <IoSearch className="w-5 h-5 text-gray-500" />
            <input
                type="text"
                placeholder="Search For Menu"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-sm sm:text-base border-none focus:ring-0 "
            />
        </div>
    )
}

export default MenuSearch
