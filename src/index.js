import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../src/App.css";
import reportWebVitals from "./reportWebVitals";

//Import all css files in index.js (I follow this pattern and most of the comapanies too)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//NOTE -: REMOVE ALL THE CLUTTER FILES FROM THE CODEBASE.

//MAKE YOUR OWN PORTFOLIO DESIGN , DON'T COPY YOUR SENIOR'S SIR EVEN IF YOU ARE CODING THAT FROM SCRATCH.

//PORTFOLIO SHOULD BE UNIQUE.
