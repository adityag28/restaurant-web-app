import Button from '../common/Button';
import useBusinessInfo from '../../hooks/useBusinessInfo';

const BussinessInfoForm = () => {
    const { formData, handleChange, handleInfoClick } = useBusinessInfo()

    return (
        <div className="flex h-120 bg-amber-50 justify-start px-10 items-center">
            <form onSubmit={handleInfoClick} className="w-full max-w-md p-5 border-2 border-orange-400 rounded-md bg-white">
                <input
                    type="text"
                    name="name"
                    placeholder="Restaurant Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    cols={4}
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="text"
                    name="hours"
                    placeholder="Opening Hours (e.g. 10 AM - 11 PM)"
                    value={formData.hours}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="url"
                    name="link"
                    placeholder="Website or Social Media Link"
                    value={formData.link}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <Button text="UPDATE" className="w-full py-2 mt-4" onClick={handleInfoClick} />
            </form>
        </div>
    );
};

export default BussinessInfoForm;
