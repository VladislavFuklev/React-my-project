import React from "react";
import { Container } from "@mui/material";
import "./Header.scss";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
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
