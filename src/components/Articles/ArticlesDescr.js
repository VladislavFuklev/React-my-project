import { CardContent } from "@mui/material";
import React from "react";
import { ArticlesTitle } from "./ArticlesTitle";

export function ArticlesDescr({ image, title, properties }) {
  return (
    <>
        <div className="articles__img">
          <a href=""><img src={image} alt="" /></a>
        </div>
        <div className="articles__properties">{properties}</div>
        <div className="articles__name">{title}</div>
    </>
  );
}
