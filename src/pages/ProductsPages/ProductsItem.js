import { Image } from "react-bootstrap";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import product, { getProductsObject } from "utils/ArticlesArray";
import "./Item.scss";
import { Grid } from "@mui/material";
import { Comments } from "components/Comments/Comments";
import { WhoImage } from "pages/WhoWeAre/WhoImage";
import { WhoText } from "pages/WhoWeAre/WhoText";
import { Reviews } from "components/Reviews/Reviews";

export const ProductsItem = ({ productObj = getProductsObject(product) }) => {
  let { id } = useParams();
  return (
    <>
      <WhoImage />
      <WhoText />
      <div className="item-bgc">
        <Container>
          <Grid container justifyContent="center">
            <Grid item>
              <div>
                <Image
                  className="articles__img"
                  style={{
                    width: "800px",
                    height: "400px",
                  }}
                  src={productObj[id].image}
                  rounded
                />
              </div>
              <div className="articles__properties">
                <div>{productObj[id].properties}</div>

                <div
                  style={{
                    color: "white",
                  }}
                  className="category"
                >
                  {productObj[id].category}
                </div>
              </div>
              <div className="articles__name">{productObj[id].title}</div>
            </Grid>
          </Grid>
          <div
            style={{ color: "black" }}
            dangerouslySetInnerHTML={{ __html: productObj[id].description }}
          ></div>
        </Container>
      </div>
      <Reviews/>
      <Comments />
    </>
  );
};


