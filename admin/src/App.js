import "./App.css"
import { BrowserRouter as Router,Routes,Route, Navigate, } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
 const isAdmin=JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin;
 return (
    <Router >
    {isAdmin && <Navbar/>}
      <div className="container">
        {isAdmin && <Sidebar/>}
        <Routes>
        <Route exact path="/login" element={!isAdmin ? <Login/> : <Navigate replace to="/"/>}/>
         { isAdmin &&
         <>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>}/>
          <Route  path="/user/:id" element={<User/>}/>
          <Route  path="/newUser" element={<NewUser/>}/>
          <Route exact path="/products" element={<ProductList/>}/>
          <Route  path="/product/:id" element={<Product/>}/>
          <Route  path="/newProduct" element={<NewProduct/>}/>
         </> 
        }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
