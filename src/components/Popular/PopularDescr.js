import React from "react";
import { Link } from "react-router-dom";
import "./Popular.scss";

export function PopularDescr({ image, title, placeholder, category }) {
  return (
    <>
      <div className="popular-top">
        <Link to={`/${category}`}>
          <img className="popular-img" src={image} alt="#/" />
        </Link>
        <div className="popular-title">
          <p>{placeholder}</p>
          {title}
        </div>
      </div>
    </>
  );
}
