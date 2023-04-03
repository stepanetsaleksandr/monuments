import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/id/237/200/300",
    price: "$10",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Praesent et lectus in nunc fringilla condimentum.",
    image: "https://picsum.photos/id/238/200/300",
    price: "$15",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Praesent et lectus in nunc fringilla condimentum.",
    image: "https://picsum.photos/id/239/200/300",
    price: "$20",
  },
  {
    id: 4,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/id/237/200/300",
    price: "$10",
  },
  {
    id: 5,
    name: "Product 2",
    description: "Praesent et lectus in nunc fringilla condimentum.",
    image: "https://picsum.photos/id/238/200/300",
    price: "$15",
  },
  {
    id: 6,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/id/237/200/300",
    price: "$10",
  },
  {
    id: 7,
    name: "Product 2",
    description: "Praesent et lectus in nunc fringilla condimentum.",
    image: "https://picsum.photos/id/238/200/300",
    price: "$15",
  },
  {
    id: 8,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/id/237/200/300",
    price: "$10",
  },
  {
    id: 9,
    name: "Product 2",
    description: "Praesent et lectus in nunc fringilla condimentum.",
    image: "https://picsum.photos/id/238/200/300",
    price: "$15",
  },
];

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{ maxWidth: 345, height: 500, marginLeft: "15px", borderRadius: 3 }}
    >
      <CardMedia
        component='img'
        height='350'
        width='300'
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {product.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {product.description}
        </Typography>
        <Typography variant='h6' color='text.primary'>
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ProductGallery = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={5} lg={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGallery;
