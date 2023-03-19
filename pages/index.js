import Head from "next/head";
import Image from "next/image";
import HomeCard from "../components/HomeCard";

import Paper from "@mui/material/Paper";

import styles from "../styles/Home.module.css";
import { width } from "@mui/system";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Monuments</h1>
        <p className={styles.description}>
          вироби з натурального граніту <br />
        </p>
        <div className={styles.grid}>
          <HomeCard
            img='/pamyatnik2.png'
            url='./pamyatnik'
            header='Памятники'
            paragraph="Гранітні надгробні пам'ятники різної складності"
          />

          <HomeCard
            img='/stupeni.png'
            url='./stupeni'
            header='Сходи з граніту'
            paragraph='Гранітні сходи - матеріал з найкращими властивостями'
          />

          <HomeCard
            img='/vaza.jpg'
            url='./vazy'
            header='Вази з граніту'
            paragraph='гранітні вази - красиве та функціональне доповнення дизайну'
          />
          <HomeCard
            img='/brukivka.jpg'
            url='./brukivka'
            header='Гранітна бруківка'
            paragraph='Бруківка з натурального каменю - гарне і надійне покриття'
          />
          <Paper
            elevation={3}
            sx={{
              width: "81%",
              backgroundColor: "transparent",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            Памятники з граніту є популярним вибором для вічної памяті. Граніт -
            це природний камінь, який відрізняється своєю міцністю, витривалістю
            та стійкістю до атмосферних впливів, що робить його ідеальним
            матеріалом для памятників. Якщо ви плануєте створити памятник з
            граніту, важливо звернути увагу на деталі, такі як дизайн, розмір,
            форму та колір. Також важливо визначити місце розташування
            памятника, оскільки це відіграє важливу роль у забезпеченні безпеки
            та видимості памятника. Памятники з граніту можуть бути виконані в
            різних стилях, включаючи класичний, сучасний та абстрактний. Вони
            можуть бути розміщені як у відкритих просторах, так і в закритих
            приміщеннях, наприклад у музеях. Памятник з граніту - це скульптурна
            або архітектурна споруда, яка створена з природного матеріалу -
            граніту. Граніт - це мінералічна порода, яка складається з кристалів
            кварцу, слюди та фельдспату. Цей матеріал відомий своєю міцністю,
            твердістю, стійкістю до зношування та погодних умов, тому часто
            використовується для створення меморіальних та памятних споруд.
            Памятники з граніту можуть мати різну форму та розмір. Вони можуть
            бути високими та масивними, або ж невеликими та компактними.
            Зазвичай на поверхню памятників з граніту виконують різьблення,
            гравіювання або барельєфи, на яких зображені емблеми, символіка,
            написи або портрети вшануваної особи. Памятники з граніту можуть
            мати різні цілі та призначення, наприклад, вони можуть
            встановлюватись в память про померлих, вшанування видатних
            особистостей, як символ певної події або як частина архітектурного
            ансамблю.
          </Paper>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
