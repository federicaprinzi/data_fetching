import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
fetch("https://api.github.com/users/federicaprinzi")
  .then((response) => {
    console.log(`Response status: ${response.status}`);

    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
  */
