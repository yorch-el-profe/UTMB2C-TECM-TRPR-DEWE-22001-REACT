/*
  Un fragmento es un nodo virtual que sirve para agrupar más elementos. Al ser virtual no tiene ninguna representación en el UI, evitando agregar más elementos innecesarios al HTML.

  <React.Fragment><React.Fragment/> es lo mismo que <></>
 */

function App() {
	return (
		<>
			<h1>Hello</h1>
			<h2>World</h2>
		</>
	);
}

export default App;
