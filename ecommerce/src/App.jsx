
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product";
import Login from "./pages/Login"
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Success from "./pages/Success";
import { useSelector } from "react-redux";

 
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart"  element={<Cart />} />
        <Route path="/success"  element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>}></Route>
        
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
 
};

export default App;

// Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : AuthPage}