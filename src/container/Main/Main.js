import { Container } from "@mui/material";
import { Articles } from "components/Articles/Articles";
import { Mdn } from "components/Carusel/Carusel";
import { Comments } from "components/Comments/Comments";
import { Orginize } from "components/Organize/Organize";
import { Category } from "pages/Category/CategoryTravels";
import { Countries } from "pages/Countries/Countries";
import { Nature } from "pages/Nature/Nature";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mdn />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Countries" element={<Countries />} />
        <Route path="/nature" element={<Nature />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Orginize />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Comments />} />
      </Routes>

      {/* <Mdn />
      <Orginize />
      <Popular />
      <Comments /> */}
    </>
  );
};
