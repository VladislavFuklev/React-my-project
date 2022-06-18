import React from "react";
import { Header } from "container/Header/Header";
import { CssBaseline } from "@mui/material";
import { Footer } from "container/Footer/Footer";
import { Main } from "container/Main/Main";

export function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
