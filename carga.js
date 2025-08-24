const gremios = [
  [16, "[CUH] Cruzada Pituda", 1209],
  [26, "[PBM] Para Bellum", 1141],
  [42, "[JSK] ★JabbaSckoll★", 1072],
  [170, "[SSL] Los Shelby S.L", 875],
  [215, "[3DS] Academia Draconica", 839],
  [350, "[ARA] Malditos", 693]
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
