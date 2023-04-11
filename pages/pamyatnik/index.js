import React from "react";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import styles from "../../styles/Home.module.css";
import ProductCard from "../../components/MyGallery";
import Layout from "../../components/Layout";
import Paper from "@mui/material/Paper";
import { createClient } from "contentful";

const client = createClient({
  space: "xvbok1avtt52",
  accessToken: "UM8g65iOzEsCgTXAPSBUm0UpbN9v7IY6fXIs8DVQbeM",
});

export async function getStaticProps() {
  const entries = await client.getEntries({ content_type: "pamyatnik" });
  console.log(entries);
  return {
    props: {
      entries: entries.items,
    },
    revalidate: 60, // refresh the data every 60 seconds
  };
}

const Index = ({ entries }) => {
  const [selectedCategory, setSelectedCategory] = useState("Одинарні");

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ToggleButtonGroup
                value={selectedCategory}
                exclusive
                onChange={handleCategoryChange}
                aria-label='category'
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ToggleButton value='Одинарні'>Одинарні</ToggleButton>
                <ToggleButton value='Подвійні'>Подвійні</ToggleButton>
                <ToggleButton value='Комплекси'>Комплекси</ToggleButton>
                <ToggleButton value='Дитячі'>Дитячі</ToggleButton>
                <ToggleButton value='Ексклюзивні'>Ексклюзивні</ToggleButton>
                <ToggleButton value='Хрести'>Хрести</ToggleButton>
              </ToggleButtonGroup>

              <ProductCard
                products={entries}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
          <Paper
            elevation={3}
            sx={{
              width: "81%",
              backgroundColor: "transparent",
              padding: "30px",
              marginTop: "1.5rem",
              borderRadius: "10px",
              variant: "fullWidth",
            }}
          >
            <article>
              <p>
                Пам&apos;ятники з граніту - це незабутні символи вічної
                пам&apos;яті, які створюються з міцного та витривалого
                природного каменю. Граніт є одним з найбільш популярних
                матеріалів для пам&apos;ятників завдяки його міцності, стійкості
                до погодних умов та довговічності. У створенні пам&apos;ятника з
                граніту важливо розглянути кілька аспектів, таких як дизайн,
                розмір, форму та колір.
              </p>
              <p>
                Дизайн пам&apos;ятника має відображати особистість, яку він
                вшановує. Він може бути виконаний в різних стилях, включаючи
                класичний, сучасний та абстрактний. Для відтворення зображень та
                написів на поверхні пам&apos;ятника зазвичай використовують
                різьблення, гравіювання або барельєфи.
              </p>
              <p>
                Розмір та форма пам&apos;ятника також мають велике значення.
                Вони можуть варіюватись від невеликих та компактних до високих
                та масивних. Важливо забезпечити безпеку та видимість
                пам&apos;ятника в залежності від його розташування.
              </p>
              <p>
                Пам&apos;ятники з граніту можуть мати різні цілі та призначення.
                Вони можуть бути встановлені в пам&apos;ять про померлих,
                вшанування видатних особистостей, як символ певної події або як
                частина архітектурного ансамблю.
              </p>
              <p>
                Оскільки граніт є дуже міцним матеріалом, пам&apos;ятники з
                нього можуть служити вічним свідченням про події та людей, яких
                ми хочемо вшанувати. Вони можуть бути встановлені як у відкритих
                просторах, так і в закритих приміщеннях, що робить їх
                універсальними та доступними для всіх бажаючих.
              </p>
            </article>
          </Paper>
        </main>
      </Layout>
    </div>
  );
};

export default Index;
