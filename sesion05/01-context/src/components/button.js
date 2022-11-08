import ModeContext from "../contexts/mode";
import { useContext } from "react";

function Button({ type, label }) {
	const { mode } = useContext(ModeContext);

	return (
		<button type={type} className={mode ? "btn btn-light" : "btn btn-dark"}>
			{label}
		</button>
	);
}

export default Button;
