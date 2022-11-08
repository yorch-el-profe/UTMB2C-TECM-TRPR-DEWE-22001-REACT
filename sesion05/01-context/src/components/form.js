import Button from "./button";
import Input from "./input";

function Form() {
	return (
		<form>
			<Input label="Username" type="text" />
			<Input label="Password" type="password" />
			<Button label="Submit" type="button" />
		</form>
	);
}

export default Form;
