function Toggle({ setMode }) {
	return (
		<div className="form-check form-switch">
			<input
				className="form-check-input"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
				onChange={(e) => setMode(e.target.checked)}
			/>
		</div>
	);
}

export default Toggle;
