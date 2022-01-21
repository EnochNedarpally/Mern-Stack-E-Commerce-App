import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import ShoppingCart from './pages/ShoppingCart';
import Success from './pages/Success';
import { useSelector } from 'react-redux';
function App() {
  const user=useSelector(state=>state.user.currentUser);
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/products" element={<ProductList/>}/>
            <Route  path="/products/:category" element={<ProductList/>}/>
            <Route  path="/product/:id" element={<ProductPage/>}/>
            <Route  path="/cart" element={<ShoppingCart/>}/>
            <Route  path="/success" element={<Success/>}/>
            <Route  path="/login" element={user ?<Navigate to ="/"/> : <Login/>  }/>
            <Route  path="/register" element={user ?<Navigate to ="/"/> : <Register/>  }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;             
