import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import HomeCard from "@/components/HomeCard";
import { Paper } from "@mui/material";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const entries = await client.getEntries({ content_type: "product" });

  return {
    props: {
      entries: entries.items,
    },
    revalidate: 60, // refresh the data every 60 seconds
  };
}

export default function Home({ entries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>monuments</title>
        <meta
          name='description'
          content='Вироби з граніту, памятники, плитка, бруківка, вази, стільниці, балясини, сходи'
        />
        <link rel='icon' href='/icon.png' />
      </Head>

      <Layout>
        <h1 className={styles.title}>Monuments</h1>
        <p className={styles.description}>
          вироби з натурального граніту <br />
        </p>

        <div className={styles.grid}>
          <HomeCard
            img='/pamyatnik2.png'
            url='./pamyatnik'
            header='Памятники'
            paragraph='Гранітні надгробні памятники різної складності'
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
          <HomeCard
            img='/brukivka.jpg'
            url='./brukivka'
            header='Гранітна бруківка'
            paragraph='Бруківка з натурального каменю - гарне і надійне покриття'
          />
          <HomeCard
            img='/potret.jpg'
            url='./brukivka'
            header='Художні роботи'
            paragraph='Витвори мистецтва з каменю: Портрети, відтворені в граніті'
          />
          <HomeCard
            img='/brukivka.jpg'
            url='./products'
            header='Товари'
            paragraph='Товари'
          />

          <Paper
            elevation={3}
            sx={{
              width: "81%",
              backgroundColor: "transparent",
              padding: "30px",
              borderRadius: "10px",
              variant: "fullWidth",
            }}
          >
            <article>
              <p>
                Вироби з граніту є одними з найбільш міцних та довговічних на
                ринку будівельних матеріалів. Граніт - це природний камінь, який
                забезпечує високу стійкість до зношування та зносу. Це робить
                його ідеальним вибором для виробів, що вимагають стійкості до
                довготривалого використання та елементів, які мають витримувати
                важкі навантаження.
              </p>
              <p>
                Вироби з граніту можуть бути використані для створення різних
                речей, від пам&apos;ятників та оздоблювальних елементів до
                сходів та стільниць. Їх багата кольорова гамма та природні
                варіації у текстурі дозволяють створювати унікальні дизайни та
                композиції. Крім того, граніт може бути оброблений різними
                способами, такими як полірування або шліфування, що дає
                можливість досягти різноманітних ефектів та фінішів.
              </p>
              <p>
                Один з головних переваг граніту як будівельного матеріалу
                полягає в його стійкості до зношування та морозостійкості.
                Вироби з граніту не втрачають свою естетичну привабливість з
                часом, завдяки відсутності впливу сонця та вологи.
              </p>
              <p>
                Гранітні вироби доступні в різних формах та кольорах, що
                дозволяє створювати оригінальні та естетично привабливі
                композиції. Завдяки цьому, вироби з граніту можна
                використовувати для створення різних елементів ландшафтного
                дизайну, включаючи фонтани, садові статуї, тротуарні плитки та
                багато іншого.
              </p>
              <p>
                Одним з найпопулярніших виробів з граніту є пам&apos;ятники. Ці
                вироби відрізняються високою міцністю та довговічністю, що
                забезпечує їм збереження свого вигляду протягом довгого часу.
                Вони можуть бути створені у різних формах та дизайнах, включаючи
                барельєфи, скульптури та фігури. Пам&apos;ятники з граніту
                можуть бути встановлені на кладовищах, у парках або на площах
                пам&apos;яті.
              </p>
              <p>
                Завдяки своїм властивостям та естетичному вигляду, вироби з
                граніту є популярним вибором для будівництва, ландшафтного
                дизайну та оздоблення. Вони не тільки стійкі та міцні, але й
                додадуть елегантності та гармонії будь-якому простору.{" "}
              </p>
            </article>
          </Paper>
        </div>
      </Layout>
    </div>
  );
}
