import React from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "../../components/MyGallery";
import Layout from "../../components/Layout";
import Paper from "@mui/material/Paper";

const index = () => {
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
              <ProductCard />
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
              <h1>Купуйте вази з граніту від найкращих виробників</h1>
              <p>
                Граніт - один з найбільш міцних та стійких матеріалів, який
                використовується для створення виробів побутового та
                декоративного призначення. Вази з граніту - це чудовий вибір для
                тих, хто бажає прикрасити свій дім надійним та естетичним
                виробом.
              </p>
              <h2>Переваги ваз з граніту</h2>
              <p>
                Вази з граніту мають безліч переваг перед вазами з інших
                матеріалів:
              </p>
              <ul>
                <li>
                  Міцність та витривалість. Граніт - це один з найміцніших
                  матеріалів, який не піддається зносу та ударом. Тому вази з
                  граніту не тільки виглядають чудово, але й можуть служити
                  довгий час.
                </li>
                <li>
                  Естетичність. Граніт має природну красу, яка виражається в
                  його текстурі та колірі. Вази з граніту можуть мати різні
                  відтінки та візерунки, що дозволяє підібрати відповідний
                  варіант для будь-якого інтер&apos;єру.
                </li>
                <li>
                  Стійкість до води та вологи. Граніт не вбирає вологу, тому
                  вази з граніту можуть бути використані в будь-яких умовах,
                  навіть в місцях з високою вологою.
                </li>
                <li>
                  Стійкість до високих температур. Граніт не втрачає своїх
                  властивостей при високих температурах, тому вази з граніту
                  можуть бути використані для вирощування квітів на вікнах під
                  сонцем.
                </li>
              </ul>
            </article>
          </Paper>
        </main>
      </Layout>
    </div>
  );
};

export default index;
