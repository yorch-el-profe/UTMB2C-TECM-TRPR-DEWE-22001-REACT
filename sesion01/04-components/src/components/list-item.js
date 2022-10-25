function ListItem(props) {
	return <li className="list-group-item">{props.text}</li>;
}

/**
 * Los "props" de un componente son parámetros que recibe
 * a manera de atributos de HTML.
 *
 * Para pasar props a un componente:
 *  const miVariable = "Hello World";
 *  <Componente prop1="valor1" prop2="valor2" prop3={miVariable}  />
 *
 * Si se utilizan "" en el prop entonces el valor es una cadena de texto fijo
 * Si se utilizan {} en el prop entonces es un valor asociado a una variable
 *
 * Para recibir props en una función:
 *
 *  function Component(props) {
 *    console.log(props); // {prop1: "...", prop2: "...", prop3: "..."}
 *  }
 */

export default ListItem;
