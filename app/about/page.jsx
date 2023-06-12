import { Snake } from "@/components";
import Link from "next/link";
import styles from "./page.module.css";
import React from "react";

const About = () => {
	return (
		<>
			<Snake />
			<div className={styles.descriptionDiv}>
				<p className={styles.description}>
					Word snake is a game in which you provide a word that starts
					with a letter that the current word ends with. For example,
					if the current word is 'apple', you may enter 'extra' since
					the current word ends with an 'e', and your new word starts
					with an 'e' as well. Then, the word you provide becomes the
					current word, and the game continues until you cannot
					provide the next word within 10 seconds.
				</p>
				<p className={styles.description}>
					Your word will be considered valid if it is found in
					https://dictionaryapi.dev. This includes nouns (singular and
					plural), verbs, adjectives, adverbs, conjunctions,
					prepositions, and so on, but not pronouns. Entering an
					invalid word will also end the game instantly, so no
					guessing or making up random words here.
				</p>
				<p className={styles.description}>
					Your total score will equal to the total number of letters
					provided multiplied by the total number of words provided.
				</p>
			</div>
			<Link href="/" className={styles.linkToPlay}>
				Click here if your brain is ready to play
			</Link>
		</>
	);
};

export default About;
