# Tabla de Clasificación - Proyecto Web

Este proyecto muestra una tabla de clasificación con imágenes, estilos personalizados, ordenamiento dinámico y funcionalidad para capturar pantalla.

## 🔁 Clonar o Descargar

Para comenzar, puedes optar por una de estas dos opciones:

- **Clonar el repositorio** usando Git:

  ```bash
  git clone https://github.com/usuario/repositorio.git
  ```

* **Descargar el último tag** desde la sección **Releases** del repositorio en GitHub.

## 🧰 Requisitos

* Tener instalado **Visual Studio Code**.
* Conexión a Internet para acceder a las librerías externas (como `html2canvas`).

## 🖥️ Ejecutar el Proyecto

1. Abre la carpeta clonada o descargada en **Visual Studio Code**.
2. Ve a la pestaña de **Extensiones** y busca **Live Server**.
3. Instala la extensión **Live Server**.
4. Haz clic derecho sobre el archivo `index.html` y selecciona **"Open with Live Server"**.

Esto abrirá el proyecto en tu navegador por medio de un servidor local, lo cual es necesario para que las capturas de pantalla funcionen correctamente.

## ✏️ Editar la Tabla

Las ediciones de la tabla se realizan en el archivo `carga.js`.
Ahí encontrarás una constante llamada `gremios`, que contiene los datos de cada fila de la tabla.

La estructura de cada entrada debe seguir este orden:

```js
const gremios = [
  [Rank, "TAG + Nombre del Gremio", Puntaje],
  [1, "[ABC] Ejemplo Gremio", 1200],
  ...
];
```

> El primer gremio en la lista se mostrará con una corona junto a su nombre.
> Utilicen esta página: [click aquí](http://gzidlerpg.appspot.com/web/scores?tid=233060001)
