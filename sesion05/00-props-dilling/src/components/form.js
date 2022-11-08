import Button from "./button";
import Input from "./input";

function Form({ mode }) {
	return (
		<form>
			<Input label="Username" type="text" />
			<Input label="Password" type="password" />
			<Button label="Submit" type="button" mode={mode} />
		</form>
	);
}

export default Form;
