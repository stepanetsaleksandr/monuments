import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardHeader,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import Link from "next/link";
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
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        width: 300,
        textAlign: "center",
        textDecoration: "none",
        border: "1px solid #eaeaea",
        borderRadius: "10px",
        transition: "color 0.15s ease, border-color 0.15s ease",
        backgroundColor: "transparent",
        "&:hover": {
          filter: " blur(0px)",
          opacity: "1",
        },
      }}
    >
      <Link href={`/products/${product.fields.id}`}>
        <CardHeader
          title={
            <Typography variant='h6' color='textSecondary'>
              Проект №: {product.fields.id}
            </Typography>
          }
          subheader={
            <Typography variant='text' color='textSecondary' gutterBottom>
              Категорія: {product.fields.category}
            </Typography>
          }
        />

        <CardMedia
          component='img'
          height='250'
          image={product.fields.image.fields.file.url}
          alt={product.fields.name}
          title={product.fields.name}
          sx={{
            opacity: "0.8",
            filter: " blur(0px)",
            animation: `${fadeOut} 1s forwards`,
            "&:hover": {
              filter: " blur(0px)",
              height: 250,

              opacity: "1",
              animation: `${fadeIn} 1s forwards`,
            },
          }}
        />
      </Link>
      <CardContent>
        <Typography variant='body2' color='text.secondary' component='div'>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            {product.fields.description}
          </Collapse>
        </Typography>
        <Typography variant='h6' color='text.primary'>
          Ціна: {product.fields.price} грн.
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem",
          backgroundColor: "transparent",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <IconButton
          size='small'
          color='primary'
          onClick={() => {
            const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(
              `Check out this product: ${product.fields.name} - Price: ${product.fields.price} грн.`
            )}`;
            window.open(telegramLink);
          }}
        >
          <TelegramIcon />
        </IconButton>

        <Typography
          variant='body2'
          color='text.secondary'
          onClick={handleExpandClick}
          sx={{ cursor: "pointer" }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Typography>
      </Box>
    </Card>
  );
};

const ProductGallery = ({ products, selectedCategory }) => {
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.fields.category === selectedCategory)
    : products;

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "price") {
      const priceA = parseFloat(a.fields.price);
      const priceB = parseFloat(b.fields.price);
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    } else {
      return sortOrder === "asc"
        ? a.fields.name.localeCompare(b.fields.name)
        : b.fields.name.localeCompare(a.fields.name);
    }
  });

  const handleSortByPrice = () => {
    if (sortBy === "price") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy("price");
      setSortOrder("asc");
    }
  };

  const handleSortByName = () => {
    if (sortBy === "name") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy("name");
      setSortOrder("asc");
    }
  };

  return (
    <>
      <div>
        <Button onClick={handleSortByPrice}>
          Ціна {sortBy === "price" && sortOrder === "asc" && "▲"}
          {sortBy === "price" && sortOrder === "desc" && "▼"}
        </Button>
        <Button onClick={handleSortByName}>
          Назва {sortBy === "name" && sortOrder === "asc" && "▲"}
          {sortBy === "name" && sortOrder === "desc" && "▼"}
        </Button>
      </div>
      <Grid container spacing={3}>
        {sortedProducts.map((product) => (
          <Grid
            item
            key={product.fields.id}
            xs={12}
            sm={6}
            md={5}
            lg={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              maxWidth: "900px",
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductGallery;
