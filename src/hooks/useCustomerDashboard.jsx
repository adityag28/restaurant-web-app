import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";

const useCustomerDashboard = () => {
    const [user, setUser] = useState(null);
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

    return { user, setUser, }
}

export default useCustomerDashboard
