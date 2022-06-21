import React from "react";
import "./whoweare.scss";

export const BlockArray = ({ text, number, numberText }) => {
  return (
    <>
        <div className="blick">
          <div className="blick-number">{number}</div>
          <div className="blick-numberText">{numberText}</div>
          <div className="blick-text">{text}</div>
        </div>
    </>
  );
};
