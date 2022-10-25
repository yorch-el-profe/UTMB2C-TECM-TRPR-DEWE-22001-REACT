import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(function () {
	root.render(
		<div id="container">
			<h1>{new Date().toLocaleTimeString()}</h1>
			<h2>Hora Actual</h2>
		</div>
	);
}, 1000);
