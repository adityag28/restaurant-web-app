import AddItemCounter from './AddItemCounter'


const MenuItem = ({ menuItems }) => {

    return (
        <div>
            <div className="overflow-y-auto lg:max-h-[400px] max-h-[340px] pr-2">

                {
                    menuItems.map((menu, index) => (
                        <div key={`${menu.id}-${index}`}
                            className="flex flex-col gap-6 mt-6  w-full  ">
                            <div
                                className="flex  sm:flex-row items-center sm:items-start sm:justify-between border-2 border-orange-400 rounded-md p-4 gap-4 shadow-md"
                            >
                                <img
                                    src={menu.menuImageUrl}
                                    alt={menu.name}
                                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md"
                                />
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between  sm:text-left w-full">
                                    <div className="mt-3 sm:mt-0">
                                        <p className="text-lg sm:text-xl md:text-2xl font-semibold">{menu.name}</p>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 ">₹ {menu.price}</p>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 ">{menu.description}</p>
                                    </div>
                                    <div className="w-full sm:w-auto mt-4 sm:mt-0 flex lg:mt-12">
                                        <AddItemCounter menu={menu} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default MenuItem
