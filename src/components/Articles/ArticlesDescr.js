import React from "react";
import { Link } from "react-router-dom";
import "./Articles.scss";

export function ArticlesDescr({ image, title, properties, category, id }) {
  return (
    <>
      <div className="articles__img">
        <Link to={`/productsPages/${id}`}>
          <img src={image} alt="#/" />
        </Link>
      </div>
      <div className="articles__properties">
        <div
          style={{
            padding: "5px 10px",
          }}
        >
          {properties}
        </div>
        <div className="category">
          <Link to={`/${category}`} className="category-link">
            {category}
          </Link>
        </div>
      </div>
      <div className="articles__name">{title}</div>
    </>
  );
}
