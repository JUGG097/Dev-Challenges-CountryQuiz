import { DataTypeDefinition } from "./types";

// Using flag-icons node module for the flags
export const QuestionData: DataTypeDefinition = [
	{
		question: "Kabul is the capital of",
		imageQuestion: false,
		imageUrl: "",
		answer: "Afghanistan",
		options: [
			"Poland",
			"Senegal",
			"Afghanistan",
			"Turks and Caicos Islands",
		],
	},
	{
		question: "Mariehamn is the capital of",
		imageQuestion: false,
		imageUrl: "",
		answer: "Åland Islands",
		options: ["Åland Islands", "Andorra", "India", "Réunion"],
	},
	{
		question: "Saint John's is the capital of",
		imageQuestion: false,
		imageUrl: "",
		answer: "Antigua and Barbuda",
		options: ["Ethiopia", "Iceland", "Comoros", "Antigua and Barbuda"],
	},
	{
		question: "Brussels is the capital of",
		imageQuestion: false,
		imageUrl: "",
		answer: "Belgium",
		options: ["Bahamas", "Bulgaria", "Belgium", "Nicaragua"],
	},
	{
		question: "Gaborone is the capital of",
		imageQuestion: false,
		imageUrl: "",
		answer: "Botswana",
		options: ["Botswana", "Eritrea", "Angola", "Albania"],
	},
	{
		question: "Yaoundé is the capital of",
		imageQuestion: false,
		imageUrl: "",
		answer: "Cameroun",
		options: ["Papua New Guinea", "Cameroun", "Brazil", "Japan"],
	},
	{
		question: "Which country does this flag belong to?",
		imageQuestion: true,
		imageUrl: "ar",
		answer: "Argentina",
		options: ["Angola", "Mozambique", "Burundi", "Argentina"],
	},
	{
		question: "Which country does this flag belong to?",
		imageQuestion: true,
		imageUrl: "bi",
		answer: "Burundi",
		options: ["South Sudan", "Zambia", "Burundi", "Aruba"],
	},
	{
		question: "Which country does this flag belong to?",
		imageQuestion: true,
		imageUrl: "cy",
		answer: "Cyprus",
		options: ["Cyprus", "Netherlands", "Senegal", "Israel"],
	},
	{
		question: "Which country does this flag belong to?",
		imageQuestion: true,
		imageUrl: "ls",
		answer: "Lesotho",
		options: ["American Samoa", "Turkmenistan", "China", "Lesotho"],
	},
	{
		question: "Which country does this flag belong to?",
		imageQuestion: true,
		imageUrl: "md",
		answer: "Moldova",
		options: ["Albania", "Moldova", "Virgin Islands (British)", "Libya"],
	},
	{
		question: "Which country does this flag belong to?",
		imageQuestion: true,
		imageUrl: "ng",
		answer: "Nigeria",
		options: ["Grenada", "Guadeloupe", "Pakistan", "Nigeria"],
	},
];

export const RandomQuestionData = () => {
	let randomInt: number = Math.floor(Math.random() * 5);
	// console.log(QuestionData.slice(randomInt, randomInt + 5));
	return QuestionData.slice(randomInt, randomInt + 5);
};
