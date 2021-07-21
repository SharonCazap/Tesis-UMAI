import Head from "next/head";
import PostList from "../components/PostList";
import { getDatabase } from "../lib/notion";
import styles from "./index.module.css";
export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span>
          Comunicación personalizada:
        </span>
        Chatbots basados en inteligencia artificial en el servicio al cliente y su desempeño en las empresas de servicios 
      </h2>
      <p>
        El contenido de este sitio web forma parte de la investigación de Tesis de grado para la Licenciatura en Tecnología de Multimedial de la Universidad Maimónides (UMAI).
      </p>
      <h3>Realizada por</h3>
      <p>Sharon Cazap</p>
      <h3>Profesores</h3>
      <p>Dra. Mar&iacute;a del Valle Ledesma y Lic. Pedro Paleo</p>
      <h3>Tutoras de Tesis</h3>
      <p>Lic. Valeria Drelichman y Lic. Sof&iacute;a Alamo</p>

      <h4>Agradecimientos</h4>
      <ul className={styles.agradecimientos}>
        <li>A mi mamá Verónica, por ser mi soporte y acompañarme incondicionalmente. </li>
        <li>A mi papá Enrique, por ser quien me desafía a superarme cada día. </li>
        <li>A mi hermano Roger, por ser la alegría de mis días. </li>
        <li>A mi abuela Nora, por estar siempre presente. </li>
        <li>A mis profesores, por guiarme en esta hermosa carrera y formarme como profesional. </li>
        <li>A mi abuelo Segismundo y a mi tío Rubén, que me cuidan desde donde están. </li>
        <li>Gracias. </li>
      </ul>
    </section>
      <h2 className={styles.heading}>Contenidos</h2>
      <PostList posts={posts}/>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
