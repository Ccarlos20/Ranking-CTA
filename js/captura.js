document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnCaptura");

  if (boton) {
    boton.addEventListener("click", () => {
      html2canvas(document.body, { useCORS: true }).then(canvas => {
        const enlace = document.createElement("a");
        enlace.download = "captura.png";
        enlace.href = canvas.toDataURL("image/png");
        enlace.click();
      });
    });
  }
});
