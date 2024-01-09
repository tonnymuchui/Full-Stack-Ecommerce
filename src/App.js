import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './customer/components/Checkout/CheckOut';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Footer from './customer/components/footer/Footer';
import Navbar from './customer/components/navigation/NavBar';
import CustomerRouters from './Routers/CustomerRouters';
// import ProductDetails from './customer/components/productDetails.jsx/ProductDetails';
// import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
