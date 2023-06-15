"use client";

import React from "react";
import Link from "next/link";
import { Snake } from "@/components";
import styles from "./page.module.css";

const Result = () => {
	return (
		<>
			<Snake />
			<h1 className={styles.heading}>Game over!</h1>
			<div className={styles.resultsDiv}>
				<div className={styles.resultsDiv__detailsDiv}>
					<p className={styles.resultsDiv__detailsDiv__totalWords}>
						Total # of words:{" "}
						<span>{typeof window !== 'undefined' ? sessionStorage.getItem("numberOfWords") : null}</span>
					</p>
					<p className={styles.resultsDiv__detailsDiv__totalScore}>
						Total score:{" "}
						<span>{typeof window !== 'undefined' ? sessionStorage.getItem("score") : null}</span>
					</p>
				</div>
				<Link href="/play" className={styles.playAgain}>
					Play again
				</Link>
			</div>
		</>
	);
};

export default Result;
