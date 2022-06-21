import React from "react";
import { WhoImage } from "./WhoImage";
import { WhoText } from "./WhoText";
import { WhoDescrImage } from "./WhoDescrImage";
import "./whoweare.scss";
import { WhoSemper } from "./WhoSemper";
import { Grid } from "@mui/material";
import { BlockArray } from "./BlockArray";
import who from "./WhoArray";

export const WhoWeAre = () => {
  return (
    <>
      <WhoImage />
      <WhoText />
      <Grid container wrap spacing={5} justifyContent="center">
        <Grid item>
          <WhoDescrImage />
        </Grid>
        <Grid item>
          <WhoSemper />
          <div className="block-array">
            {who.map(({ number, numberText, text }) => (
              <BlockArray number={number} numberText={numberText} text={text} />
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};
