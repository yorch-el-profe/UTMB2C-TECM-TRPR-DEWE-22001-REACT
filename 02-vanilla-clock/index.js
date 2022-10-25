const root = document.getElementById("root");

function updateTime() {
	root.innerHTML = `
    <h1>${new Date().toLocaleTimeString()}</h1>
    <h2>Hora Actual</h2>
  `;
}

setInterval(function () {
	updateTime();
}, 1000);

updateTime();
