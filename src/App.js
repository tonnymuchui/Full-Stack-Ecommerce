import './App.css';
import Footer from './customer/components/footer/Footer';
import Navbar from './customer/components/navigation/NavBar';
import ProductDetails from './customer/components/productDetails.jsx/ProductDetails';
// import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <>
    <div className="">
      <Navbar />
    </div>
    <div>
      {/* <HomePage /> */}
      {/* <Product /> */}
      <ProductDetails />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
