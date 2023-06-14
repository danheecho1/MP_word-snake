"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const Play = () => {
	const [timeLeft, setTimeLeft] = useState(5);
	const [newWord, setNewWord] = useState("");
	const [wordBank, setWordBank] = useState([]);
	const [score, setScore] = useState(0);
	const [test, setTest] = useState("test1")

	// Logics needed = Countdown timer, verify word, end game
	useEffect(() => {
		const fetchStartingWord = async () => {
			const response = await fetch(
				"https://random-word-api.herokuapp.com/word"
			);
			const word = await response.json();
			return word[0];
		};

		fetchStartingWord().then((response) => {
			setWordBank((current) => {
				return [...current, response];
			});
		}).then(() => {
			const interval = setInterval(() => {
				setTimeLeft((timeLeft) => {
					if(timeLeft === 1) {
						clearInterval(interval)
					}
					return timeLeft - 1});
			}, 1000);
		})
	}, []);

	function calculateScore(currentWord, remainingSeconds) {
		return currentWord.length * remainingSeconds
	}

	function handleSubmit(e) {
		e.preventDefault();

		// Add submitted word to the word bank
		setWordBank((currentWordBank) => {
			return [...currentWordBank, newWord];
		});

		// Reset the timer back to 10 seconds
		setTimeLeft(5);
		setNewWord("");

		// Calculate and update the score
		setScore((currentScore) => {
			return currentScore + (calculateScore(newWord, timeLeft))
		})
	}

	return (
		<>
			<div className={styles.currentInfoDiv}>
				<div className={styles.currentScore}>
					<p>
						Current score: <span>{score}</span>
					</p>
				</div>
				<div className={styles.currentWord}>
					<p>
						Current word:{" "}
						<span>{wordBank[wordBank.length - 1]}</span>
					</p>
				</div>
			</div>
			<div className={styles.timer}>
				<p>
					Time remaining: <span>{timeLeft}</span>
				</p>
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label className={styles.label}>New word:</label>
				<input
					type="text"
					className={styles.input}
					value={newWord}
					onChange={(e) => setNewWord(e.target.value)}
				/>
				<button className={styles.button}>Submit</button>
			</form>
			<div className={styles.wordSnakeBody}>
				<span className={styles.snakeHead}>🐍</span>
				<p className={styles.snakeTail}>
					{wordBank.map((word) => {
						return `${word} - `;
					})}
				</p>
			</div>
		</>
	);
};

export default Play;
