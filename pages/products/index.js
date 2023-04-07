import Head from "next/head";

const products = [
  { id: 1, name: "Товар 1" },
  { id: 2, name: "Товар 2" },
  { id: 3, name: "Товар 3" },
];

function ProductListPage() {
  const schemaOrg = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://example.com/products/${product.id}`,
    })),
  };

  return (
    <>
      <Head>
        <title>Список товаров</title>
        <meta
          name='description'
          content='Описание страницы со списком товаров'
        />
        <script type='application/ld+json'>{JSON.stringify(schemaOrg)}</script>
      </Head>
      <h1>Список товаров</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductListPage;
