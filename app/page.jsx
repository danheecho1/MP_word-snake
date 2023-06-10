import React from "react";
import Link from "next/link"
import styles from "./page.module.css";
import { Snake } from "@/components";

const Home = () => {
	return (
		<>
			<Snake />
			<p className={styles.snakeQuote}>
				"Give me a long word that starts with a letter that my word ends
				with!" - Word Snake
			</p>
			<Link href="/play" className={styles.start}>Start</Link>
		</>
	);
};

export default Home;
