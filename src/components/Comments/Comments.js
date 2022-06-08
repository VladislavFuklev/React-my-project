import { Container, Grid } from "@mui/material";
import React from "react";
import { CommentsComm } from "./CommentsComm";
import { CommentsLinks } from "./CommentsLinks";
import { CommentsTrust } from "./CommentsTrust";

export function Comments() {
  return (
    <>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={4} md={3}>
            <CommentsTrust />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <CommentsComm />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <CommentsLinks />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
