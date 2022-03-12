import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Header";
import Content from "./Content";
import "./main.css";

function App() {
  return (
    <div className="main">
      <div className="card">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
