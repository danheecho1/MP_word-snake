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
				width={500}
				height={500}
			/>
      <p>"Give me a long word that starts with a letter that my word ends with!" - Word Snake</p>
      <form>
        <label>Your name: </label>
        <input type="text" />
        <button>Start</button>
      </form>
		</>
	);
};

export default Home;
