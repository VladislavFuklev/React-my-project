import React from "react";
import { Header } from "container/Header/Header";
import { CssBaseline } from "@mui/material";
import { Articles } from "components/Articles/Articles";
import { Orginize } from "components/Organize/Organize";
import { Popular } from "components/Popular/Popular";
import { Comments } from "components/Comments/Comments";
import { Footer } from "container/Footer/Footer";
import { Mdn } from "components/Carusel/Carusel";
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
