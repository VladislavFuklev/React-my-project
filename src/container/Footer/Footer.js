import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Footer.scss";
import { FooterIcons } from "./FooterIconts";
import { FooterText } from "./FooterText";

export function Footer() {
  return (
    <>
      <div style={{ background: "#212529" }}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <FooterText />
            </Grid>
            <Grid item>
              <FooterIcons />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
