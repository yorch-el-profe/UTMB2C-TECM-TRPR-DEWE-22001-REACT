import Form from "./form";

function Content({ mode }) {
	return (
		<div
			className={`d-flex justify-content-center align-items-center  vh-100 ${
				mode ? "bg-dark text-white" : ""
			}`}
		>
			<Form mode={mode} />
		</div>
	);
}

export default Content;
