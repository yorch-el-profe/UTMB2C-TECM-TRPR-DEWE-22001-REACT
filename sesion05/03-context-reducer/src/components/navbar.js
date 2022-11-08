function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Uber Eats
				</a>
				<button
					className="btn btn-dark"
					data-bs-toggle="modal"
					data-bs-target="#cart"
				>
					<i className="bi-cart-fill text-white" />
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
