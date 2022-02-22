import React, { useState, useEffect } from "react";
import { BaseContainer, Container } from "./App.style";
import QuestionCard from "./components/QuestionCard";
import { RandomQuestionData } from "./utils/data";
import ResultCard from "./components/ResultCard";
import { DataTypeDefinition, AnswerObj } from "./utils/types";

function App() {
	const [questions, setquestions] = useState<DataTypeDefinition>(
		RandomQuestionData()
	);
	// const Questions: DataTypeDefinition = RandomQuestionData();
	const [questionNo, setquestionNo] = useState(0);
	const [selectedAnswer, setselectedAnswer] = useState(false);
	const [answer, setanswer] = useState<AnswerObj>();
	const [userScore, setuserScore] = useState(0);
	const [gameOver, setgameOver] = useState(false);

	const nextButton = () => {
		// console.log(questions);
		console.log(questionNo);
		if (gameOver === true) {
			setquestionNo(5);
		} else {
			setquestionNo(questionNo + 1);
			setselectedAnswer(false);
		}
		// setquestionNo(questionNo + 1);
		// setselectedAnswer(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		let buttonNames = ["option-A", "option-B", "option-C", "option-D"];
		let selectedOption = e.currentTarget.name;
		let userAnswer = e.currentTarget.value;
		let correctAnswer = questions[questionNo].answer;
		let correct = false;

		if (userAnswer === correctAnswer) {
			correct = true;
			setuserScore(userScore + 1);
			// console.log(true);
		} else {
			correct = false;
			setgameOver(true);
		}

		let correctOption =
			buttonNames[questions[questionNo].options.indexOf(correctAnswer)];

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

						{questionNo === 5 ? (
							<ResultCard reset={restartQuiz} score={userScore} />
						) : (
							<>
								<QuestionCard
									question={questions[questionNo]}
									nextCallback={nextButton}
									checkAnswerCallback={checkAnswer}
									selectedAnswer={selectedAnswer}
									answer={answer}
								/>
								<p className="kesion-number">
									{questionNo + 1} of 5
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
