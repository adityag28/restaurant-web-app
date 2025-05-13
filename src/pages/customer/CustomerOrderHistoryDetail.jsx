import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import HistoryInfo from '../../components/common/HistoryInfo';
import HistoryInfoDetail from '../../components/common/HistoryInfoDetail';

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
            <HistoryInfoDetail />
        </div>
    );
};

export default CustomerOrderHistoryDetail;
