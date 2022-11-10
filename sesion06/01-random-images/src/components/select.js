function Select() {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<div className="col-8">
				<select className="form-select">
					<option>Chihuahua</option>
					<option>Shiba</option>
				</select>
			</div>
			<div className="col-4">
				<button className="btn btn-primary ms-3">Obtener imagen</button>
			</div>
		</div>
	);
}

export default Select;
