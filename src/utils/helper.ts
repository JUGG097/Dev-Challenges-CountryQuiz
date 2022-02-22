import { QuestionData } from "./data";

export const RandomQuestionData = () => {
	let questions = QuestionData;
	questions.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	return questions.slice(0);
};

export const questionsTotalNumber: number = QuestionData.length;

// export const RandomQuestionData_2 = () => {
// 	questions.sort(function (a, b) {
// 		return 0.5 - Math.random();
// 	});
// 	// let question: QuestionProp | undefined = questions.pop();

// 	// console.log(question);
// 	// console.log(questions.length);
// 	return questions.pop();
// };
