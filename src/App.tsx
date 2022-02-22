import React, { useState, useEffect } from "react";
import { BaseContainer, Container } from "./App.style";
import QuestionCard from "./components/QuestionCard";
import { RandomQuestionData, questionsTotalNumber } from "./utils/helper";
import ResultCard from "./components/ResultCard";
import { DataTypeDefinition, AnswerObj } from "./utils/types";

function App() {
	const [questions, setquestions] = useState<DataTypeDefinition>(
		RandomQuestionData()
	);
	const [questionNo, setquestionNo] = useState(0);
	const [selectedAnswer, setselectedAnswer] = useState(false);
	const [answer, setanswer] = useState<AnswerObj>();
	const [userScore, setuserScore] = useState(0);
	const [gameOver, setgameOver] = useState(false);
	const [endGame, setendGame] = useState(false);

	const nextButton = () => {
		if (gameOver === true) {
			setendGame(true);
		} else {
			setquestionNo(questionNo + 1);
			setselectedAnswer(false);
		}
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		let buttonNames = ["option-A", "option-B", "option-C", "option-D"];
		let selectedOption = e.currentTarget.name;
		let userAnswer = e.currentTarget.value;
		let correctAnswer = questions[questionNo].answerText;
		let correct = false;

		if (userAnswer === correctAnswer) {
			correct = true;
			setuserScore(userScore + 1);
			// console.log(true);
		} else {
			correct = false;
			setgameOver(true);
		}

		let correctOption = buttonNames[questions[questionNo].answer - 1];

		setanswer({
			correct,
			selectedOption,
			correctOption,
		});

		setselectedAnswer(true);
	};

	const restartQuiz = () => {
		setquestions(RandomQuestionData());
		setgameOver(false);
		setendGame(false);
		setquestionNo(0);
		setuserScore(0);
		setselectedAnswer(false);
		setanswer({
			correct: false,
			selectedOption: "",
			correctOption: "",
		});
	};

	useEffect(() => {}, []);

	return (
		<>
			<BaseContainer />
			<Container>
				<div className="container">
					<div className="vertical-center">
						<h3>COUNTRY QUIZ</h3>

						{endGame || questionNo === questionsTotalNumber - 1 ? (
							<ResultCard reset={restartQuiz} score={userScore} />
						) : (
							<>
								<QuestionCard
									question={questions[questionNo]}
									// question={questions[questionNo]}
									nextCallback={nextButton}
									checkAnswerCallback={checkAnswer}
									selectedAnswer={selectedAnswer}
									answer={answer}
								/>
								<p className="kesion-number">
									{questionNo + 1}
								</p>
							</>
						)}

						<footer>
							<p>
								created by Adeoluwa -{" "}
								<a href="https://devchallenges.io/">
									devChallenges.io
								</a>
							</p>
						</footer>
					</div>
				</div>
			</Container>
		</>
	);
}

export default App;
