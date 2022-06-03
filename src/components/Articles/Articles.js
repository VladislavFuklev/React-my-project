import { Container, Grid } from "@mui/material";
import React from "react";
import { ArticlesDescr } from "./ArticlesDescr";
import product from "utils/ArticlesArray";
import { ArticlesTitle } from "./ArticlesTitle";
import "./Articles.scss";

export function Articles() {
  return (
    <>
      <div className="aricles__top bc">
        <Container className="bc">
          <ArticlesTitle />
          <Grid
            container
            spacing={4}
            direction="row"
            gap="20px"
            wrap="nowrap"
            background-color="gray"
          >
            {product.map(({ id, image, properties, title }) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <ArticlesDescr
                  image={image}
                  properties={properties}
                  title={title}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
