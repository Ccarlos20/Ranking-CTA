document.addEventListener("DOMContentLoaded", () => {
  const btnTabla = document.getElementById("btnTabla");
  const panelCRUD = document.getElementById("panelCRUD");
  const panelAgregar = document.getElementById("panelAgregar");
  const cerrarPanel = document.getElementById("cerrarPanel");
  const tbodyCRUD = document.querySelector("#tablaCRUD tbody");
  const btnAgregar = document.getElementById("agregarFila");

  const nuevoRank = document.getElementById("nuevoRank");
  const nuevoNombre = document.getElementById("nuevoNombre");
  const nuevoPuntaje = document.getElementById("nuevoPuntaje");
  const guardarNuevo = document.getElementById("guardarNuevo");
  const cancelarNuevo = document.getElementById("cancelarNuevo");

  // Cargar desde localStorage o valores iniciales
  let gremios = JSON.parse(localStorage.getItem("gremios")) || [
    [17, "[CUH] Cruzada Pituda", 1198],
    [26, "[PBM] Para Bellum", 1159],
    [36, "[JSK] ★JabbaSckoll★", 1087],
    [157, "[SSL] Los Shelby S.L", 893],
    [222, "[3DS] Academia Draconica", 824],
    [370, "[ARA] Malditos", 678]
  ];

  // Mostrar panel CRUD
  btnTabla.addEventListener("click", () => {
    renderCRUD();
    panelCRUD.style.display = "flex";
  });

  // Cerrar panel CRUD
  cerrarPanel.addEventListener("click", () => {
    panelCRUD.style.display = "none";
  });

  // Renderizar la tabla CRUD
  function renderCRUD() {
    tbodyCRUD.innerHTML = "";
    gremios.forEach((gremio, i) => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td><input type="number" value="${gremio[0]}" disabled></td>
        <td><input type="text" value="${gremio[1]}" disabled></td>
        <td><input type="number" value="${gremio[2]}" disabled></td>
        <td>
          <button class="editar btn">Editar</button>
          <button class="eliminar btn cancelar">Eliminar</button>
        </td>
      `;

      const btnEditar = fila.querySelector(".editar");
      const btnEliminar = fila.querySelector(".eliminar");

      // Editar -> Guardar
      btnEditar.addEventListener("click", () => {
        const inputs = fila.querySelectorAll("input");

        if (btnEditar.textContent.includes("Editar")) {
          inputs.forEach(input => input.disabled = false);
          btnEditar.textContent = "Guardar";
          btnEditar.classList.add("guardar");
        } else {
          gremios[i] = [
            parseInt(inputs[0].value) || 0,
            inputs[1].value.trim(),
            parseInt(inputs[2].value) || 0
          ];
          localStorage.setItem("gremios", JSON.stringify(gremios));

          inputs.forEach(input => input.disabled = true);
          btnEditar.textContent = "Editar";
          btnEditar.classList.remove("guardar");
        }
      });

      // Eliminar
      btnEliminar.addEventListener("click", () => {
        gremios.splice(i, 1);
        localStorage.setItem("gremios", JSON.stringify(gremios));
        renderCRUD();
      });

      tbodyCRUD.appendChild(fila);
    });
  }

  // Abrir panel de agregar
  btnAgregar.addEventListener("click", () => {
    panelAgregar.style.display = "flex";
  });

  // Guardar nuevo gremio
  guardarNuevo.addEventListener("click", () => {
    const rank = parseInt(nuevoRank.value) || 0;
    const nombre = nuevoNombre.value.trim() || "Nuevo Gremio";
    const puntaje = parseInt(nuevoPuntaje.value) || 0;

    gremios.push([rank, nombre, puntaje]);
    localStorage.setItem("gremios", JSON.stringify(gremios));

    // Resetear inputs
    nuevoRank.value = "";
    nuevoNombre.value = "";
    nuevoPuntaje.value = "";

    panelAgregar.style.display = "none";
    renderCRUD();
  });

  // Cancelar nuevo
  cancelarNuevo.addEventListener("click", () => {
    nuevoRank.value = "";
    nuevoNombre.value = "";
    nuevoPuntaje.value = "";
    panelAgregar.style.display = "none";
  });
});
