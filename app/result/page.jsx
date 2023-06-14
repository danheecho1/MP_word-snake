import React from "react";
import Link from "next/link";
import { Snake } from "@/components";

const Result = () => {
	return (
		<>
			<Snake />
			<h1>Game over!</h1>
			<div>
				<p>
					Total # of words: <span>29</span>
				</p>
				<p>
					Total score: <span>232</span>
				</p>
			</div>
      <Link href="/play">Play again</Link>
		</>
	);
};

export default Result;
