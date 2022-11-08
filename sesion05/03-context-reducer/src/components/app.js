import Navbar from "./navbar";
import Cart from "./cart";
import Menu from "./menu";
import { useReducer } from "react";
import reducer from "../redux/reducer";
import initialState from "../redux/initialState";
import ReduxContext from "../redux/redux";
import MenuContext from "../redux/menu";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const menu = [
		{
			id: 100,
			meal: "Hamburguesa sencilla",
			price: 52,
		},
		{
			id: 101,
			meal: "Hot Dog",
			price: 23,
		},
		{
			id: 102,
			meal: "Hamburguesa doble",
			price: 70,
		},
	];

	const store = {
		getters: {
			getCart: function () {
				return state.cart;
			},
			getQuantity: function (id) {
				const meal = state.cart.find((c) => c.id === id);
				return meal ? meal.quantity : 0;
			},
			getMeal: function (id) {
				const meal = menu.find((m) => m.id === id);
				return meal ? meal.meal : "";
			},
		},
		actions: {
			addMeal: function (id) {
				dispatch({ type: "add", payload: id });
			},
			removeMeal: function (id) {
				dispatch({ type: "remove", payload: id });
			},
		},
	};

	return (
		<ReduxContext.Provider value={store}>
			<MenuContext.Provider value={menu}>
				<Navbar />
				<Cart />
				<div className="container mt-5">
					<Menu />
				</div>
			</MenuContext.Provider>
		</ReduxContext.Provider>
	);
}

export default App;
