import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";


function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>
        Hecho con 💜 por 
        <a href={'https://www.linkedin.com/in/sharoncazap/'} target={'_blank'}>
          Sharon Cazap
        </a>
      </h1>
    </footer>
  );
}

export default Footer;
