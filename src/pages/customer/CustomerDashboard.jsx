import useMenu from "../../hooks/useMenu";
import OngoingCard from "../../components/cards/OngoingCard";
import OfferCard from "../../components/cards/OfferCard";
import useCustomerDashboard from "../../hooks/useCustomerDashboard";

const CustomerDashboard = () => {
    const { user } = useCustomerDashboard()
    const { menuItems } = useMenu();


    if (!user) return <div>Loading...</div>;

    return (
        <div className="flex flex-col bg-amber-50 min-h-screen p-4 sm:p-6 md:p-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Welcome, {user.firstName} {user.lastName}
            </h1>
            <div className="flex flex-col gap-4">
                <OngoingCard menuItems={menuItems} />
                <OfferCard />
            </div>
        </div>
    );
};

export default CustomerDashboard;
