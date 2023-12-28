import './App.css';
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
    </>
  );
}

export default App;
