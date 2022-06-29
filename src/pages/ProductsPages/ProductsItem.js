import { Image } from "react-bootstrap";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import product, { getProductsObject } from "utils/ArticlesArray";
import "./Item.scss";
import { Grid } from "@mui/material";
import { Comments } from "components/Comments/Comments";
import { Reviews } from "components/Reviews/Reviews";

export const ProductsItem = ({ productObj = getProductsObject(product) }) => {
  let { id } = useParams();
  return (
    <>
      <div className="item-bgc">
      <h1 style={{textAlign:'center', fontWeight:'bold'}}>{productObj[id].title}</h1>
        <Container>
          <Grid container justifyContent="center">
            <Grid item>
              <div>
                <Image
                  className="articles__img"
                  style={{
                    width: "800px",
                    height: "400px",
                    marginTop:'40px',
                    marginBottom:'40px'
                  }}
                  src={productObj[id].image}
                  rounded
                />
              </div>
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


