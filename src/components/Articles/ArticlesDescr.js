import React from "react";

export function ArticlesDescr({ image, title, properties }) {
  return (
    <>
        <div className="articles__img">
          <img src={image} alt="link" />
        </div>
        <div className="articles__properties">{properties}</div>
        <div className="articles__name">{title}</div>
    </>
  );
}
