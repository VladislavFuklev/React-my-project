import React from "react";
import { Link } from "react-router-dom";
import "./Popular.scss";

export function PopularDescr({ image, title, placeholder }) {
  return (
    <>
      <div className="popular-top">
        <a href="#/">
          <img className="popular-img" src={image} alt="#/" />
        </a>
        <div className="popular-title">
          <p>{placeholder}</p>
          {title}
        </div>
      </div>
    </>
  );
}
