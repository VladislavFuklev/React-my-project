import React from "react";
import { OrganizeRight } from "./OrganizeRight";
import { OrganizeHeader } from "./OrganizeHeader";
import "./Organize.scss";
import { Container, Grid } from "@mui/material";
import { OrganizeLeft } from "./OrganizeLeft";

export function Orginize() {
  return (
    <>
      <div className="wrapper">
        <OrganizeHeader />
        <Container>
          <Grid container spacing={4}>
            <Grid item md={5}>
              <OrganizeLeft />
            </Grid>
            <Grid item md={7}>
              <OrganizeRight />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
