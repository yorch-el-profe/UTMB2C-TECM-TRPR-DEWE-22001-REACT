import Product from "./product";
import products from "../data.json";

function App() {
	return (
		<div className="container">
			{products.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</div>
	);
}

// {...product} => { name: product.name, description: product.description}
/*
  <Product {...product} /> => <Product name={product.name} description={product.description} />
*/

export default App;
