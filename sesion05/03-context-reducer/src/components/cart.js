import ReduxContext from "../redux/redux";
import { useContext } from "react";

function Cart() {
	const { getters } = useContext(ReduxContext);

	return (
		<div className="modal fade" tabIndex="-1" id="cart">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Carrito de compra</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<ul className="list-group">
							{getters.getCart().map((meal) => {
								return (
									<li className="list-group-item d-flex justify-content-between align-items-center">
										{getters.getMeal(meal.id)}
										<span className="badge bg-primary rounded-pill">
											{meal.quantity}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
