import React from "react";
import { Header } from "container/Header/Header";
import { CssBaseline } from "@mui/material";
import { Articles } from "components/Articles/Articles";

export function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Articles/>
    </>
  );
}
