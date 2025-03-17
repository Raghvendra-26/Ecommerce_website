import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router";
import ShopPage from "./pages/shop/ShopPage";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
