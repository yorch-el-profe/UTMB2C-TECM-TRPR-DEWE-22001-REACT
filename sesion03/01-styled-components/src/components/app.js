import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	background-color: ${(props) => (props.isLight ? "white" : "black")};

	& h1,
	& h2 {
		margin: 0;
		color: ${(props) => (props.isLight ? "black" : "white")};
	}

	& h2 {
		font-size: 50px;
	}
`;

const Title = styled.h1`
	font-size: 100px;
`;

function App() {
	const [isLight, setIsLight] = useState(true);

	function handleBtn() {
		setIsLight(!isLight);
	}

	return (
		<Container isLight={isLight}>
			<Title>Hello World</Title>
			<h2>from React</h2>
			<button onClick={handleBtn}>
				{isLight ? "Modo Oscuro" : "Modo Claro"}
			</button>
		</Container>
	);
}

export default App;
