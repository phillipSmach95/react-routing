import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import Boards from "./Boards";
import Cart from "./Cart";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
          <main>
        <Routes>
            <Route path="/boards" element={<Boards />}></Route>
            <Route path="/carts" element={<Cart />}></Route>
        </Routes>
          </main>
      </div>
      <Footer />
    </>
  );
}
