import { Container, Grid } from "@mui/material";
import React from "react";
import "utils/PopoularArray";
import popular from "utils/PopoularArray";
import { PopularDescr } from "./PopularDescr";

export function Popular() {
  return (
    <>
      <section className="popular-section">
        <Container>
          <Grid container justifyContent='space-between'>
            {popular.map(
              ({
                image,
                title,
                placeholder,
                descriptionTitle,
                descriptionText,
                id,
              }) => (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <PopularDescr
                    image={image}
                    title={title}
                    placeholder={placeholder}
                    descriptionTitle={descriptionTitle}
                    descriptionText={descriptionText}
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
