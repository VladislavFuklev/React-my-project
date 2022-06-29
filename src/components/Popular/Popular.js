import { Container, Grid } from "@mui/material";
import React from "react";
import "utils/PopoularArray";
import popular from "utils/PopoularArray";
import { PopularDescr } from "./PopularDescr";
import { PopularRight } from "./PopularRight";

export function Popular() {
  return (
    <>
      <section className="popular-section">
        <Container>
          <Grid container gap="30px" wrap="nowrap" >
            {popular.map(
              ({
                image,
                title,
                placeholder,
                id,
                category
              }) => (
                <Grid item xs={12} sm={6} md={5} key={id}>
                  <PopularDescr
                    image={image}
                    title={title}
                    placeholder={placeholder}
                    category={category}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </section>
    </>
  );
}
