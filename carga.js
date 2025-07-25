const gremios = [
  [309, 748, "[ARA] Malditos"],
  [17, 1207, "[CUH] Cruzada Pituda"],
  [51, 1053, "[JSK] ★JabbaSckoll★"],
  [183, 862, "[SSL] Los Shelby S.L"],
  [195, 847, "[3DS] Academia Draconica"],
  [23, 1156, "[PBM] Para Bellum"]
];

const tbody = document.querySelector("#tabla-clasificacion tbody");
const menorRank = Math.min(...gremios.map(g => g[0]));

gremios.forEach(([rank, score, name]) => {
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
