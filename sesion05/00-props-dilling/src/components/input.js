function Input({ label, type }) {
	return (
		<div className="mb-3">
			<label className="form-label">{label}</label>
			<input type={type} className="form-control" />
		</div>
	);
}

export default Input;
