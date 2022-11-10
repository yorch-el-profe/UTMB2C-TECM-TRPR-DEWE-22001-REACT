function reducer(state, action) {
	switch (action.type) {
		case "update_breeds":
			return { ...state, breeds: action.payload };

		case "update_image":
			return { ...state, image: action.payload };
	}
}

export default reducer;
