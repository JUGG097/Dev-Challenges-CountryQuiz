import styled from "styled-components";

export const Card = styled.div`
	background: #ffffff;
	border-radius: 24px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	.winner-img {
		width: 120px;
	}

	> h3 {
		margin-top: 25px;
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		color: #1d355d;
	}

	> p {
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		color: #1d355d;
		font-size: 0.8rem;
		margin-bottom: 30px;
	}

	> p > span {
		color: #60bf88;
		font-size: 1.2rem;
	}

	> button {
		border: 2px solid #1d355d;
		border-radius: 10px;
		width: 200px;
		padding: 10px;
		margin: auto;
		cursor: pointer;
		background: white;
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		color: #1d355d;
	}

	button:hover {
		background: #f9a826;
		color: white;
	}
`;
