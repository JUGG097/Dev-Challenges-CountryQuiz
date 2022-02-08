import React from "react";
import { Card } from "./ResultCard.style";
import WinnerSVG from "../images/winner.svg";
import { ResultCardProps } from "../utils/types";

const ResultCard: React.FC<ResultCardProps> = ({ reset, score }) => {
	return (
		<Card>
			<div className="img-wrapper">
				<img src={WinnerSVG} alt="Winner" className="winner-img" />
			</div>

			<h3>Results</h3>

			<p>
				You got <span>{score}</span> correct answers
			</p>

			<button onClick={reset}>Try again</button>
		</Card>
	);
};

export default ResultCard;
