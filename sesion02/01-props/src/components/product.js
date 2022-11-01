/*
  Destructuring (ES6)

  const obj = {a: 0, b: 1, c: 2, d: 3, e: 4};

  Versión ES5
  const a = obj.a;
  const c = obj.c;
  const d = obj.d;

  Versión ES6
  const {a, c, d} = obj;

  ---------------------------------------------------------------
  const person = {id: 4000, name: 'Paquito', age: 29};

  Versión ES5
  const id = person.id;

  Versión ES6
  const { id } = person;

  ---------------------------------------------------------------
  const arr = [1,2,3,4];

  Versión ES5
  const primerElemento = arr[0];
  const segundoElemento = arr[1];
  const tercerElemento = arr[2];

  Versión ES6
  const [primerElemento, segundoElemento, tercerElemento] = arr;
   
  ---------------------------------------------------------------
  function f(obj) {
    console.log(obj.propiedad)
  }

  function f({ propiedad }) {
    console.log(propiedad)
  }
*/

/*
  Spread Operator

  const arr = [1,2,3];
  const arr2 = [-1, 0, ...arr] => [-1, 0, 1, 2, 3]

  const obj = {a: 0, b: 1}

  const obj2 = {...obj, c: 3, d: 4} => {a: 0, b: 1, c3: d: 4}
*/

function Product({ image, price, name, description }) {
	return (
		<figure className="snip1171">
			<img src={image} alt={name} />
			<div className="price">${price} MXN</div>
			<figcaption>
				<h3>{name}</h3>
				<p>{description}</p>
				<a href="#">Agregar al carrito</a>
			</figcaption>
		</figure>
	);
}

export default Product;
