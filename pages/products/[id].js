import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { createClient } from "contentful";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const client = createClient({
  space: "xvbok1avtt52",
  accessToken: "UM8g65iOzEsCgTXAPSBUm0UpbN9v7IY6fXIs8DVQbeM",
});

export async function getStaticPaths() {
  const entries = await client.getEntries({ content_type: "pamyatnik" });
  const paths = entries.items.map((entry) => ({
    params: { id: entry.fields.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const entries = await client.getEntries({
    content_type: "pamyatnik",
    "fields.id": params.id,
  });
  const entry = entries.items[0];
  if (!entry) {
    return {
      notFound: true,
    };
  }
  const { name, description, price, category, image } = entry.fields;
  return {
    props: {
      name,
      description,
      price,
      category,
      image,
    },
  };
}

export default function Product({ name, description, price, category, image }) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Card
            sx={{
              maxWidth: 600,
              width: "100%",
              textAlign: "left",
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
            <CardHeader
              title={
                <Typography variant='h6' color='textSecondary'>
                  Проект №: {name}
                </Typography>
              }
              subheader={
                <Typography variant='text' color='textSecondary' gutterBottom>
                  Категорія: {category}
                </Typography>
              }
            />
            <CardMedia
              component='img'
              height='600'
              image={image.fields.file.url}
              alt={name}
              sx={{
                opacity: "0.8",
                filter: " blur(0px)",

                "&:hover": {
                  filter: " blur(0px)",

                  opacity: "1",
                },
              }}
            />
            <CardContent>
              <Typography
                variant='body2'
                color='text.secondary'
                component='div'
              ></Typography>
              <Typography variant='h6' color='text.primary'>
                Ціна: {price} грн.
              </Typography>
              <Typography variant='h6' color='text.primary'>
                {description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  );
}
