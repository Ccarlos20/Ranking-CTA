document.addEventListener("DOMContentLoaded", () => {
  // Crear el contenedor
  const divCaptura = document.createElement("div");
  divCaptura.id = "captura-contenedor";
  divCaptura.style.textAlign = "center";
  divCaptura.style.marginTop = "20px";

  // Crear el botón
  const boton = document.createElement("button");
  boton.textContent = "📸 Capturar pantalla";
  boton.style.padding = "10px 20px";
  boton.style.fontSize = "1em";
  boton.style.cursor = "pointer";

  // Agregar el botón al div
  divCaptura.appendChild(boton);

  // Insertar el div después de la imagen inferior
  const imagenInferior = document.querySelector(".imagen-inferior");
  if (imagenInferior && imagenInferior.parentNode) {
    imagenInferior.parentNode.insertBefore(divCaptura, imagenInferior.nextSibling);
  }

  // Acción del botón
  boton.addEventListener("click", () => {
    html2canvas(document.body, { useCORS: true }).then(canvas => {
      const enlace = document.createElement("a");
      enlace.download = "captura.png";
      enlace.href = canvas.toDataURL("image/png");
      enlace.click();
    });
  });
});
