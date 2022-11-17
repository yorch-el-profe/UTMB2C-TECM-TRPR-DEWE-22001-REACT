const path = require("node:path");
const express = require("express");
const app = express();

// Exponer todo el contenido de la carpeta "public"
app.use("/assets", express.static(path.join(__dirname, "public")));

app.listen(8080);
