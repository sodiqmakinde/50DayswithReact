import React from "react";
import "./style.css";

export default function App(props) {
  return (
    <div className="others">
      <img src={props.item.coverImg} className="main_pic" alt="" />

      <div className="component1">
        <label>Life</label>
        <h3>{props.item.title}</h3>

        <p>{props.item.description}</p>

        <div className="by">
          <img src={props.item.user} alt="" />
          <div className="name">
            <h4>
              By: <span>{props.item.username}</span>
            </h4>
            <i>{props.item.time}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
