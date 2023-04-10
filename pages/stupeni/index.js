import React from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "../../components/MyGallery";
import Layout from "../../components/Layout";
import Paper from "@mui/material/Paper";
import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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

const index = ({ entries }) => {
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
              <ProductCard products={entries} />
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
              <section>
                <h2>Сходи з граніту</h2>
                <p>
                  Сходи є важливим елементом будь-якого будинку, який повинен
                  бути не тільки практичним, але й естетичним. Гранітні сходи -
                  це відмінне поєднання міцності та елегантності.{" "}
                </p>
                <section>
                  <h3>Міцність та стійкість граніту</h3>
                  <p>
                    Граніт - це природний камінь, який дуже міцний та стійкий до
                    подряпин, зносу та ударів. Гранітні сходи мають високу
                    міцність та витривалість. Вони дуже стійкі до зносу, а також
                    до погодних умов. Навіть при довготривалому використанні
                    гранітні сходи не пошкоджуються, не вигорають та не
                    втрачають своєї естетичної привабливості. Також важливо
                    зазначити, що граніт має високу стійкість до води та вологи,
                    тому сходи з граніту є ідеальним вибором для зовнішніх
                    сходів, які мають бути стійкими до погодних умов.
                  </p>
                </section>
                <section>
                  <h3>Естетична привабливість граніту</h3>
                  <p>
                    Граніт - це не тільки міцний та стійкий матеріал, але й
                    матеріал, який має високу естетичну привабливість. Він має
                    природну красу, яка надає сходам з граніту неповторний
                    вигляд. Також важливо зазначити, що граніт має широку
                    палітру кольорів, тому ви зможете підібрати сходи, які
                    ідеально впишуться в інтер&apos;єр вашого будинку.
                  </p>
                </section>
                <section>
                  <h2>Як замовити гранітні сходи</h2>
                  <p>
                    Гранітні сходи - це відмінне поєднання міцності та
                    елегантності. Їх можна замовити для будь-якого будинку, який
                    потребує не тільки практичних, але й естетичних сходів.
                    Нижче наведено кілька кроків, які допоможуть вам замовити
                    гранітні сходи для вашого будинку.
                  </p>
                  <section>
                    <h3>1. Визначте необхідні параметри</h3>
                    <p>
                      Перш за все, необхідно визначити параметри сходів, які вам
                      потрібні. Розмір, кількість сходинок та кут нахилу - це
                      лише деякі з параметрів, які вам потрібно врахувати. Якщо
                      ви не впевнені, які саме параметри вам потрібні,
                      зверніться до професіоналів зі збірки сходів. Вони
                      допоможуть вам визначити необхідні параметри з урахуванням
                      конкретних вимог вашого будинку.
                    </p>
                  </section>
                  <section>
                    <h3>2. Виберіть колір та форму сходів</h3>
                    <p>
                      Після визначення параметрів, необхідно вибрати колір та
                      форму сходів. Граніт має широку палітру кольорів, тому ви
                      можете підібрати сходи, які ідеально впишуться в
                      інтер&apos;єр вашого будинку. Крім того, граніт може мати
                      різні форми, наприклад, прямі, круглі або криві. Вибір
                      форми залежить від ваших особистих вподобань та стилю
                      будинку.
                    </p>
                  </section>
                </section>
              </section>
            </article>
          </Paper>
        </main>
      </Layout>
    </div>
  );
};

export default index;
