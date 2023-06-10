import React from "react";
import styles from "./page.module.css";
import { Snake } from "@/components";

const Home = () => {
	return (
		<>
			<Snake />
      <p className={styles.snakeQuote}>"Give me a long word that starts with a letter that my word ends with!" - Word Snake</p>
      <form className={styles.form}>
        <label className={styles.label}>Name: </label>
        <input type="text" className={styles.input} />
        <button className={styles.button}>Start</button>
      </form>
		</>
	);
};

export default Home;
