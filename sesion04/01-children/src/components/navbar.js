import styled from "styled-components";

const Container = styled.div`
	display: flex;
	height: 80px;
	justify-content: space-between;
	align-items: center;
	background-color: #222;
	color: white;
	padding-left: 30px;
	padding-right: 30px;
`;

function Navbar({ title, children }) {
	return (
		<Container>
			<h1>{title}</h1>
			{children}
		</Container>
	);
}

export default Navbar;
