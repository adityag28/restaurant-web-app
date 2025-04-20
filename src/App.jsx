import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CustomerLoginForm from './pages/customer/CustomerLoginForm';
import RestaurantLoginForm from './pages/restaurant/RestaurantLoginForm';
import CustomerMainLayout from './components/layouts/CustomerMainLayout';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import Menu from './pages/customer/Menu';
import CustomerOrderHistory from './pages/customer/CustomerOrderHistory';
import GetBill from './pages/customer/GetBill';
import CustomerReviewMenu from './pages/customer/CustomerReviewMenu';
import CustomerOrderedPlacedSuccess from './pages/customer/CustomerOrderedPlacedSuccess';
import CustomerDetailOrderHistory from './pages/customer/CustomerDetailOrderHistory';
import RestaurantMainLayout from './components/layouts/RestaurantMainLayout';
import RestaurantAdminDashboard from './pages/restaurant/RestaurantAdminDashboard';
import RestaurantSetup from './pages/restaurant/RestaurantSetup';
import RestaurantOrderBoardDetail from './pages/restaurant/RestaurantOrderBoardDetail'
import BussinessInfo from './pages/restaurant/BussinessInfo';
import ManageTable from './pages/restaurant/ManageTable';
import ManageMenu from './pages/restaurant/ManageMenu';
import ManageStaff from './pages/restaurant/ManageStaff';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLoginForm />} />
        <Route path="/restaurant-login" element={<RestaurantLoginForm />} />

        {/* Customer  Layout after login */}
        <Route path="/app" element={<CustomerMainLayout />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="menu" element={<Menu />} />
          <Route path="orderhistory" element={<CustomerOrderHistory />} />
          <Route path="getbill" element={<GetBill />} />
          <Route path="reviewmenu" element={<CustomerReviewMenu />} />
          <Route path="ordersuccess" element={<CustomerOrderedPlacedSuccess />} />
          <Route path="orderhistorydetail" element={<CustomerDetailOrderHistory />} />
        </Route>

        {/* Restaurant  Layout after login */}
        <Route path="/restaurant" element={<RestaurantMainLayout />} >
          <Route index element={<RestaurantAdminDashboard />} />
          <Route path="orderboard" element={<RestaurantAdminDashboard />} />
          <Route path="setup" element={<RestaurantSetup />} />
          <Route path="orderboarddetail" element={<RestaurantOrderBoardDetail />} />
          <Route path="businessform" element={<BussinessInfo />} />
          <Route path="managetable" element={<ManageTable />} />
          <Route path="managemenu" element={<ManageMenu />} />
          <Route path="managestaff" element={<ManageStaff />} />
        </Route>



        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </StrictMode>
);


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/adityag28/restaurant-web-app.git
// git push -u origin main

// git remote add origin https://github.com/adityag28/restaurant-web-app.git
// git branch -M main
// git push -u origin main