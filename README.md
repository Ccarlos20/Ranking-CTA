# Tabla de Clasificación - Proyecto Web

Este proyecto muestra una tabla de clasificación con imágenes, estilos personalizados, ordenamiento dinámico, funcionalidad para capturar pantalla y un **CRUD integrado** para gestionar los gremios directamente desde la página.

## Página en línea

Puedes ver el proyecto funcionando en:
[https://ranking-cta.vercel.app/](https://ranking-cta.vercel.app/)

## Clonar o Descargar

Para trabajar localmente, puedes optar por:

* **Clonar el repositorio** usando Git:

  ```bash
  git clone https://github.com/usuario/repositorio.git
  ```

* **Descargar el último release** desde la sección **Releases** del repositorio en GitHub.

## Requisitos

* Tener instalado **Visual Studio Code**.
* Conexión a Internet para acceder a librerías externas (como `html2canvas`).

## Ejecutar el Proyecto

1. Abre la carpeta clonada o descargada en **Visual Studio Code**.
2. Instala la extensión **Live Server**.
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

Esto abrirá el proyecto en tu navegador mediante un servidor local, necesario para que las capturas de pantalla funcionen correctamente.

## Gestionar la Tabla con el CRUD

Ahora la tabla se puede editar directamente desde la página:

* Haz clic en el botón **Tabla** para abrir el panel de gestión.
* Cada fila tiene un botón **Editar** que se transforma en **Guardar** para guardar cambios individuales.
* Puedes **agregar nuevos gremios** con el botón **Agregar**, llenando Rank, Nombre y Puntaje en la fila que aparece, y luego presionando **Guardar** o **Cancelar**.
* Los cambios se **guardan automáticamente en el navegador** usando `localStorage`, por lo que se mantienen al recargar la página.

> El primer gremio en la lista se mostrará con una corona junto a su nombre.

> Utilicen esta página para la clasificación: [click aquí](http://gzidlerpg.appspot.com/web/scores?tid=233060001)
