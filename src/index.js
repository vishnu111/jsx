//Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Get a reference to the div with ID root from index.html
const el = document.getElementById("root");

//Tell React to take control of above element
const root = ReactDOM.createRoot(el);

//Show the component on the screen
root.render(<App />);
