function Button({ type, label, mode }) {
	return (
		<button type={type} className={mode ? "btn btn-light" : "btn btn-dark"}>
			{label}
		</button>
	);
}

export default Button;
