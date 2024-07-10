import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import ProductDetails from "./page/ProductDetails";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
