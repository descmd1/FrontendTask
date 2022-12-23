import {Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import SignUpForm from './components/SignUpForm';
import CartItems from './components/UI/CartItems';
import HomePage from './components/UI/HomePage';
import MainCart from './components/UI/MainCart';
import MainCartItems from './components/UI/MainCartItems';
import MainCartItems2 from './components/UI/MainCartItems2';


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/main-cart-items' element={<MainCartItems/>}/>
      <Route path='/main-cart' element={<MainCart/>}/>
      <Route path='/cart-items' element={<CartItems/>}/>
      <Route path='/main-cart2' element={<MainCartItems2/>}/>
    </Routes>
  );
}

export default App;
