import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/shop'; // Make sure to use PascalCase for components
import Footer from './components/Footer/Footer';
import Cart from './pages/cart';
import Product from "./pages/product";
import ShopCategory from './pages/ShopCategory';
import banner_mens from "./components/Assets/banner_mens.png"
import banner_women from "./components/Assets/banner_women.png"
import banner_kids from "./components/Assets/banner_kids.png"
import LoginSinup from "./pages/LoginSignup"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Shop />} />  
           <Route exact path='/mens' element={<ShopCategory banner={banner_mens} category="men"/>} />
          <Route exact path='/womens' element={<ShopCategory banner={banner_women} category="women" />} />
          <Route exact path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route exact path='/product' element={<Product/>} />
          <Route exact path=":productID" element={<Product/>}/>
          <Route/>
          <Route exact path="./cart" element ={<Cart/>}/>
          <Route exact path="./login" element={<LoginSinup/>}/> 
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
