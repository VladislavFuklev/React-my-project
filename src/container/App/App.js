import React from "react";
import { Header } from "container/Header/Header";
import { CssBaseline } from "@mui/material";
import { Footer } from "container/Footer/Footer";
import { Main } from "container/Main/Main";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

export function App() {
  return (
    <>
      <CssBaseline />
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
