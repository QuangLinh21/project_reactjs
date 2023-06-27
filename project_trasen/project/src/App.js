import { Route, Routes,useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import Index from "./components/Index";
import Introducer from "./components/Introducer";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import InfoProduct from "./components/InfoProduct";
import React, { useState } from "react";
function App() {
  let initialProduct = {
    id: 0,
    name: "",
    img: "",
    description: "",
    price: 0,
    inventory: 0,
    rating: 0,
  };
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialProduct);
  const handleClick = (product) => {
    if (product !== null) {
      setProduct(product);
    }
    console.log("====================================");
    console.log("infoo1", product);
    console.log("====================================");
    navigate("/infoproduct");
  };
  const handleAdd = (product)=>{
    if (product !== null) {
      setProduct(product);
    }
    navigate("/cart");
  }
  return (
    <div>
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/introduce" element={<Introducer />}></Route>
          <Route
            path="/list-product"
            element={<ListProduct onclickpro={handleClick} />}
          ></Route>
          <Route path="/new" element={""}></Route>
          <Route path="/contact" element={""}></Route>
          <Route path="/cart" element={<Cart renderProduct={product}/>}></Route>
          <Route path="/infoproduct" element={<InfoProduct renderProduct={product} onclickAdd={handleAdd}/>}></Route>
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
