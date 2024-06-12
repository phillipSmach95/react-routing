import React from "react";
import {BrowserRouter, Route, Routes} from  "react-router-dom"
import ReactDOM from "react-dom/client";
import App from "./App";

import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
      <App></App>
      
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
