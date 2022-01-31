import React from "react";
import { Card } from "./QuestionCard.style";
import AdventureSVG from "../images/adventure.svg";
import { QuestionCardProps } from "../utils/types";

const QuestionCard: React.FC<QuestionCardProps> = ({
	question,
	nextCallback,
	checkAnswerCallback,
	selectedAnswer,
	answer,
}) => {
	return (
		<Card>
			<img src={AdventureSVG} alt="Adventure" className="adventure-img" />

			<div className="question">
				{question.imageQuestion && (
					<img
						src={
							process.env.PUBLIC_URL +
							`/flags/4x3/${question.imageUrl}.svg`
						}
						alt=""
						className="img-flag"
					/>
				)}

				<p>{question.question}</p>
			</div>
			<div className="options">
				<button
					name="option-A"
					className={
						selectedAnswer
							? answer?.correct
								? answer?.selectedOption === "option-A"
									? "btn-bg-green"
									: ""
								: answer?.selectedOption === "option-A"
								? "btn-bg-red"
								: answer?.correctOption === "option-A"
								? "btn-bg-green"
								: ""
							: ""
					}
					value={question.options[0]}
					onClick={checkAnswerCallback}
					disabled={selectedAnswer}
				>
					A <span>{question.options[0]}</span>{" "}
					<span className="hidden-correct">&#10004;</span>
					<span className="hidden-incorrect">&#x2715;</span>
				</button>
				<button
					name="option-B"
					className={
						selectedAnswer
							? answer?.correct
								? answer?.selectedOption === "option-B"
									? "btn-bg-green"
									: ""
								: answer?.selectedOption === "option-B"
								? "btn-bg-red"
								: answer?.correctOption === "option-B"
								? "btn-bg-green"
								: ""
							: ""
					}
					value={question.options[1]}
					onClick={checkAnswerCallback}
					disabled={selectedAnswer}
				>
					B <span>{question.options[1]}</span>
					<span className="hidden-correct">&#10004;</span>
					<span className="hidden-incorrect">&#x2715;</span>
				</button>
				<button
					name="option-C"
					className={
						selectedAnswer
							? answer?.correct
								? answer?.selectedOption === "option-C"
									? "btn-bg-green"
									: ""
								: answer?.selectedOption === "option-C"
								? "btn-bg-red"
								: answer?.correctOption === "option-C"
								? "btn-bg-green"
								: ""
							: ""
					}
					value={question.options[2]}
					onClick={checkAnswerCallback}
					disabled={selectedAnswer}
				>
					C <span>{question.options[2]}</span>
					<span className="hidden-correct">&#10004;</span>
					<span className="hidden-incorrect">&#x2715;</span>
				</button>
				<button
					name="option-D"
					className={
						selectedAnswer
							? answer?.correct
								? answer?.selectedOption === "option-D"
									? "btn-bg-green"
									: ""
								: answer?.selectedOption === "option-D"
								? "btn-bg-red"
								: answer?.correctOption === "option-D"
								? "btn-bg-green"
								: ""
							: ""
					}
					value={question.options[3]}
					onClick={checkAnswerCallback}
					disabled={selectedAnswer}
				>
					D <span>{question.options[3]}</span>
					<span className="hidden-correct">&#10004;</span>
					<span className="hidden-incorrect">&#x2715;</span>
				</button>
			</div>

			{selectedAnswer && (
				<div className="next">
					<button onClick={nextCallback}>Next</button>
				</div>
			)}
		</Card>
	);
};

export default QuestionCard;
