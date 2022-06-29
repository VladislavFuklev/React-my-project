import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import product, { getProductsObject } from "utils/ArticlesArray";
import './Item.scss'

export const ProductsItem = ({ productObj = getProductsObject(product) }) => {
  let { id } = useParams();
  return (
    <>
      <Container>
        <div>{productObj[id].title}</div>
        <div>{productObj[id].properties}</div>
        <div>{productObj[id].category}</div>
      </Container>
    </>
  );
};
