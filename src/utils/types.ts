export type DataTypeDefinition = {
	question: string;
	imageQuestion: boolean;
	imageUrl?: string;
	answer: string;
	options: string[];
}[];

export type QuestionProp = {
	question: string;
	imageQuestion: boolean;
	imageUrl?: string;
	answer: string;
	options: string[];
};

export type AnswerObj = {
	correct: boolean;
	selectedOption: string;
	correctOption: string;
};

export type QuestionCardProps = {
	question: QuestionProp;
	nextCallback: any;
	checkAnswerCallback: any;
	selectedAnswer: boolean;
	answer?: AnswerObj;
};

export type ResultCardProps = {
	reset: any;
	score: number;
};
