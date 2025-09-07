document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("#tabla-clasificacion");
  const encabezados = tabla.querySelectorAll("th");
  let direccion = 1; // 1 ascendente, -1 descendente
  let indiceOrdenActual = null;

  encabezados.forEach((th, indice) => {
    th.addEventListener("click", () => {
      if (indiceOrdenActual === indice) {
        direccion *= -1;
      } else {
        direccion = 1;
        indiceOrdenActual = indice;
      }

      const filas = Array.from(tabla.querySelectorAll("tbody tr"));

      filas.sort((a, b) => {
        const celdaA = a.children[indice].textContent.replace(/[^\d]/g, "");
        const celdaB = b.children[indice].textContent.replace(/[^\d]/g, "");

        return (isNaN(celdaA) || isNaN(celdaB))
          ? a.children[indice].textContent.localeCompare(b.children[indice].textContent)
          : (celdaA - celdaB) * direccion;
      });

      tabla.querySelector("tbody").innerHTML = "";
      filas.forEach(f => tabla.querySelector("tbody").appendChild(f));

      encabezados.forEach(th => th.classList.remove("asc", "desc"));
      th.classList.add(direccion === 1 ? "asc" : "desc");
    });
  });
});
