import React from "react";
import styles from "./page.module.css";

const Play = () => {
	return (
		<>
			<div className={styles.currentInfoDiv}>
				<div className={styles.currentScore}>
					<p>
						Current score: <span>34</span>
					</p>
				</div>
				<div className={styles.currentWord}>
					<p>
						Current word: <span>nice</span>
					</p>
				</div>
			</div>
			<div className={styles.timer}>
				<p>
					Time remaining: <span>8</span>
				</p>
			</div>
			<form className={styles.form}>
				<label className={styles.label}>New word:</label>
				<input type="text" className={styles.input} />
				<button className={styles.button}>Submit</button>
			</form>
			<div className={styles.wordSnakeBody}>
				<span className={styles.snakeHead}>🐍</span>
				<p className={styles.snakeTail}>
					banana - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice- ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice - ape - eggs - sponge - east - trim - man - nice  ...
				</p>
			</div>
		</>
	);
};

export default Play;
