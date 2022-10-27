function App() {
	let counter = 0;

	function handleClick() {
		counter++;
		console.log(counter);
	}

	return (
		<div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
			<div className="col-6 text-center">
				<h1 className="fs-1">{counter}</h1>
				<button
					className="btn btn-primary btn-lg"
					type="button"
					onClick={handleClick}
				>
					Clickeame 🥵
				</button>
			</div>
		</div>
	);
}

export default App;
