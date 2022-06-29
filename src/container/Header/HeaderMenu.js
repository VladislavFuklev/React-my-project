import React from "react";
import "./Header.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export function HeaderMenu() {
  return (
    <div className="header__menu">
      <ul className="menu__list">
        <li className="list__item">
          <Link to="/" className="active-Link">
            Home
          </Link>
        </li>
        <li className="list__item">
          <Link className="list__link" to="/whoweare">
            Who we are
          </Link>
        </li>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Category"
                menuVariant="dark"
                className="list__link home__link"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="category-header"
                >
                  <Link to="/travels" className="category-link-header">
                    Travels
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="category-header"
                >
                  <Link to="/countries" className="category-link-header">
                    Countries
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="category-header"
                >
                  <Link to="/nature" className="category-link-header">
                    Nature
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <li className="list__item">
          <a className="list__link" href="#/">
            Blog
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="#/">
            Contact
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="#/">
            Buy now
          </a>
        </li>
      </ul>
    </div>
  );
}
