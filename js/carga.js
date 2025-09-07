const gremios = JSON.parse(localStorage.getItem("gremios")) || [
  [17, "[CUH] Cruzada Pituda", 1198],
  [26, "[PBM] Para Bellum", 1159],
  [36, "[JSK] ★JabbaSckoll★", 1087],
  [157, "[SSL] Los Shelby S.L", 893],
  [222, "[3DS] Academia Draconica", 824],
  [370, "[ARA] Malditos", 678]
];

const tbody = document.querySelector("#tabla-clasificacion tbody");
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
