import React from "react";
import styles from "./styles.module.css";
import Header from "./components/header";
import Main from "./pages/main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Main/>
    </div>
  );
}
