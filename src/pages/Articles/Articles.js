import { Container, Grid } from "@mui/material";
import React from "react";
import { ArticlesDescr } from "./ArticlesDescr";
import product from "utils/ArticlesArray";
import { ArticlesTitle } from "./ArticlesTitle";
import "./Articles.scss";

export function Articles() {
  return (
    <>
      <section className="section-articles">
        <Container>
          <ArticlesTitle />
          <Grid container spacing={2}>
            {product.map(({ id, image, properties, title, category }) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <div className="ov-hidden">
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
        </Container>
      </section>

      {/* <Grid container spacing={2} justifyContent="center">
        {product.map(({ id, image, properties, title, category }) => (
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
      </Grid> */}
    </>
  );
}
