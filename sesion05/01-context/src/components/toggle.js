import ModeContext from "../contexts/mode";
import { useContext } from "react";

function Toggle() {
	const { setMode } = useContext(ModeContext);

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
