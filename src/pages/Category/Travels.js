import { Grid } from "@mui/material";
import { ArticlesDescr } from "pages/Articles/ArticlesDescr";
import { Comments } from "components/Comments/Comments";
import React from "react";
import product from "utils/ArticlesArray";
import "./travels.scss";
import { Reviews } from "components/Reviews/Reviews";

export const Travels = () => {
  return (
    <>
      <div className="item-bgc">
      <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Travels
        </h1>
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
                    id={id}
                  />
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
      <Reviews/>
      <Comments />
    </>
  );
};


