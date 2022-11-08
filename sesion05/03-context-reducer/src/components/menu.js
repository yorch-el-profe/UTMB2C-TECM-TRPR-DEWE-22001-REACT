import { useContext } from "react";
import MenuContext from "../redux/menu";
import ReduxContext from "../redux/redux";

function Menu() {
	const menu = useContext(MenuContext);
	const { actions, getters } = useContext(ReduxContext);

	return (
		<ul className="list-group">
			{menu.map(({ meal, price, id }) => (
				<li className="list-group-item d-flex justify-content-between align-items-center">
					<span>
						{meal} (${price.toFixed(2)})
					</span>
					<div className="d-flex align-items-center">
						<button className="btn" onClick={() => actions.removeMeal(id)}>
							-
						</button>
						<span class="badge bg-primary rounded-pill">
							{getters.getQuantity(id)}
						</span>
						<button className="btn" onClick={() => actions.addMeal(id)}>
							+
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default Menu;
