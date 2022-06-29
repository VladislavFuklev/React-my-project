import { Button, Card, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import arrReviews from "./ArrRewies";
import "./reviews.scss";

export const Reviews = () => {
  const [reviews, SetReviews] = useState(arrReviews);

  const [newReview, SetNewReviews] = useState({
    name: "",
    text: "",
  });

  const handleName = (e) =>
    SetNewReviews((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));

  const handleText = (e) =>
    SetNewReviews((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));

  const reviewsSend = (e) => {
    e.preventDefault();
    SetNewReviews({
      name: "",
      text: "",
    });
    SetReviews((value) => {
      return [...value, newReview];
    });
  };

  return (
    <>
      <div className="reviews">
        <Container>
          <h1 className="reviews-title">Reviews</h1>
          <Grid container justifyContent="space-between">
            <Grid item>
              {reviews.map(({ name, text }, i) => (
                <Card
                  style={{ background: "rgba(128, 128, 128, 0.388)" }}
                  className="reviews-block-item"
                  key={i}
                >
                  <div className="reviews-name">Name:{name}</div>
                  <div>Message:{text}</div>
                </Card>
              ))}
            </Grid>
            <Grid item>
              <h3 className="reviews-title">Please leave review about this product</h3>
              <form>
                <div>
                  <TextField
                    size="small"
                    label="Name"
                    margin="normal"
                    value={newReview.name}
                    onChange={handleName}
                  />
                </div>
                <div>
                  <TextField
                    size="small"
                    label="Text"
                    margin="normal"
                    value={newReview.text}
                    onChange={handleText}
                  />
                </div>
                <Button variant="contained" style={{color:'white', background:"gray"}} onClick={reviewsSend}>
                  Leave review
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
