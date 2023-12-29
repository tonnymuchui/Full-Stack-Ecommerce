import './App.css';
import Footer from './customer/components/footer/Footer';
import Navbar from './customer/components/navigation/NavBar';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <>
    <div className="">
      <Navbar />
    </div>
    <div>
      <HomePage />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
