import React from "react";
import "./Popular.scss";

export function PopularDescr({
  image,
  title,
  placeholder,
  descriptionTitle,
  descriptionText,
}) {
  return (
    <>
      <div className="popular-top">
        <a href="">
          <img className="popular-img" src={image} alt="" />
        </a>
        <div className="popular-title">
          <p>{placeholder}</p>
          {title}
        </div>
      </div>

      <div className="description-title">{descriptionTitle}</div>
      <div className="description-text">{descriptionText}</div>
      <div>
        <button className="description-btn">See more</button>
      </div>
      
    </>
  );
}
