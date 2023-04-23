import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-3576WVWP1P'
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-3576WVWP1P');
          `,
        }}
      ></script>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org/",
    "@type": "Product",
    "name": {product.fields.name},
    "image": {product.fields.image.fields.file.url},
    "description": {product.fields.description},
    "sku": {product.fields.id},
    "offers": {
      "@type": "Offer",
      "priceCurrency": "UAH",
      "price": {product.fields.price},
      "availability": "https://schema.org/InStock"
    }
              }`,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
