import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carusel.scss";

export function Mdn() {
  return (
    <>
      <div className="discover">DISCOVER THE MOST ENGAGING PLACES</div>
      <Carousel className="mdn">
        <Carousel.Item>
          <img
            className="d-block w-100 img-h"
            src="/img/111.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-h"
            src="/img/222.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="600px"
            className="d-block w-100 img-h"
            src="/img/333.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
