import Image from "next/image";
import styles from "./styles.module.css"
import snake from "../public/snake.png"
import React from "react";

const Snake = () => {
	return (
		<Image
			src={snake}
			alt="Drawing of a word snake"
			width={750}
			height={400}
			className={styles.snakeImg}
		/>
	);
};

export default Snake;
