import React from "react";
import Link from "next/link";
import Head from "next/head";
import ReactDOMServer from "react-dom/server";

import user from "../../config/user";

import styles from "./styles.module.scss";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  color: React.ReactNode;
}

function ArticleWrapper({ title, children, color }: Props) {
  return (
    <>
      <Head>
        <title>
          {ReactDOMServer.renderToString(title)}
          {user.pageTitle}
        </title>
      </Head>

      <article className={styles.article}>
        <h1 style={{color: `${color}`}}>{title}</h1>
        <section>{children}</section>
      </article>
      <Link href="/">
        <a className={styles["go-back"]}>Volver</a>
      </Link>
    </>
  );
}

export default ArticleWrapper;
