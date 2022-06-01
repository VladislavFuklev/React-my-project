import React from "react";
import { Container } from "@mui/material";
import "./Header.css";

export function Headers() {
  return (
    <>
      <div className="header">
        <Container>
          <div className="header__container">
            <div className="header__logo">
              <img src="img/1.gpeg" alt=""></img>
            </div>
            <div className="header__menu">
              <ul className="menu__list">
                <li className="list__item">
                  <a className="list__link home__link" href="">
                    Home
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="">
                    Destinations
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="">
                    Who we are
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="">
                    Blog
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="">
                    Contact
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="">
                    Buy now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
