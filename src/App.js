import logo from './logo.svg';
import './App.css';
import Header from './COMPONENTS/Header';
import SlideShow from './COMPONENTS/Slideshow';
import ProductCards from './COMPONENTS/productscards';
import Footer from './COMPONENTS/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ViewProduct from './COMPONENTS/ViewProduct';
import { useState } from 'react';
import Cart from './COMPONENTS/Cart';
import CheckoutPage from './COMPONENTS/CheckoutPage';
import About from './COMPONENTS/About';
import Login from './COMPONENTS/Login';
import Signup from './COMPONENTS/Signup';
import Allproducts from './COMPONENTS/Allproducts';
function App() {
  const [cart,setCart]=useState([]);
  const [cartcount,setCartCount]=useState();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/View-Product/:id" element={<ViewProduct cart={cart} setCart={setCart}/>}/>
            <Route path='/Cart' element={<Cart cart={cart} />}/>
            <Route path="/CheckOutPage" element={ <CheckoutPage cart={cart} setCart={setCart} />} />
            <Route path='/About'  element={<About cart={cart}/>}/>
            <Route path='/Login' element={<Login cart={cart}/>}/>
            <Route path='/SignUp' element={<Signup cart={cart}/>}/>
            <Route path='/Allproducts' element={<Allproducts cart={cart}/>}/>


            <Route path="/" element={ 
              <div className="App">
                  <div className="div">
                        {/* <div className='sm:px-6 lg-8'>
                          <Header count={cart.length}/>
                        </div> */}
                         
                        {/* <SlideShow/> */}
                        <ProductCards/>                                                           
                        {/* <Footer/> */}

                  </div>
          

              </div>
            }
            />
          </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
