import React from "react";
import Navlogo from "../src/images/logo512.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="tgd">
          <img src={Navlogo} alt="" />
          <h4>ReactFacts</h4>
        </div>

        <p>First Static Page with React</p>
      </nav>
    </>
  );
}
