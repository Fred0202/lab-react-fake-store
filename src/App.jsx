import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App relative z-20 pt-20">
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <ProductListPage />}
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
