// Function components
import React from "react";
import style from "../styles/app.css";

function Square(props) {
    return (
      <button
        className={style.square}
        onClick={props.onClick}>
        {props.value}
      </button>
    );
}


export default Square;
