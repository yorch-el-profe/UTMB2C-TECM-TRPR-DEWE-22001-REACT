/*
 * reducer: Una función que actualizará el estado, es decir, regresando una nueva versión del estado actual.
 * action: Objeto que contiene la acción a realizar y datos adicionales
 */

function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return { counter: state.counter + 1 };

		case "decrement":
			return { counter: state.counter > 0 ? state.counter - 1 : 0 };

		case "reset":
			return { counter: 0 };
	}
}

export default reducer;
