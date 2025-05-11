import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import OngoingCard from "../../components/cards/OngoingCard";
import OfferCard from "../../components/cards/OfferCard";
import { useSelector } from "react-redux";

const CustomerDashboard = () => {
    const [user, setUser] = useState(null);
    const { menuItems } = useMenu();
    const phoneNumber = useSelector((store) => store.customer.phoneNumber);

    useEffect(() => {
        const fetchCustomer = async () => {
            if (!phoneNumber) return;

            const q = query(collection(db, "customerUsers"), where("phoneNumber", "==", phoneNumber));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const docSnap = querySnapshot.docs[0];
                const data = docSnap.data();
                setUser({ id: docSnap.id, firstName: data.firstName, lastName: data.lastName });
            }
        };

        fetchCustomer();
    }, [phoneNumber]);

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
