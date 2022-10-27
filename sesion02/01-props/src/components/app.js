import Product from "./product";
import products from "../data.json";

function App() {
	return (
		<div className="container">
			{products.map((product) => (
				<Product
					key={product.id}
					image={product.image}
					price={product.price}
					name={product.name}
					description={product.description}
				/>
			))}
		</div>
	);
}

export default App;
