import { useContext, useEffect } from "react";
import StoreContext from "../redux/store";

function Image() {
	const { state, dispatch } = useContext(StoreContext);

	useEffect(
		function () {
			if (state.selectedBreed) {
				fetch(
					`https://bedu-dogs-api.herokuapp.com/breeds/${state.selectedBreed}/images`
				)
					.then(function (response) {
						return response.json();
					})
					.then(function ({ data }) {
						dispatch({ type: "update_image", payload: data });
					});
			}
		},
		[state.selectedBreed]
	);

	return state.image ? (
		<img src={state.image} className="img-fluid mt-3" />
	) : null;
}

export default Image;
