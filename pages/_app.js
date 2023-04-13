import "@/styles/globals.css";
import { createClient } from "contentful";

const client = createClient({
  space: "xvbok1avtt52",
  accessToken: "UM8g65iOzEsCgTXAPSBUm0UpbN9v7IY6fXIs8DVQbeM",
});

export async function getStaticPaths() {
  const entries = await client.getEntries({ content_type: "pamyatnik" });
  const paths = entries.items.map((entry) => ({
    params: { slug: entry.fields.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const entries = await client.getEntries({
    content_type: "pamyatnik",
    "fields.slug": params.slug,
  });
  return { props: { entry: entries.items[0] } };
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
