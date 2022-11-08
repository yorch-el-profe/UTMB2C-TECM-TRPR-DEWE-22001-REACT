import Form from "./form";
import { useContext } from "react";
import ModeContext from "../contexts/mode";

function Content() {
	const { mode } = useContext(ModeContext);

	return (
		<div
			className={`d-flex justify-content-center align-items-center  vh-100 ${
				mode ? "bg-dark text-white" : ""
			}`}
		>
			<Form />
		</div>
	);
}

export default Content;
