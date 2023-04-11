import React from "react";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from "@mui/material";
import { keyframes } from "@emotion/react";
const fadeIn = keyframes({
  from: { opacity: 0.8, height: 250 },
  to: { opacity: 1, height: 350 },
});
const fadeInCard = keyframes({
  from: { opacity: 0.8, height: 550, width: 280 },
  to: { opacity: 1, height: 750, width: 300 },
});
const fadeOut = keyframes({
  from: { opacity: 1, height: 350 },
  to: { opacity: 0.8, height: 250 },
});

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 280,
        maxHeight: 600,
        width: 280,
        height: 550,
        margin: "0.5rem ",
        textAlign: "left",
        textDecoration: "none",
        border: "1px solid #eaeaea",
        borderRadius: "10px",
        transition: "color 0.15s ease, border-color 0.15s ease",
        backgroundColor: "transparent",
        "&:hover": {
          filter: " blur(0px)",
          animation: `${fadeInCard} 1s forwards`,
          height: 550,
          opacity: "1",
        },
      }}
    >
      <CardHeader
        title={
          <Typography variant='h6' color='textSecondary'>
            Проект №: {product.fields.id}
          </Typography>
        }
        subheader={
          <Typography variant='subtitle5' color='textSecondary' gutterBottom>
            Категорія: {product.fields.category}
          </Typography>
        }
      />
      <CardMedia
        component='img'
        height='250'
        image={product.fields.image.fields.file.url}
        alt={product.fields.name}
        sx={{
          opacity: "0.5",
          filter: " blur(0px)",
          animation: `${fadeOut} 2s forwards`,
          "&:hover": {
            filter: " blur(0px)",
            animation: `${fadeIn} 1s forwards`,
            height: 250,
            opacity: "1",
          },
        }}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {product.fields.description}
        </Typography>
        <Typography variant='h6' color='text.primary'>
          Ціна: {product.fields.price} грн.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

const ProductGallery = ({ products, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.fields.category === selectedCategory)
    : products;

  return (
    <Grid container spacing={3}>
      {filteredProducts.map((product) => (
        <Grid item key={product.fields.id} xs={12} sm={6} md={5} lg={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGallery;
