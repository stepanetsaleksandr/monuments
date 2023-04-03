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
              <p>
                Гранітна бруківка - це витончений та ефективний спосіб
                оздоблення вулиць та просторів навколо будинків. Граніт, який є
                основним матеріалом для бруківки, відомий своєю міцністю та
                стійкістю до погодних умов, що робить його ідеальним вибором для
                вуличних покриттів.
              </p>
              <p>
                Гранітну бруківку можна знайти в різних розмірах та формах, що
                дозволяє створювати різноманітні дизайни та візуальні ефекти.
                Крім того, гранітна бруківка є досить простою в укладці та
                монтуванні, що робить її доступною для будь-якого клієнта.
              </p>
              <p>
                Ще однією перевагою гранітної бруківки є те, що вона вимагає
                мінімального догляду та обслуговування, що знижує витрати на її
                утримання. Крім того, граніт є екологічно чистим матеріалом, що
                робить гранітну бруківку прийнятним вибором для будь-якої
                екологічної ініціативи.
              </p>
              <p>
                Загалом, гранітна бруківка є надійним та естетичним рішенням для
                вуличних покриттів, яке забезпечує міцність та довговічність в
                будь-яких погодних умовах.
              </p>
            </article>
          </Paper>
        </main>
      </Layout>
    </div>
  );
};

export default index;
