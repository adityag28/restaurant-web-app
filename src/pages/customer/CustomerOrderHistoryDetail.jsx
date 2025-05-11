import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import HistoryInfo from '../../components/common/HistoryInfo';

const CustomerOrderHistoryDetail = () => {
    return (
        <div className="flex flex-col p-5 bg-amber-50 min-h-screen">
            <Link to="/app/orderhistory">
                <div className="flex items-center gap-2 mb-6">
                    <MdArrowBack className="text-2xl sm:text-3xl text-orange-500" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Detailed Order History
                    </h1>
                </div>
            </Link>

            <HistoryInfo />

            <div className="max-w-3xl mx-auto mt-6 bg-white rounded-md shadow-md p-4 sm:p-6 border border-orange-300">
                <p className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                    Time Taken to Serve: <span className="text-black">15 mins</span>
                </p>
                <p className="font-semibold text-lg sm:text-xl text-gray-700">
                    Your Feedback: <span className="text-black">Overall it was good</span>
                </p>
            </div>
        </div>
    );
};

export default CustomerOrderHistoryDetail;
