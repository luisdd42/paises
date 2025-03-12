import React from "react";
import ListaPersonajes from "./ListaPersonajes"; // Importamos el componente ListaPersonajes

function App() {
  return (
    <div className="App">
      {/* Renderizamos el componente ListaPersonajes */}
      <ListaPersonajes />
    </div>
  );
}

export default App; // Exportamos el componente para que sea utilizado en index.jsx
