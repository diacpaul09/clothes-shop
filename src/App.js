import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

import SintInAndSingUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />\
        <Route path="/signin" element={<SintInAndSingUpPage />} />\
      </Routes>
    </div>
  );
}

export default App;
