import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const greeting = <h1>Hola Mundo</h1>;

/**
 * Renderiza TODA LA APLICACIÓN DE REACT
 * y el resultado lo poner en el nodo "root"
 */
root.render(greeting);
