import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Introducer from "./components/Introducer";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import NewProduct from "./components/NewProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/introduce" element={<Introducer />}></Route>
          <Route path="/list-product" element={<ListProduct />}></Route>
          <Route path="/new" element={""}></Route>
          <Route path="/contact" element={""}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
