import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Navbar from '../customer/components/navigation/NavBar'
import Footer from '../customer/components/footer/Footer'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/product/Product'
import ProductDetails from '../customer/components/productDetails.jsx/ProductDetails'
import Checkout from '../customer/components/Checkout/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import RegisterForm from '../customer/Auth/RegisterForm'
import { Login } from '@mui/icons-material'

const CustomerRouters = () => {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <Routes>
      <Route path='/register' element={<RegisterForm />}></Route>
      <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRouters
