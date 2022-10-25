import ListItem from "./list-item";

function List() {
	return (
		<ul className="list-group">
			<ListItem text="Pasear al perro" />
			<ListItem text="Ir al super" />
			<ListItem text="Hacer el postwork de React" />
			<ListItem text="Vladimir" />
		</ul>
	);
}

export default List;
