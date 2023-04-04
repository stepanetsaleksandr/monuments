import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({
  from: { opacity: 0.5, height: 200 },
  to: { opacity: 1, height: 250 },
});
const fadeOut = keyframes({
  from: { opacity: 1, height: 250 },
  to: { opacity: 0.5, height: 200 },
});

const HomeCard = (props) => {
  return (
    <Button href={props.url}>
      <Card
        sx={{
          maxWidth: 350,
          maxHeight: 300,
          // minWidth: 350,
          // minHeight: 300,
          width: 350,
          height: 300,
          margin: "0.5rem",
          textAlign: "left",
          textDecoration: "none",
          border: "1px solid #eaeaea",
          borderRadius: "10px",
          transition: "color 0.15s ease, border-color 0.15s ease",
          backgroundColor: "transparent",
        }}
      >
        <CardMedia
          component='img'
          height='200'
          image={props.img}
          alt='img'
          sx={{
            opacity: "0.5",
            filter: " blur(1px)",
            animation: `${fadeOut} 2s backwards`,
            "&:hover": {
              filter: " blur(0px)",
              animation: `${fadeIn} 1s backwards`,
              height: 250,
              opacity: "1",
            },
          }}
        />

        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.header}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.paragraph}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Button>
  );
};

export default HomeCard;
