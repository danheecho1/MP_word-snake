// import Image from "next/image";
import styles from "./styles.module.css"
import React from "react";

const Snake = () => {
	return (
		<img
			src='../public/snake.png'
			alt="Drawing of a word snake"
			width={750}
			height={400}
			className={styles.snakeImg}
		/>
	);
};

export default Snake;
