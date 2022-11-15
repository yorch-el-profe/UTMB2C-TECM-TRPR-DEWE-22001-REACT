import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
	const [pokemon, setPokemon] = useState([]);
	const navigate = useNavigate();

	useEffect(function () {
		fetch("https://bedu-pokemon-api.herokuapp.com/pokemon")
			.then(function (response) {
				return response.json();
			})
			.then(function ({ data }) {
				setPokemon(data);
			});
	}, []);

	function goToPage(id) {
		// No es viable porque recarga toda la página
		//window.location.href = `/pokemon/${id}`;

		// Navegación a través de la programación
		navigate(`/pokemon/${id}`);
	}

	return (
		<div className="list-group">
			{pokemon.map((pokemon) => (
				<button
					key={pokemon.number}
					type="button"
					className="list-group-item list-group-item-action text-capitalize"
					onClick={() => goToPage(pokemon.number)}
				>
					#{pokemon.number} {pokemon.name}
				</button>
			))}
		</div>
	);
}

export default List;
