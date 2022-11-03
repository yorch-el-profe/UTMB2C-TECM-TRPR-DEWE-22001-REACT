import styled from "styled-components";

const List = styled.ul`
	list-style: none;
	display: flex;

	& > li {
		margin-right: 15px;
		font-size: 18px;
		cursor: pointer;
	}
`;

function NavbarOptions({ children }) {
	return <List>{children}</List>;
}

export default NavbarOptions;
