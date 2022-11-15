import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
	const { id } = useParams();

	const [pokemon, setPokemon] = useState(null);

	useEffect(
		function () {
			fetch("https://bedu-pokemon-api.herokuapp.com/pokemon/" + id)
				.then(function (response) {
					return response.json();
				})
				.then(function ({ data }) {
					setPokemon(data);
				});
		},
		[id]
	);

	return (
		<div className="card">
			<img
				src={pokemon?.artwork}
				className="card-img-top"
				alt={pokemon?.name}
			/>
			<div className="card-body">
				<h5 className="card-title text-capitalize">{pokemon?.name}</h5>
				<p className="card-text text-capitalize">{pokemon?.types.join(", ")}</p>
			</div>
		</div>
	);
}

export default Detail;
