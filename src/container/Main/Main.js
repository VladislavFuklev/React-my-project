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

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mdn />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/Countries" element={<Countries />} />
        <Route path="/nature" element={<Nature />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Orginize />} />
      </Routes>
{/* 
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Comments />} />
      </Routes>
      <Routes>
        <Route path="/whoweare" element={<WhoWeAre/>} />
      </Routes>

      

      {/* <Mdn />
      <Orginize />
      <Popular />
      <Comments /> */}
    </>
  );
};
