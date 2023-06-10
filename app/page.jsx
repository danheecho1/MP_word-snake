import React from "react";
import Image from "next/image";
import snake from "../public/snake.PNG"
import styles from "./page.module.css";

const Home = () => {
	return (
		<>
			<Image
				src={snake}
				alt="Drawing of a word snake"
				width={750}
				height={400}
        className={styles.snakeImg}
			/>
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
