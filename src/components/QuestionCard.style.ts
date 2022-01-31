import styled from "styled-components";

export const Card = styled.div`
	background: #ffffff;
	border-radius: 24px;
	padding: 10px;
	// position: relative;
	// max-width: 200px;

	p {
		margin: 0;
	}

	img {
		margin: 0;
	}

	.adventure-img {
		width: 100px;
		// position: absolute;
		// top: -65%;
		// right: 0;
		transform: translate(180px, -50px);
	}

	.question {
		color: #2f527b;
		font-family: "Poppins", sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 1rem;
		transform: translateY(-40px);
		// margin-bottom: 5px;
	}

	.img-flag {
		width: 40px;
		border-radius: 5px;
	}

	.options {
		transform: translateY(-40px);
	}

	.options button {
		display: block;
		width: 100%;
		text-align: left;
		border: 2px solid rgba(96, 102, 208, 0.7);
		border-radius: 10px;
		padding: 5px;
		margin-top: 5px;
		cursor: pointer;
		background: #ffffff;
		color: rgba(96, 102, 208, 0.8);
		font-family: "Poppins", sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 0.8rem;
	}

	.options button:hover {
		background: #f9a826;
		color: white;
	}

	.options button > span {
		margin-left: 10px;
	}

	.options .hidden-correct {
		display: none;
	}

	.options .hidden-incorrect {
		display: none;
	}

	.next button {
		width: 100px;
		padding: 5px;
		background: #f9a826;
		color: white;
		border-radius: 10px;
		border: 2px solid rgba(252, 168, 47, 0.4);
		box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
		transform: translateX(165px);
		cursor: pointer;
	}

	.next button:hover {
		background: rgba(96, 102, 208, 0.7);
		box-shadow: 0px 2px 4px rgba(96, 102, 208, 0.7);
	}

	.options .btn-bg-green {
		background: #60bf88;
		color: white;
	}

	.options .btn-bg-green .hidden-correct {
		display: inline;
		float: right;
	}

	.options .btn-bg-red {
		background: #ea8282;
		color: white;
	}

	.options .btn-bg-red .hidden-incorrect {
		display: inline;
		float: right;
		color: white;
	}
`;
