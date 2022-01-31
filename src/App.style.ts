import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.png";

export const BaseContainer = createGlobalStyle`
	body {
        background-image: url(${BGImage});
        background-size: cover;
    }
`;

export const Container = styled.section`
	.container {
		height: 100vh;
		position: relative;
		// border: 3px solid green;
	}

	.vertical-center {
		width: 18rem;
		margin: 0;
		position: absolute;
		top: 40%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		// border: 1px solid red;
	}

	h3 {
		margin: 0;
		color: #f2f2f2;
		font-family: "Poppins", sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 1.5rem;
	}

	.kesion-number {
		text-align: center;
		font-family: "Poppins", sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 1.5rem;
		color: white;
	}

	.vertical-center footer,
	a {
		color: white;
	}
`;
