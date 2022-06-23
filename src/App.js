import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
 
    <Router>
      <Routes>
      <Route path="/Login" element= {<Login />} />
      </Routes>
      <Topbar/>
      <div className="container">
        <Sidebar />
    <Routes>              
                 
       {admin && <Route exact path="/" element={<Home />} /> }
       {admin && <Route path="/users" element={<UserList />} /> }
       {admin && <Route path="/user/:userId" element={<User />} />}      
       {admin && <Route path="/newUser" element={<NewUser />} />  }      
       {admin && <Route path="/products" element={<ProductList />} /> }       
       {admin && <Route path="/product/:productId" element={<Product/>} />}
       {admin && <Route path="/newproduct" element={<NewProduct/>} />}
    </Routes>
    </div>
    </Router>
  );
}

export default App;