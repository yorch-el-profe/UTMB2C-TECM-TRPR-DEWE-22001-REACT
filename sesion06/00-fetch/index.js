/*
  Por default fetch hace peticiones de tipo GET

  Si se necesita realizar peticiones de tipo POST, PUT, DELETE, etc.
  es necesario proporcionar un segundo parametro de la siguiente forma.

  fetch(url, { method: "PUT" });

  Si se necesita enviar un body es necesario enviarlo como si fuera
  texto y proporcionar el encabezado "Content-Type":

  fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  })
*/

// GET
fetch("https://bedu-dogs-api.herokuapp.com/breeds")
	.then(function (response) {
		if (response.ok) {
			// Backend respondió de manera correcta (200, 201, 204)
			return response.json(); // .json regresa una promesa que transforma el body en JSON
		} else {
			return Promise.reject();
		}
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function () {
		console.log("Error al realizar peticion");
	});
