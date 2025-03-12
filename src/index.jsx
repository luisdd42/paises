import React from "react"; // Importa React
import ReactDOM from "react-dom"; // Importa ReactDOM para renderizar la aplicación
import "./index.css"; // Importa el archivo de estilos si lo tienes
import App from "./App"; // Asegúrate de que el archivo App.jsx esté en la misma carpeta o ajusta la ruta

// Renderiza el componente principal 'App' dentro del contenedor con id 'root' en el archivo HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Este id 'root' debe existir en tu archivo HTML
);
