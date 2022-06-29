import { Mdn } from "components/Carusel/Carusel";
import { Comments } from "components/Comments/Comments";
import { Orginize } from "components/Organize/Organize";
import { Popular } from "components/Popular/Popular";
import { WhoWeAre } from "pages/WhoWeAre/WhoWeAre";
import { Travels } from "pages/Category/Travels";
import { Countries } from "pages/Countries/Countries";
import { Nature } from "pages/Nature/Nature";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Articles } from "components/Articles/Articles";
import { ProductsItem } from "pages/ProductsPages/ProductsItem";

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
              <Articles />
              <Comments />
            </>
          }
        />

        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/Countries" element={<Countries />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/ProductsPages/:id" element={<ProductsItem />} />
      </Routes>
    </>
  );
};
