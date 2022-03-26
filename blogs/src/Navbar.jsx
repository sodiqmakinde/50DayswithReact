import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <nav>
        <div className="container navbar">
          <h1>Guardians</h1>

          <ul className="navlinks">
            <li>Product</li>
            <li>All</li>
            <li>Contact</li>
            <li>About</li>
            <li>Services</li>
          </ul>

          <button className="away">Free test</button>

          <div className="hamburger">
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
