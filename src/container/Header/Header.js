import React from "react";
import { Container } from "@mui/material";
import "./Header.css";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";

export function Headers() {
  return (
    <>
      <div className="header">
        <Container>
          <div className="header__container">
            <HeaderLogo />
            <HeaderMenu />
          </div>
        </Container>
      </div>
    </>
  );
}
