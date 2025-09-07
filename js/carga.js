// renderTablaPrincipal.js (nuevo archivo o dentro de crud.js)
function renderTablaPrincipal() {
  const tbody = document.querySelector("#tabla-clasificacion tbody");
  tbody.innerHTML = "";

  const gremios = JSON.parse(localStorage.getItem("gremios")) || [];
  if (!gremios.length) return;

  const menorRank = Math.min(...gremios.map(g => g[0]));

  gremios.forEach(([rank, name, score]) => {
    const fila = document.createElement("tr");

    const celdaRank = document.createElement("td");
    celdaRank.textContent = rank;

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = name + (rank === menorRank ? " 👑" : "");

    const celdaPuntaje = document.createElement("td");
    celdaPuntaje.textContent = score + " 🏆";

    fila.appendChild(celdaRank);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPuntaje);

    tbody.appendChild(fila);
  });
}
