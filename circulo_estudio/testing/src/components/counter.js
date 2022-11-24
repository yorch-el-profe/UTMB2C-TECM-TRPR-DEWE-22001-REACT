import { useState } from "react";

function Counter() {
	const [counter, setCounter] = useState(0);

	function onClick() {
		setCounter(counter + 1);
	}

	return (
		<>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me!</button>
		</>
	);
}

export default Counter;
