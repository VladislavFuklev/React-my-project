import React from "react";
import { Header } from "container/Header/Header";
import { CssBaseline } from "@mui/material";
import { Articles } from "components/Articles/Articles";
import { Orginize } from "components/Organize/Organize";

export function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Articles/>
      <Orginize/>
    </>
  );
}
