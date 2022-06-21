import { Grid } from "@mui/material";
import { ArticlesDescr } from "components/Articles/ArticlesDescr";
import { Mdn } from "components/Carusel/Carusel";
import { Comments } from "components/Comments/Comments";
import React from "react";
import product from "utils/ArticlesArray";
import "./travels.scss";

export const Travels = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {product
          .filter((category) => category.category === "Travels")
          .map(({ id, image, properties, title, category }) => (
            <Grid item xs={12} sm={6} md={4}>
              <div className="travels ov-hidden" key={id}>
                <ArticlesDescr
                  image={image}
                  properties={properties}
                  title={title}
                  category={category}
                />
              </div>
            </Grid>
          ))}
      </Grid>
      <Comments/>
    </>
  );
};
