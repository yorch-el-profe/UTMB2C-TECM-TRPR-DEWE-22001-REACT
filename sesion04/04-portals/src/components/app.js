import styled from "styled-components";
import LoadingPortal from "../portals/loading";

const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 100px;
`;

function App() {
	return (
		<>
			<LoadingPortal />
			<Container>
				<Title>Hello World</Title>
			</Container>
		</>
	);
}

export default App;
