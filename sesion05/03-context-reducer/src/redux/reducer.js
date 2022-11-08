function reducer(state, action) {
	let meal;

	switch (action.type) {
		case "add":
			meal = state.cart.find((c) => c.id === action.payload);

			if (meal) {
				meal.quantity++;
				return { cart: [...state.cart] };
			} else {
				return { cart: [...state.cart, { id: action.payload, quantity: 1 }] };
			}

		case "remove":
			meal = state.cart.find((c) => c.id === action.payload);

			if (meal) {
				if (meal.quantity > 0) {
					meal.quantity--;
				}
				return { cart: [...state.cart] };
			} else {
				return state;
			}
	}
}

export default reducer;
