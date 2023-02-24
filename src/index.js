//Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

//Get a reference to the div with ID root from index.html
const el = document.getElementById("root");

//Tell React to take control of above element
const root = ReactDOM.createRoot(el);

//create a component
function App() {
  //This is not a HTML element but a JSX element
  return <h1>Hello! You got this.</h1>;
}

//Show the component on the screen
root.render(<App />);
