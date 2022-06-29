import { Mdn } from "components/Carusel/Carusel";
import { Orginize } from "components/Organize/Organize";
import { Popular } from "components/Popular/Popular";
import { WhoWeAre } from "pages/WhoWeAre/WhoWeAre";
import { Travels } from "pages/Category/Travels";
import { Countries } from "pages/Countries/Countries";
import { Nature } from "pages/Nature/Nature";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductsItem } from "pages/ProductsPages/ProductsItem";
import { Reviews } from "components/Reviews/Reviews";
import { All } from "pages/all/all";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mdn />
              <Popular />
              <Orginize />
              <Reviews />
            </>
          }
        />

        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/Countries" element={<Countries />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/all" element={<All/>} />
        <Route path="/ProductsPages/:id" element={<ProductsItem />} />
      </Routes>
    </>
  );
};
