import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <div className="main_banner">
        <div className="container banner">
          <div className="inner">
            <h2>
              Guardians Entertaining
              <span> Blog</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              reiciendis voluptates repellat nisi perspiciatis
            </p>

            <div className="search_field">
              <input type="text" placeholder="search blog" />
              <button>Get</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
