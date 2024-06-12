import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Boards from "./Boards";
import Cart from "./Cart";
import Detail from "./Detail";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<div className="product"><h1>Welcome skaterboy 😎</h1><img src="/images/skateboard.png" alt="skate"></img></div>}/>
            <Route path="/boards" element={<Boards />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/carts" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
